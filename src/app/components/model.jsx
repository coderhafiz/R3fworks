"use client";

import { useGLTF } from "@react-three/drei";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";

export default function Model(props) {
  // const gl = useThree((state) => state.gl);

  // const { nodes, materials } = useGLTF(
  //   "/compModel.glb",
  //   undefined,
  //   undefined,
  //   (loader) => {
  //     const ktx2loader = new KTX2Loader();
  //     ktx2loader.setTranscoderPath("/basis/");
  //     ktx2loader.detectSupport(gl);
  //     loader.setKTX2Loader(ktx2loader);
  //   }
  // );
  const gl = useThree((state) => state.gl);

  const ktx2Loader = useMemo(() => {
    const loader = new KTX2Loader();
    loader.setTranscoderPath("/basis/");
    loader.detectSupport(gl);
    return loader;
  }, [gl]);

  const { nodes, materials } = useGLTF(
    "/compModel.glb",
    undefined,
    undefined,
    (loader) => {
      loader.setKTX2Loader(ktx2Loader);
    }
  );

  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

// useGLTF.preload("/compModel.glb");

// import { useGLTF } from "@react-three/drei";

// export default function Model(props) {
//   const { nodes, materials } = useGLTF("/newMac2.glb");
//   return (
//     <group {...props} dispose={null}>
//       <group position={[0.121, 0.007, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials.MacBookPro}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials.MacBookPro}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_4.geometry}
//         material={materials.MacBookPro}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/newMac2.glb");

// import { useGLTF } from "@react-three/drei";

// export default function Model(props) {
//   const { nodes, materials } = useGLTF("/scene.gltf");
//   console.log(materials);
//   return (
//     <group {...props} dispose={null}>
//       <group name="Ecran_6" position={[0.121, 0.007, 0]}>
//         <mesh
//           name="Object_6"
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials.MacBookPro}
//         />
//         <mesh
//           name="Object_8"
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials.MacBookPro}
//         />
//       </group>
//       <mesh
//         name="Object_4"
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_4.geometry}
//         material={materials.MacBookPro}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/scene.gltf");
