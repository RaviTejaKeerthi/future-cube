import { ThreeEvent, useFrame } from '@react-three/fiber';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Mesh } from 'three';
import { FaceIcon } from './FaceIcon';

interface CubeProps {
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
}

export function Cube({ setSelectedIndex }: CubeProps) {
  const defaultColors = [
    '#4ade80',
    '#4ade80',
    '#4ade80',
    '#4ade80',
    '#4ade80',
    '#4ade80',
  ];

  const cubeRef = useRef<Mesh>(null);
  const rotations = [
    [0, -Math.PI / 2, 0],
    [0, Math.PI / 2, 0],
    [Math.PI / 2, 0, 0],
    [-Math.PI / 2, 0, 0],
    [0, 0, 0],
    [0, Math.PI, 0],
  ];

  const [colors, setColors] = useState(defaultColors);
  const [rotation, setRotation] = useState(true);

  useFrame((_, delta) => {
    if (cubeRef.current && rotation) {
      cubeRef.current.rotation.x += delta * 0.25;
      cubeRef.current.rotation.y += delta * 0.25;
      cubeRef.current.rotation.z += delta * 0.25;
    }
  });

  const onCubeClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.object.name !== 'plane-icon') {
      if (e.faceIndex) {
        const clickedIndex = Math.floor(e.faceIndex / 2);

        if (colors[clickedIndex] === '#4ade80') {
          setColors([
            ...defaultColors.slice(0, clickedIndex),
            'red',
            ...defaultColors.slice(clickedIndex + 1, 6),
          ]);

          setRotation(false);
          setSelectedIndex(clickedIndex);

          cubeRef.current?.rotation.set(
            rotations[clickedIndex][0],
            rotations[clickedIndex][1],
            rotations[clickedIndex][2],
          );
        } else {
          setColors(defaultColors);
          setRotation(true);
          setSelectedIndex(null);
        }
      }
    }
  };

  return (
    <mesh onClick={onCubeClick} ref={cubeRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {colors.map((color, index) => (
        <meshStandardMaterial
          attach={`material-${index}`}
          color={color}
          key={index}
        />
      ))}
      <FaceIcon
        position={[0, 0, 1.251]}
        rotation={[0, 0, 0]}
        texture="/icons/agriculture.svg"
      />
      <FaceIcon
        position={[0, 0, -1.251]}
        rotation={[0, Math.PI, 0]}
        texture="/icons/air.svg"
      />
      <FaceIcon
        position={[1.251, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        texture="/icons/food.svg"
      />
      <FaceIcon
        position={[-1.251, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        texture="/icons/transport.svg"
      />
      <FaceIcon
        position={[0, 1.251, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        texture="/icons/energy.svg"
      />
      <FaceIcon
        position={[0, -1.251, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        texture="/icons/water.svg"
      />
    </mesh>
  );
}
