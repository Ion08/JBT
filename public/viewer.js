import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const isMobile = matchMedia('(pointer:coarse)').matches

const draco = new DRACOLoader()
draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
draco.setDecoderConfig({ type: 'js' }) // wasm-js fallback, smaller + works everywhere
const loader = new GLTFLoader()
loader.setDRACOLoader(draco)

document.querySelectorAll('.v3d').forEach(el=>{
  const src=el.dataset.src
  const size=el.dataset.size||''
  const preview=el.dataset.preview||''
  let inited=false

  function placeholder(loading){
    el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#111">
      ${preview?`<img src="${preview}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:.35">`:''}
      <span style="position:relative;font:500 .7rem var(--mono);letter-spacing:.15em;color:var(--faint)">${loading?'LOADING '+size:size}</span>
      ${loading?'':'<span style="position:relative;font:400 .6rem var(--mono);color:var(--faint)">auto-loads on scroll</span>'}
    </div>`
  }
  placeholder(false)

  // auto-init when scrolled into view (with margin so it's ready on arrival)
  const io=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)&&!inited){ inited=true; io.disconnect(); init() } },{rootMargin:'400px'})
  io.observe(el)

  // pause rendering when offscreen
  let onScreen=true
  const ioPause=new IntersectionObserver(es=>{ onScreen=es.some(e=>e.isIntersecting) })
  ioPause.observe(el)

  async function init(){
    placeholder(true)
    const w=el.clientWidth,h=el.clientHeight||w*0.5625
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x111111)
    const camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000)
    const renderer=new THREE.WebGLRenderer({
      antialias: !isMobile && devicePixelRatio<1.5, // dpr>=1.5 doesn't need AA
      powerPreference: isMobile?'low-power':'high-performance',
    })
    renderer.setSize(w,h)
    renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile?1.25:1.75))
    el.innerHTML=''; el.appendChild(renderer.domElement)
    const controls=new OrbitControls(camera,renderer.domElement)
    controls.enableDamping=true; controls.dampingFactor=0.08
    scene.add(new THREE.HemisphereLight(0xffffff,0x222222,1.35))
    const dl=new THREE.DirectionalLight(0xffffff,0.9); dl.position.set(5,10,7); scene.add(dl)
    const group=new THREE.Group(); scene.add(group)
    let meshes=[],center=new THREE.Vector3()
    let renderNeeded=true
    const ro=new ResizeObserver(()=>{const nw=el.clientWidth,nh=el.clientHeight; camera.aspect=nw/nh; camera.updateProjectionMatrix(); renderer.setSize(nw,nh); renderNeeded=true}); ro.observe(el)
    try{
      const gltf=await loader.loadAsync(src)
      gltf.scene.traverse(o=>{ if(o.isMesh){ o.material=new THREE.MeshStandardMaterial({color:0x8A2BE2, metalness:0.4, roughness:0.6}); meshes.push(o) } })
      group.add(gltf.scene)
      const bbox=new THREE.Box3().setFromObject(group)
      const s=bbox.getSize(new THREE.Vector3()), c=bbox.getCenter(new THREE.Vector3())
      center.copy(c); group.position.sub(c)
      const maxDim=Math.max(s.x,s.y,s.z), dist=maxDim*1.6
      camera.position.set(dist*0.7,dist*0.5,dist*0.9); controls.target.set(0,0,0); controls.update()
      renderNeeded=true
    }catch(e){ console.error(e); el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#111;padding:16px;text-align:center">
      <span style="color:#f88;font:500 .68rem var(--mono)">FAILED TO LOAD GLB</span>
      <a href="${src}" class="v3d-btn">DOWNLOAD GLB</a>
    </div>`; return}
    const card=el.closest('.card')
    controls.addEventListener('change',()=>{ renderNeeded=true })
    // on-demand loop: renders only while interacting / onscreen change
    ;(function loop(){ requestAnimationFrame(loop)
      if(!onScreen) return
      controls.update() // damping inertia fires 'change' -> renderNeeded
      if(renderNeeded){ renderer.render(scene,camera); renderNeeded=false }
    })()
  }
})
