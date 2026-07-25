import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";

function EarthModel() {
  const earth = useGLTF("/models/globe/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={1.8}
      position={[0, -0.1, 0]}
      rotation={[-0.15, 0.35, 0]}
    />
  );
}

export default function EarthCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ antialias: true }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0.2, 8]}
        fov={32}
      />

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2.2}
      />

      <directionalLight
        position={[-5, 2, 2]}
        intensity={1}
      />

      <pointLight
        position={[0, 5, -5]}
        intensity={1.2}
      />

      <Environment preset="city" />

      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.45}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}