"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GlassShape({ position, scale, speed = 1, rotation, type = "cone" }: any) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005 * speed;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1 + rotation[0];
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale} rotation={rotation}>
        {type === "cone" && <coneGeometry args={[1, 2, 4]} />}
        {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        {type === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
        <meshPhysicalMaterial 
          color="#ffffff"
          roughness={0.1}
          metalness={0.1}
          transmission={0.9} // High glass transmission
          thickness={2}
          ior={1.5}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.0}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-0 h-[100%] w-full min-h-[600px] pointer-events-none sm:pointer-events-auto opacity-90">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 20, 10]} intensity={2.5} color="#ffffff" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#f8fafc" />
        
        <PresentationControls global rotation={[0, 0.2, 0]} polar={[-0.2, 0.2]} azimuth={[-0.4, 0.2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          {/* Main Clean "Crop" Shape */}
          <GlassShape type="cone" position={[2.5, 0, 0]} scale={[1.3, 1.3, 1.3]} speed={0.4} rotation={[0.2, 0, 0]} />
          
          {/* Accent Shapes */}
          <GlassShape type="dodecahedron" position={[-3, 1.5, -1]} scale={[0.9, 0.9, 0.9]} speed={0.6} rotation={[0.2, 0.5, 0]} />
          <GlassShape type="cone" position={[1.5, -2.5, -2]} scale={[0.7, 0.7, 0.7]} speed={0.8} rotation={[-0.1, 0, 0]} />
          
          {/* Water/Clean Drops */}
          <GlassShape type="sphere" position={[-2, -1.5, 1.5]} scale={[0.5, 0.5, 0.5]} speed={1} rotation={[0,0,0]} />
          <GlassShape type="sphere" position={[4, 2, -1.5]} scale={[0.4, 0.4, 0.4]} speed={1.2} rotation={[0,0,0]} />
          
        </PresentationControls>

        <ContactShadows position={[0, -3.5, 0]} opacity={0.15} scale={20} blur={2.5} far={4} color="#334155" />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
