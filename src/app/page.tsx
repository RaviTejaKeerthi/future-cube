'use client';

import { Cube } from '@/components/Cube';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function Home() {
  const contents = [
    'Food',
    'Sustainable Transport',
    'Green Energy',
    'Water',
    'Agriculture',
    'Air',
  ];
  const [seletedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="py-10 text-4xl font-black text-white">
        Differnet Aspects of Sustainable Future
      </h1>
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 1, 1]} />
        <Cube setSelectedIndex={setSelectedIndex} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      {seletedIndex !== null && (
        <h2 className="font-sans-secondary pointer-events-none absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[600%] text-4xl font-bold uppercase text-white">
          {contents[seletedIndex]}
        </h2>
      )}
    </div>
  );
}
