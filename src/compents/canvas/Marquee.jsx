import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { colors } from '../../constant/color';

const Marquee = () => {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.x -= 0.02;
      if (textRef.current.position.x < -10) {
        textRef.current.position.x = 10;
      }
    }
  });

  return (
    <Text
      ref={textRef}
      position={[10, -2, 2]} // Start off screen
      fontSize={1.3}
      color={colors.white}
      anchorX="center"
      anchorY="middle"
      fontStyle="poppins"
      fontWeight={700}
      
      
    >
      Made by Dojo Katana Code to express, not to impress.
    </Text>
  );
};
export default Marquee