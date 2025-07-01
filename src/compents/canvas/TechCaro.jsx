import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { images } from '../../constant/images';

const TechCaro = ({ direction }) => {
  const textures = useTexture(texturePaths);
  const groupRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const rotationSpeed = useRef(0.3);

  const panelCount = textures.length;
  const radius = 4;
  const height = 3;
  const fullTheta = (2 * Math.PI) / panelCount;
  const gapFactor = 0.98;
  const thetaLength = fullTheta * gapFactor;

  // Handle direction changes from parent
  useEffect(() => {
    if (direction !== 0) {
      setAutoRotate(false);
      rotationSpeed.current = direction * 0.5; // Faster speed when manually controlled
    } else {
      setAutoRotate(true);
      rotationSpeed.current = 0.3; // Default speed
    }
  }, [direction]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      if (autoRotate) {
        // Smooth auto-rotation
        groupRef.current.rotation.y += delta * rotationSpeed.current;
      } else {
        // Manual rotation based on direction
        groupRef.current.rotation.y += delta * rotationSpeed.current;
      }
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0.5, 0.2]}>
      {textures.map((texture, index) => {
        const thetaStart = index * fullTheta;

        return (
          <mesh
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(index === selectedIndex ? null : index);
            }}
            onPointerOver={() => setAutoRotate(false)}
            onPointerOut={() => setAutoRotate(true)}
          >
            <cylinderGeometry
              args={[
                radius,
                radius,
                height,
                32,
                1,
                true,
                thetaStart,
                thetaLength,
              ]}
            />
            <meshBasicMaterial
              map={texture}
              side={THREE.DoubleSide}
              toneMapped={false}
              transparent
            />
          </mesh>
        );
      })}

    </group>
  );
};

export default TechCaro;

// Move these outside the component if they're used elsewhere
const texturePaths = [
  images.CYC,
  images.CYCTWO,
  images.CYCTHREE,
].filter(Boolean);

