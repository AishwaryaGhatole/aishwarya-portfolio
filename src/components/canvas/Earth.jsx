import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const EarthModel = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<CanvasLoader />}>
        <EarthModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
