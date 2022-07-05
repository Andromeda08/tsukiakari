import React, { FC, useRef } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

interface Args {
  size?: number;
  tesselation_width?: number;
  tesselation_height?: number;
  color?: string;
}

export const DistortedSphere : FC<Args> = ({
  size, tesselation_width, tesselation_height,color
}) => {
  const _size: number   = (size) ? size : 1;
  const _tlvl_w: number = (tesselation_width) ? tesselation_width : 50;
  const _tlvl_h: number = (tesselation_height) ? tesselation_height : 50;
  const _color: string  = (color) ? color : '#657ef8';

  return (
    <mesh rotation={[0, 0, 90]}>
      <sphereBufferGeometry
        attach='geometry'
        args={[ _size , _tlvl_w, _tlvl_h ]}
      />
      <MeshDistortMaterial
        color={ _color }
        attach='material'
        distort={ 0.3 }
        speed={ 1.25 }
        roughness={ 1 }
      />
    </mesh>
  );
};