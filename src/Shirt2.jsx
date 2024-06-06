/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 shirt2.gltf 
Author: Viral Panchal (https://sketchfab.com/viralpanchal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/casual-shirt-b2119b2c326d4ef9ba42c83a9c711166
Title: Casual Shirt
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shirt2.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22593_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22594_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_12616_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_7660_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22595_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22590_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_21425_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22596_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt00_1Pattern2D_4228_Shirt01_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_14923_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1.001, 1]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22589_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_5118_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_7659_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_7658_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22591_Blue_chacker_0.geometry} material={materials.Blue_chacker} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22592_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shirt01_Shirt00_1Pattern2D_22597_Button_0.geometry} material={materials.Button} position={[-0.007, -0.079, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shirt2.gltf')
