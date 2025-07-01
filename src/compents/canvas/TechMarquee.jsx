import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { colors } from '../../constant/color';

const TechMarquee = () => {
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
     From backend logic to frontend magic every layer matters
    </Text>
  );
};
export default TechMarquee