"use client";

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <group name="Ecran_6" position={[0.121, 0.007, 0]}>
        <mesh
          name="Object_6"
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          name="Object_8"
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        name="Object_4"
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
