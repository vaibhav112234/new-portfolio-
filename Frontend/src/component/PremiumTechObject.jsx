import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  RoundedBox,
  Text,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const Laptop = ({ primary, secondary }) => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.12;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.03;
  });

  return (
    <group ref={group}>

      {/* ================= SCREEN ================= */}

      <group position={[0, 0.8, 0]}>

        {/* Screen body */}

        <RoundedBox
          args={[3.8, 2.5, 0.16]}
          radius={0.12}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#090d14"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen */}

        <mesh position={[0, 0, 0.095]}>
          <planeGeometry args={[3.45, 2.15]} />

          <meshStandardMaterial
            color="#020617"
            emissive={primary}
            emissiveIntensity={0.12}
            metalness={0.2}
            roughness={0.4}
          />
        </mesh>

        {/* Top camera */}

        <mesh position={[0, 1.02, 0.12]}>
          <sphereGeometry args={[0.035, 16, 16]} />

          <meshBasicMaterial color={primary} />
        </mesh>

        {/* ================= DASHBOARD ================= */}

        {/* Header */}

        <mesh position={[-1.15, 0.78, 0.13]}>
          <boxGeometry args={[1.2, 0.08, 0.02]} />

          <meshBasicMaterial color={primary} />
        </mesh>

        {/* Dashboard cards */}

        <DashboardCard
          position={[-1.05, 0.15, 0.14]}
          color={primary}
        />

        <DashboardCard
          position={[0.35, 0.15, 0.14]}
          color={secondary}
        />

        {/* Chart */}

        <group position={[0, -0.65, 0.14]}>

          {[0.25, 0.45, 0.35, 0.7, 0.55, 0.85, 0.72].map(
            (height, index) => (
              <mesh
                key={index}
                position={[
                  -1.25 + index * 0.4,
                  height / 2,
                  0,
                ]}
              >
                <boxGeometry args={[0.18, height, 0.03]} />

                <meshBasicMaterial
                  color={index % 2 === 0 ? primary : secondary}
                  transparent
                  opacity={0.85}
                />
              </mesh>
            )
          )}

        </group>

        {/* ================= SCREEN TEXT ================= */}

        <Text
          position={[-1.35, 0.5, 0.15]}
          fontSize={0.16}
          color="#cbd5e1"
          anchorX="left"
          anchorY="middle"
        >
          TRADING SYSTEM
        </Text>

      </group>

      {/* ================= LAPTOP BASE ================= */}

      <RoundedBox
        args={[4.4, 0.22, 3.1]}
        radius={0.08}
        smoothness={5}
        position={[0, -0.55, 0.15]}
        rotation={[-0.08, 0, 0]}
      >
        <meshStandardMaterial
          color="#111827"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Keyboard */}

      <mesh
        position={[0, -0.4, 0.35]}
        rotation={[-0.08, 0, 0]}
      >
        <planeGeometry args={[3.5, 1.8]} />

        <meshStandardMaterial
          color="#020617"
          metalness={0.4}
          roughness={0.5}
        />
      </mesh>

      {/* Keyboard glow */}

      {Array.from({ length: 5 }).map((_, row) => (
        <mesh
          key={row}
          position={[0, -0.08 - row * 0.28, 0.42]}
        >
          <boxGeometry args={[2.8, 0.035, 0.025]} />

          <meshBasicMaterial
            color={primary}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}

      {/* Trackpad */}

      <RoundedBox
        args={[1.1, 0.02, 0.65]}
        radius={0.04}
        smoothness={4}
        position={[0, -0.95, 0.45]}
      >
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>

    </group>
  );
};


/* ================= DASHBOARD CARD ================= */

const DashboardCard = ({ position, color }) => {
  return (
    <group position={position}>

      <mesh>
        <planeGeometry args={[1.15, 0.65]} />

        <meshBasicMaterial
          color="#111827"
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh position={[-0.35, 0.15, 0.01]}>
        <boxGeometry args={[0.35, 0.05, 0.02]} />

        <meshBasicMaterial color={color} />
      </mesh>

      <mesh position={[-0.35, -0.05, 0.01]}>
        <boxGeometry args={[0.55, 0.04, 0.02]} />

        <meshBasicMaterial
          color="#64748b"
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[-0.35, -0.2, 0.01]}>
        <boxGeometry args={[0.4, 0.04, 0.02]} />

        <meshBasicMaterial
          color="#64748b"
          transparent
          opacity={0.4}
        />
      </mesh>

    </group>
  );
};


/* ================= MAIN COMPONENT ================= */

const PremiumTechObject = () => {
  const { theme, themes } = useTheme();

  const selectedTheme = themes[theme];

  const primary = selectedTheme?.primary || "#3b82f6";
  const secondary = selectedTheme?.secondary || "#06b6d4";

  return (
    <div className="relative w-full h-[500px]">

      {/* Theme Glow */}

      <div
        className="absolute inset-0 blur-[100px] opacity-20"
        style={{
          background: primary,
        }}
      />

      {/* 3D */}

      <Canvas
        camera={{
          position: [0, 0.5, 7],
          fov: 42,
        }}
        dpr={[1, 2]}
      >

        {/* Lighting */}

        <ambientLight intensity={0.6} />

        <pointLight
          position={[4, 4, 5]}
          intensity={20}
          distance={10}
          color={primary}
        />

        <pointLight
          position={[-4, 1, 3]}
          intensity={10}
          distance={8}
          color={secondary}
        />

        <directionalLight
          position={[0, 5, 5]}
          intensity={2}
        />

        {/* Object */}

        <Float
          speed={1.5}
          rotationIntensity={0.15}
          floatIntensity={0.5}
        >
          <Laptop
            primary={primary}
            secondary={secondary}
          />
        </Float>

        {/* Floor shadow */}

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.45}
          scale={8}
          blur={2.5}
          far={4}
        />

        {/* Mouse interaction */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.8}
          minAzimuthAngle={-0.5}
          maxAzimuthAngle={0.5}
        />

      </Canvas>
    </div>
  );
};

export default PremiumTechObject;