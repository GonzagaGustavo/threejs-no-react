import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'
import Iphone from './Iphone'
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <h1>Projeto em threeJS</h1>
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;