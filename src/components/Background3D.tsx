
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null!);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  // Create random particles in a sphere shape
  for (let i = 0; i < count; i++) {
    // Position
    const distance = Math.random() * 2 + 1;
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = distance * Math.cos(theta);
    
    // Color - using purple palette
    colors[i * 3] = Math.random() * 0.5 + 0.5; // R: Purple tint
    colors[i * 3 + 1] = Math.random() * 0.3; // G: Low green for purple
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B: Purple/blue tint
  }

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          needsUpdate={true}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          needsUpdate={true}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function MovingSphere() {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#9b87f5"
        emissive="#6E59A5"
        emissiveIntensity={0.5}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles />
        <MovingSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
