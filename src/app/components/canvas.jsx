"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Environment,
  Float,
} from "@react-three/drei";
import Model from "./model";
export default function Scene(props) {
  return (
    <>
      <Canvas
        // style={{ width: "100vh", height: "80vh" }}
        camera={{ position: [-2, 2, 1], fov: 13 }}
      >
        {/* <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // minDistance={3}
          // maxDistance={20}
          // minPolarAngle={Math.PI / 6} // 30 degrees
          // maxPolarAngle={Math.PI - Math.PI / 6} // 150 degrees
        /> */}

        <PresentationControls
          enabled={true}
          cursor
          snap
          speed={2}
          // rotation={[0.2, 0.3, 0]}
          polar={[-Math.PI, Math.PI]}
          azimuth={[-Math.PI, Math.PI]}
          // zoom={0.75}
        >
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0]}
          >
            <Suspense fallback={null}>
              <Model />
              <Environment
                files="/hdri/christmas_photo_studio_01_4k.exr"
                background={false}
              />
            </Suspense>
          </Float>
        </PresentationControls>
      </Canvas>
    </>
  );
}
