"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";
import { PresentationControls, Environment, Float } from "@react-three/drei";
import Model from "./model";
import { Html, useProgress } from "@react-three/drei";

export default function Scene(props) {
  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }
  return (
    <>
      <Canvas
        // style={{ width: "100vh", height: "80vh" }}
        camera={{ position: [-2, 2, 1], fov: 13 }}
      >
        <PresentationControls
          enabled={true}
          cursor
          snap
          speed={2}
          // rotation={[0.2, 0.3, 0]}
          polar={[degToRad(-180), degToRad(180)]}
          azimuth={[degToRad(-180), degToRad(180)]}
          // zoom={0.75}
        >
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            // floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0]}
          >
            <Suspense fallback={<Loader />}>
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
