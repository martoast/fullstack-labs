import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default defineNuxtPlugin(() => {
 console.log('Three.js Plugin: Initializing plugin')
 
 const initThree = (container) => {
   console.log('Three.js Plugin: initThree called with container:', container)
   let camera, scene, renderer, object, startTime

   function init() {
     try {
       // Scene setup with container dimensions
       camera = new THREE.PerspectiveCamera(
         36,
         container.clientWidth / container.clientHeight,
         0.25,
         16
       )
       camera.position.set(0, 0, 3.5) // Moved camera closer
   
       scene = new THREE.Scene()
   
       // Lights
       scene.add(new THREE.AmbientLight(0xcccccc, 0.8))
   
       const spotLight = new THREE.SpotLight(0xffffff, 80)
       spotLight.angle = Math.PI / 5
       spotLight.penumbra = 0.2
       spotLight.position.set(2, 3, 3)
       scene.add(spotLight)

       const pointLight = new THREE.PointLight(0x18b0ff, 50)
       pointLight.position.set(-2, 1, -1)
       scene.add(pointLight)
   
       // Material and geometry
       const material = new THREE.MeshPhongMaterial({
         color: 0x18b0ff,
         shininess: 100,
         side: THREE.DoubleSide,
         emissive: 0x1142ff
       })
   
       const geometry = new THREE.TorusKnotGeometry(0.5, 0.15, 95, 20)
   
       object = new THREE.Mesh(geometry, material)
       object.position.set(0, 0, 0)
       scene.add(object)
   
       // Renderer with container dimensions
       renderer = new THREE.WebGLRenderer({ 
         antialias: true,
         alpha: true
       })
       renderer.setPixelRatio(window.devicePixelRatio)
       renderer.setSize(container.clientWidth, container.clientHeight)
       container.appendChild(renderer.domElement)
   
       // Controls
       const controls = new OrbitControls(camera, renderer.domElement)
       controls.enableZoom = false
       controls.enablePan = false
       controls.enableDamping = true
       controls.autoRotate = true
       controls.autoRotateSpeed = 1
       controls.target.set(0, 0, 0)
       controls.update()
   
       startTime = Date.now()
       animate()
     } catch (error) {
       console.error('Three.js Plugin: Error in init function:', error)
     }
   }
   
   function onWindowResize() {
     if (!container) return
     camera.aspect = container.clientWidth / container.clientHeight
     camera.updateProjectionMatrix()
     renderer.setSize(container.clientWidth, container.clientHeight)
   }

   function animate() {
     requestAnimationFrame(animate)
     const currentTime = Date.now()
     const time = (currentTime - startTime) / 1000

     object.rotation.x = time * 0.5
     object.rotation.y = time * 0.2
     object.scale.setScalar(Math.cos(time) * 0.125 + 0.875)

     renderer.render(scene, camera)
   }

   init()
   
   // Use ResizeObserver for more accurate container resizing
   const resizeObserver = new ResizeObserver(() => {
     onWindowResize()
   })
   resizeObserver.observe(container)

   // Cleanup function
   return () => {
     resizeObserver.disconnect()
     window.removeEventListener('resize', onWindowResize)
     renderer.dispose()
     scene.clear()
   }
 }

 return {
   provide: {
     initThree
   }
 }
})