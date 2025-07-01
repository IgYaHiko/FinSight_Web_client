import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { images } from '../../constant/images';

const Carousel = ({ direction }) => {
  const textures = useTexture(texturePaths);
  const groupRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const rotationSpeed = useRef(0.3);

  const panelCount = textures.length;
  const radius = 4;
  const height = 3;
  const fullTheta = (2 * Math.PI) / panelCount;
  const gapFactor = 0.88;
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

      {selectedIndex !== null && (
        <Html
          center
          position={[
            Math.sin((selectedIndex / panelCount) * 2 * Math.PI) * radius,
            height / 1.5,
            Math.cos((selectedIndex / panelCount) * 2 * Math.PI) * radius,
          ]}
          style={{ pointerEvents: 'auto' }}
        >
          <div className="w-[220px] bg-[#131313]/90 text-white rounded-xl px-4 py-3 shadow-xl backdrop-blur-lg border border-white/10">
            <div className="text-center mb-3">
              <p className="text-base font-semibold" style={{ fontFamily: 'futura', letterSpacing: 0.5 }}>
                {socialHandles[selectedIndex]?.name || 'Unknown'}
              </p>
              <p className="text-xs opacity-60 mt-1" style={{ fontFamily: 'monospace' }}>
                {socialHandles[selectedIndex]?.role || ''}
              </p>
            </div>

           <div className="flex gap-3 justify-center">
  {Object.entries(socialHandles[selectedIndex]?.links || {}).map(
    ([platform, url]) => {
      const Icon =
        platform === 'GitHub'
          ? FaGithub
          : platform === 'LinkedIn'
          ? FaLinkedin
          : platform === 'Instagram'
          ? FaInstagram
          :null
          
          

      return (
        <button
          key={platform}
          onClick={(e) => {
            e.stopPropagation();
            window.open(url, '_blank');
          }}
          className="p-2 bg-[#0065F8] hover:bg-[#424852] rounded-full transition-all"
        >
          {Icon && <Icon className="text-white text-xl" />}
        </button>
      );
    }
  )}
</div>

          </div>
        </Html>
      )}
    </group>
  );
};

export default Carousel;

// Move these outside the component if they're used elsewhere
const texturePaths = [
  images.ME,
  images.EX,
  images.EX_TWO,
  images.ME_TWO,
  images.AYAN,
  images.AVIK,
  images.AKASH,
  images.BRISTI
].filter(Boolean);

const socialHandles = [
    {
    name: 'Subhro Kolay',
    role: 'Project Head & Developer',
    links: {
      GitHub: 'https://github.com/IgYaHiko',
      LinkedIn: 'https://www.linkedin.com/in/subhro-kolay-05952328a/',
      Instagram: "https://www.instagram.com/_mojo_rojo/"
    },
  },
  {
    name: 'Chandrima Ray',
    role: 'UI UX & Frontend Dev',
    links: {
      GitHub: 'https://github.com/IgYaHiko',
      LinkedIn: 'https://www.linkedin.com/in/chandrima-ray-chatterjee-131a9b287/',
      Instagram: "https://www.instagram.com/chandrima_selene?igsh=MW4yMWczMGxrOHZ6ZQ=="
    },
  },
  {
    name: 'Chandrima Ray',
    role: 'UI UX & Frontend Dev',
    links: {
     GitHub: 'https://github.com/IgYaHiko',
      LinkedIn: 'https://www.linkedin.com/in/chandrima-ray-chatterjee-131a9b287/',
      Instagram: "https://www.instagram.com/chandrima_selene?igsh=MW4yMWczMGxrOHZ6ZQ=="
    },
  },
  {
    name: 'Subhro Kolay',
    role: 'Project Head & Developer',
    links: {
     GitHub: 'https://github.com/IgYaHiko',
      LinkedIn: 'https://www.linkedin.com/in/subhro-kolay-05952328a/',
      Instagram: "https://www.instagram.com/_mojo_rojo/"
    },
  },
  {
    name: 'Ayan Das',
    role: 'Developer',
    links: {
      GitHub: 'https://github.com/ADPROZ',
      LinkedIn: 'https://www.linkedin.com/in/ayan-das-459106372',
      Instagram: "https://www.instagram.com/itach_i.2004/"
    },
  },
  {
    name: 'Avik Bera',
    role: 'Backend Developer',
    links: {
      GitHub: 'https://github.com/AvikBera',
      LinkedIn: 'https://www.instagram.com/itach_i.2004/',
    },
  },
  {
    name: 'Akash Maity',
    role: 'Developer',
    links: {
      GitHub: 'https://github.com/am6030920',
      LinkedIn: 'https://www.linkedin.com/in/akash-maity-7b0211372/',
      Instagram: "https://www.instagram.com/itzz__akash63/"
    },
  },
  {
    name: 'Bristi Danre',
    role: 'Developer',
    links: {
      GitHub: "https://github.com/bristi-denre",
      LinkedIn: 'https://www.linkedin.com/in/bristi-denre-919175372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      Instagram : 'https://www.instagram.com/bristi_khuku/'
    },
  },
];