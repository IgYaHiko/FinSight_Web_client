import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Carousel from './Carousel';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Marquee from './Marquee';
import TechCaro from './TechCaro';
import TechMarquee from './TechMarquee';

const TechStack = () => {
  const containerRef = useRef();
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, width } = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const buffer = 100;
      
      if (mouseX < buffer) {
        setDirection(-1); // Left edge
      } else if (mouseX > width - buffer) {
        setDirection(1); // Right edge
      } else {
        setDirection(0); // Middle area
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className='h-[68vh] w-full flex justify-center rounded-2xl items-center relative overflow-hidden'
      style={{ cursor: 'ew-resize' }} // Optional: change cursor to indicate interactivity
    >
      <Canvas camera={{ position: [0, 1.5, 9], fov: 52 }} gl={{ antialias: true }}>
        <color attach="background" args={['#131313']} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <ambientLight intensity={1} />
       <TechCaro direction={direction} />
         <TechMarquee/>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={1}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;