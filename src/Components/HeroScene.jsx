import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";

const HeroObject = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
      meshRef.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <torusKnotGeometry args={[1, 0.3, 64, 12]} />
        <MeshDistortMaterial
          color={hovered ? "#06b6d4" : "#6366f1"}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const MouseParticles = () => {
  const { mouse, viewport } = useThree();
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      ref.current.position.set(x, y, 0);
    }
  });

  return (
    <pointLight
      ref={ref}
      intensity={10}
      distance={5}
      color="#06b6d4"
    />
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none lg:pointer-events-auto">
      <Canvas
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
        
        <HeroObject />
        
        <Stars 
          radius={50} 
          depth={30} 
          count={1500} 
          factor={3} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        <MouseParticles />
        <fog attach="fog" args={["#030712", 5, 15]} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
