"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CYAN = 0x00e5ff;
const GLOBE_RADIUS = 1.4;

function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);

  const dotGeometry = useMemo(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = GLOBE_RADIUS;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 32]} />
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <points geometry={dotGeometry}>
        <pointsMaterial
          color={CYAN}
          size={0.042}
          transparent
          opacity={0.92}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.28, 32, 24]} />
        <meshBasicMaterial
          color={CYAN}
          transparent
          opacity={0.045}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function useDesktopParallax() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 55, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 55, damping: 22, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) {
      x.set(0);
      y.set(0);
      return;
    }
    const max = 15;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / Math.max(cx, 1);
      const ny = (e.clientY - cy) / Math.max(cy, 1);
      x.set(-nx * max);
      y.set(-ny * max);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  return { enabled, springX, springY };
}

function CyberGlobe() {
  const { enabled, springX, springY } = useDesktopParallax();

  return (
    <motion.div
      className="h-full w-full"
      style={
        enabled
          ? { x: springX, y: springY, willChange: "transform" }
          : undefined
      }
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <GlobeScene />
      </Canvas>
    </motion.div>
  );
}

export default CyberGlobe;
