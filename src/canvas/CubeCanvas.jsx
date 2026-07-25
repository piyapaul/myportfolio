import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

import { Suspense, useRef } from "react";

function CubeModel() {
  const cube = useGLTF("/models/cube/scene.glb");
  const cubeRef = useRef();

  useFrame((state) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y = state.clock.elapsedTime * 0.45;
    cubeRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime) * 0.08;

    cubeRef.current.position.y =
      -0.45 + Math.sin(state.clock.elapsedTime * 1.5) * 0.12;
  });

  return (
    <primitive
      ref={cubeRef}
      object={cube.scene}
      scale={0.22}
      position={[1.6, -0.45, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function CubeCanvas() {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0.2, 8]}
        fov={30}
      />

      {/* Lights */}

      <ambientLight intensity={0.8} />

      <directionalLight
        position={[8, 8, 5]}
        intensity={3}
        castShadow
      />

      <pointLight
        position={[-4, 3, 4]}
        intensity={18}
        color="#8b5cf6"
      />

      <pointLight
        position={[5, 3, 3]}
        intensity={12}
        color="white"
      />

      <Environment preset="city" />

      <Suspense fallback={null}>
        <CubeModel />

        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.4}
          scale={6}
          blur={2.5}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  );
}