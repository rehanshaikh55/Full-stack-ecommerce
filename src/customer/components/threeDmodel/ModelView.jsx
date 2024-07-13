import React,{Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Shirt2 from '../../../Shirt2'
import Scene from '../../../Scene'

const ModelView = () => {
  return (
    <div>
      <Canvas className=' border bg-gray-50 rounded-3xl' >
        <ambientLight />
        <OrbitControls scale={25} enableZoom={false} minZoom={2} zoom0={20} />
            <Suspense  fallback={null} >
                  <Shirt2 />
            </Suspense>
            <Environment preset='sunset' />
      </Canvas>
    </div>
  )
}

export default ModelView