import { useTexture } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';

interface FaceIconProps {
  position: Vector3;
  rotation: Euler;
  texture: string;
}

export function FaceIcon({ position, rotation, texture }: FaceIconProps) {
  const [iconTexture] = useTexture([texture]);

  return (
    <mesh name="plane-icon" position={position} rotation={rotation}>
      <planeGeometry args={[1.25, 1.25, 1.25]} />
      <meshBasicMaterial map={iconTexture} transparent />
    </mesh>
  );
}
