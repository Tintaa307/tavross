import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

const Object = () => {
  const canvasRef = useRef(null)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)
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
    const light = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(light)
    const light2 = new THREE.PointLight(0xffffff, 0.5)
    scene.add(light2)
    function loadGLTF() {
      let object = new GLTFLoader()
      object.load(
        "./bicep.gltf",
        function (gltf) {
          scene.add(gltf.scene)
        },
        function( onProgress ) {
            console.log(onProgress)
        },
        function (error) {
          console.error(error)
        }
      )
    }
    loadGLTF()
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }} className="container-canvas">
      <div ref={canvasRef} className="canvas"></div>
    </div>
  )
}

export default Object
