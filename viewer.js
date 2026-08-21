import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js'
document.querySelectorAll('.v3d').forEach(el=>{
  const src=el.dataset.src
  const size=el.dataset.size||''
  const preview=el.dataset.preview||''
  el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#111">
    ${preview?`<img src="${preview}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:.35">`:''}
    <span style="position:relative;font:500 .7rem var(--mono);letter-spacing:.15em;color:var(--faint)">${size}</span>
    <button class="v3d-load btn" style="position:relative;padding:10px 18px;font-size:.7rem">LOAD 3D → EXPLODE</button>
    <span style="position:relative;font:400 .6rem var(--mono);color:var(--faint)">pre-built GLB, no parsing</span>
  </div>`
  const btn=el.querySelector('.v3d-load')
  btn.onclick=()=>init()
  async function init(){
    btn.textContent='LOADING…'; btn.disabled=true
    const w=el.clientWidth,h=el.clientHeight||w*0.625
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x111111)
    const camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000)
    const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setSize(w,h); renderer.setPixelRatio(devicePixelRatio)
    el.innerHTML=''; el.appendChild(renderer.domElement)
    const loading=document.createElement('div'); loading.style.cssText='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);color:var(--faint);font:500 .7rem var(--mono)'; loading.textContent='FETCHING GLB…'; el.appendChild(loading)
    const controls=new OrbitControls(camera,renderer.domElement); controls.enableDamping=true
    scene.add(new THREE.HemisphereLight(0xffffff,0x222222,1.2))
    const dl=new THREE.DirectionalLight(0xffffff,1); dl.position.set(5,10,7); scene.add(dl)
    const group=new THREE.Group(); scene.add(group)
    let meshes=[],center=new THREE.Vector3(),exploded=false
    const ro=new ResizeObserver(()=>{const nw=el.clientWidth,nh=el.clientHeight; camera.aspect=nw/nh; camera.updateProjectionMatrix(); renderer.setSize(nw,nh)}); ro.observe(el)
    try{
      const loader=new GLTFLoader()
      const gltf=await new Promise((res,rej)=>loader.load(src,res,undefined,rej))
      loading.textContent='BUILDING…'
      gltf.scene.traverse(o=>{ if(o.isMesh){ o.material=new THREE.MeshStandardMaterial({color:0x8A2BE2, metalness:0.4, roughness:0.6}); meshes.push(o) } })
      group.add(gltf.scene)
      const bbox=new THREE.Box3().setFromObject(group)
      const s=bbox.getSize(new THREE.Vector3()), c=bbox.getCenter(new THREE.Vector3())
      center.copy(c); group.position.sub(c)
      const maxDim=Math.max(s.x,s.y,s.z), dist=maxDim*1.6
      camera.position.set(dist*0.7,dist*0.5,dist*0.9); controls.target.set(0,0,0); controls.update()
      // per-mesh explode vectors: from center to mesh center
      meshes.forEach(m=>{ const b=new THREE.Box3().setFromObject(m); const mc=b.getCenter(new THREE.Vector3()); m.userData.orig=m.position.clone(); m.userData.mc=mc.sub(center).multiplyScalar(0.02) })
      loading.remove()
    }catch(e){ console.error(e); el.innerHTML=`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#111;padding:16px;text-align:center">
      <span style="color:#f88;font:500 .68rem var(--mono)">FAILED TO LOAD GLB</span>
      <a href="${src}" class="btn">DOWNLOAD GLB</a>
    </div>`; return}
    function explode(f){ meshes.forEach(m=>{ if(f===0) m.position.copy(m.userData.orig); else m.position.copy(m.userData.orig.clone().add(m.userData.mc.clone().multiplyScalar(f*25)) ) }) }
    const card=el.closest('.card')
    card.querySelector('.v3d-explode').onclick=()=>{ exploded=!exploded; explode(exploded?1:0) }
    card.querySelector('.v3d-reset').onclick=()=>{ exploded=false; explode(0); controls.reset() }
    ;(function animate(){ requestAnimationFrame(animate); controls.update(); renderer.render(scene,camera) })()
  }
})
