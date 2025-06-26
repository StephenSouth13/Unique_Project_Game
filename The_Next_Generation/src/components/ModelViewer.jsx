import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function MyModel() {
  const gltf = useLoader(GLTFLoader, "/models/test.fbx"); // đặt trong public/models/
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <MyModel />
        </Stage>
        <OrbitControls enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}
// This component uses React Three Fiber to render a 3D model.
// It includes ambient lighting, a stage environment, and orbit controls for interaction.