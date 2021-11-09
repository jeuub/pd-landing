import React from 'react';
import './three.css';
import { Canvas } from '@react-three/fiber';
import Model from './model/Scene';

const Three = () => {
  return(
    <div className={'canvas__wrapper'}>
      <Canvas camera={{position: [0,5.5,3], zoom:1.5}}>
        <spotLight
          position={[10,10,10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <React.Suspense fallback={null}>
          <Model/>
        </React.Suspense>
      </Canvas>
    </div>
  )
};

export default Three;