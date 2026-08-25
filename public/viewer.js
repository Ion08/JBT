// JBT arsenal viewer — three.js, pre-built GLBs, reset + auto-rotate.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/DRACOLoader.js'

document.querySelectorAll('.v3d').forEach(el=>{
  const src=el.dataset.src
  const size=el.dataset.size||''
  const preview=el.dataset.preview||''
  el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#0b0b0d">
    ${preview?`<img src="${preview}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:.3">`:''}
    <span style="position:relative;font:500 .68rem var(--mono);letter-spacing:.22em;color:var(--faint)">${size}</span>
    <button class="v3d-btn v3d-load" type="button" style="position:relative">Load model</button>
    <span style="position:relative;font:400 .58rem var(--mono);letter-spacing:.14em;color:var(--faint)">PRE-BUILT GLB · NO PARSING</span>
  </div>`
  // ponytail: auto-load when card nears viewport, no click needed
  const io=new IntersectionObserver(es=>{
    if(es.some(e=>e.isIntersecting)){io.disconnect();init()}
  },{rootMargin:'200px'})
  io.observe(el)

  async function init(){
    const btn=el.querySelector('.v3d-load')
    if(btn){btn.textContent='LOADING…';btn.disabled=true}
    const w=el.clientWidth,h=el.clientHeight||w*0.5625
    const scene=new THREE.Scene()
    scene.background=new THREE.Color(0x0b0b0d)
    scene.fog=new THREE.Fog(0x0b0b0d,10,60)
    const camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000)
    const renderer=new THREE.WebGLRenderer({antialias:true})
    renderer.setSize(w,h);renderer.setPixelRatio(Math.min(devicePixelRatio,2))
    el.innerHTML='';el.appendChild(renderer.domElement)
    const controls=new OrbitControls(camera,renderer.domElement)
    controls.enableDamping=true
    controls.autoRotate=true;controls.autoRotateSpeed=1.1
    controls.addEventListener('start',()=>{controls.autoRotate=false})
    // lights: neutral key, purple rim — machined look
    scene.add(new THREE.HemisphereLight(0xdfe4ea,0x0a0a0c,1.05))
    const key=new THREE.DirectionalLight(0xffffff,.9);key.position.set(5,10,7);scene.add(key)
    const rim=new THREE.DirectionalLight(0x8A2BE2,1.1);rim.position.set(-6,4,-6);scene.add(rim)
    const group=new THREE.Group();scene.add(group)
    let grid=null
    const ro=new ResizeObserver(()=>{
      const nw=el.clientWidth,nh=el.clientHeight
      camera.aspect=nw/nh;camera.updateProjectionMatrix();renderer.setSize(nw,nh)
    });ro.observe(el)
    try{
      const loader=new GLTFLoader()
      const draco=new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
      loader.setDRACOLoader(draco)
      const gltf=await new Promise((res,rej)=>loader.load(src,res,undefined,rej))
      const steel=()=>new THREE.MeshStandardMaterial({color:0x8d939c,metalness:.85,roughness:.32})
      gltf.scene.traverse(o=>{if(o.isMesh)o.material=steel()})
      group.add(gltf.scene)
      const bbox=new THREE.Box3().setFromObject(group)
      const s=bbox.getSize(new THREE.Vector3()),c=bbox.getCenter(new THREE.Vector3())
      group.position.sub(c)
      const maxDim=Math.max(s.x,s.y,s.z),dist=maxDim*1.6
      camera.position.set(dist*0.7,dist*0.5,dist*0.9)
      controls.target.set(0,0,0);controls.update()
      grid=new THREE.GridHelper(maxDim*4,24,0x2c2f33,0x1a1c1f)
      grid.position.y=-s.y/2-maxDim*0.12
      scene.add(grid)
    }catch(e){
      console.error(e)
      el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#0b0b0d;padding:16px;text-align:center">
        <span style="color:#f88;font:500 .66rem var(--mono);letter-spacing:.14em">FAILED TO LOAD GLB</span>
        <a href="${src}" class="v3d-btn" download>Download .GLB</a>
      </div>`
      return
    }
    const card=el.closest('.card')
    const rsBtn=card.querySelector('.v3d-reset')
    if(rsBtn)rsBtn.onclick=()=>{
      controls.reset();controls.autoRotate=true
    }
    ;(function animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera)})()
  }
})
