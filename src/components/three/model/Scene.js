import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
export default function Model({ ...props }) {
  const group = useRef();
  const inner = useRef();
  const outer = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf')

  useFrame(()=>{inner.current.rotation.y+=0.02; inner.current.rotation.z+=0.02; inner.current.rotation.x+=0.02});
  useFrame(()=>{outer.current.rotation.y-=0.01; outer.current.rotation.z-=0.01; outer.current.rotation.x-=0.01});
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 132.19, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh ref={outer} geometry={nodes.Icosphere_Cristal_0.geometry} material={materials.Cristal} />
          </group>
          <group position={[0, 132.19, 0]} rotation={[-Math.PI / 2, 0, -2.37]} scale={[60.54, 60.54, 60.54]}>
            <mesh ref={inner} geometry={nodes.Icosphere001_Plastico_0.geometry} material={materials.Plastico} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
