import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { AnimationMixer, LoopRepeat } from "three"

const Object = () => {
  const canvasRef = useRef(null)
  const scene = new THREE.Scene()
  let light
  scene.background = new THREE.Color(0x13131a)
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  const controls = new OrbitControls(camera, renderer.domElement)

  useEffect(() => {
    const canvas = canvasRef.current
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvas.appendChild(renderer.domElement)
    camera.position.z = 0.3
    controls.update()
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)
    light = new THREE.HemisphereLight(0xffffff, 0x444444)
    light.position.set(0, 200, 0)
    scene.add(light)
    light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 200, 100)
    light.castShadow = true
    light.shadow.camera.top = 180
    light.shadow.camera.bottom = -100
    light.shadow.camera.left = -120
    light.shadow.camera.right = 120
    scene.add(light)

    let object = new GLTFLoader()
    let mixer
    object.load(
      "/bicep.gltf",
      function (gltf) {
        let modelGltf = gltf.scene
        modelGltf.scale.set(0.1, 0.1, 0.1)
        scene.add(modelGltf)
        mixer = new THREE.AnimationMixer(modelGltf)
        const clips = gltf.animations
        const action = mixer.clipAction(clips[0])
        action.play()
      },
      function (onProgress) {
        console.log(onProgress)
      },
      function (error) {
        console.log(error)
      }
    )
    const clock = new THREE.Clock()
    const animate = () => {
      if (mixer) {
        mixer.update(clock.getDelta())
      }
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <div className="container-canvas">
      <div ref={canvasRef} className="canvas"></div>
    </div>
  )
}

export default Object
