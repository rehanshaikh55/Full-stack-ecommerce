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
        <OrbitControls scale={20} enableZoom={false} minZoom={2} zoom0={25} />
            <Suspense  fallback={null} >
                  <Shirt2 />
            </Suspense>
            <Environment preset='sunset' />
      </Canvas>
    </div>
  )
}

export default ModelView