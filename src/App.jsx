import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Iphone from "./Iphone";
import Tenis from './Tenis'
import { OrbitControls } from "@react-three/drei";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <p className="oi">Projeto em threeJS e React</p>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tenis />
        </Suspense>
      </Canvas>
      <div className="flex">
        <a href="https://github.com/Gustavo13132">
          <div className="github">
            <BsGithub className="github-icon" />

            <h1 id="github-text">Gustavo13132</h1>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gustavo-gonzaga-69b47a228/">
          <div className="linkedin">
            <FaLinkedin className="linkedin-icon" />

            <h1 id="linkedin-text">
              Gustavo<br></br> Gonzaga
            </h1>
          </div>
        </a>
        <a href="https://portifoliogustavo.netlify.app/">
          <div className="portifolio">
            <img src="Imagem3.png" alt="" className="portifolio-img" />

            <h1 id="linkedin-text">Meu portifólio!</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
