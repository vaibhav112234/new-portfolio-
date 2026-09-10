import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  Text,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function CodeWindow({ primary, secondary }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });

  return (
    <group ref={group}>

      {/* Main terminal */}

      <RoundedBox
        args={[3.8, 2.7, 0.25]}
        radius={0.12}
        smoothness={5}
        position={[0, 0.3, 0]}
      >
        <meshStandardMaterial
          color="#0b1220"
          metalness={0.6}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Screen */}

      <RoundedBox
        args={[3.45, 2.25, 0.05]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.4, 0.16]}
      >
        <meshStandardMaterial
          color="#020617"
          emissive={primary}
          emissiveIntensity={0.08}
        />
      </RoundedBox>

      {/* Terminal title */}

      <Text
        position={[-1.35, 1.25, 0.22]}
        fontSize={0.16}
        color={primary}
        anchorX="left"
      >
        DEV_TERMINAL
      </Text>

      {/* Window buttons */}

      <mesh position={[-1.45, 0.98, 0.23]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color={secondary}
          emissive={secondary}
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[-1.25, 0.98, 0.23]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Code lines */}

      <CodeLine position={[-1.35, 0.65, 0.24]} width={1.9} color={primary} />
      <CodeLine position={[-1.05, 0.38, 0.24]} width={1.35} color={secondary} />
      <CodeLine position={[-0.9, 0.11, 0.24]} width={1.65} color={primary} />
      <CodeLine position={[-1.1, -0.16, 0.24]} width={1.2} color={secondary} />
      <CodeLine position={[-0.95, -0.43, 0.24]} width={1.55} color={primary} />

      {/* Cursor */}

      <mesh position={[0.05, -0.72, 0.24]}>
        <boxGeometry args={[0.08, 0.18, 0.03]} />
        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Base */}

      <RoundedBox
        args={[4.4, 0.22, 2.7]}
        radius={0.08}
        smoothness={4}
        position={[0, -1.15, 0]}
      >
        <meshStandardMaterial
          color="#111827"
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Floating API node */}

      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={1}
      >
        <mesh position={[2.25, 1.2, 0.4]}>
          <icosahedronGeometry args={[0.38, 1]} />
          <meshStandardMaterial
            color={secondary}
            emissive={secondary}
            emissiveIntensity={0.7}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Database */}

      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.8}
      >
        <group position={[-2.35, -0.3, 0.5]}>

          <mesh>
            <cylinderGeometry args={[0.35, 0.35, 0.8, 32]} />
            <meshStandardMaterial
              color="#172033"
              metalness={0.7}
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0, 0.4, 0]}>
            <torusGeometry args={[0.35, 0.035, 12, 32]} />
            <meshStandardMaterial
              color={primary}
              emissive={primary}
              emissiveIntensity={1}
            />
          </mesh>

          <mesh position={[0, -0.4, 0]}>
            <torusGeometry args={[0.35, 0.035, 12, 32]} />
            <meshStandardMaterial
              color={secondary}
              emissive={secondary}
              emissiveIntensity={0.8}
            />
          </mesh>

        </group>
      </Float>

    </group>
  );
}

function CodeLine({ position, width, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, 0.07, 0.025]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function Developer3DObject() {
  const { theme, themes } = useTheme();

  const selectedTheme = themes[theme];

  return (
    <div
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 45px ${selectedTheme.glow})`,
      }}
    >
      <Canvas
        camera={{
          position: [0, 0.4, 7],
          fov: 42,
        }}
        dpr={[1, 2]}
      >

        {/* Lighting */}

        <ambientLight intensity={0.6} />

        <pointLight
          position={[3, 3, 4]}
          intensity={5}
          color={selectedTheme.primary}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={4}
          color={selectedTheme.secondary}
        />

        <directionalLight
          position={[0, 5, 5]}
          intensity={2}
        />

        {/* Object */}

        <Float
          speed={1.5}
          rotationIntensity={0.25}
          floatIntensity={0.7}
        >
          <CodeWindow
            primary={selectedTheme.primary}
            secondary={selectedTheme.secondary}
          />
        </Float>

        {/* Ground Shadow */}

        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.4}
          scale={6}
          blur={2}
          far={4}
        />

        {/* Interaction */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.7}
        />

      </Canvas>
    </div>
  );
}