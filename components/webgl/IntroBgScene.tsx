import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DistortedSphere } from './objects/DistortedSphere';

export const IntroBgScene : React.FC = () => {
  return (
    <Canvas camera={{
      fov: 75,
      position: [0, 0, 9]
    }}>
      <OrbitControls enableZoom={ false } enablePan={ false } enableRotate={ false } />
      <ambientLight intensity={ 0.5 } />
      <directionalLight position={[5, 9, 7]} intensity={ 1 } />
      <Suspense fallback={ null }>
        <DistortedSphere
          size={ 5 }
          tesselation_height={ 200 }
          tesselation_width={ 200 }
        />
      </Suspense>
    </Canvas>
  );
}