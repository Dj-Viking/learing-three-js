import React from 'react';
import { Scene } from './webgl-engine/Scene';
import { Renderer } from './webgl-engine/Renderer';
import { CreateCamera } from './webgl-engine/Camera';
import { Cube } from './webgl-engine/Cube';
import './App.css';

const App: React.FC<Record<string, unknown>> = () => {
  const { innerHeight, innerWidth } = window;
  const camera = CreateCamera(innerWidth, innerHeight);
  window.document.addEventListener("mousemove", (event) => {
    // console.log("mouse event CLIENT X Y", event.clientX, event.clientY);
    camera.position.z = 5 + (event.clientY / 30) / 2;
  });
  
  Renderer.setSize(innerWidth, innerHeight);
  window.document.body.appendChild(Renderer.domElement);

  Scene.add(Cube);

  function animate(): void {
    // const num = requestAnimationFrame(animate);
    requestAnimationFrame(animate);

    Cube.rotation.x += 0.01;
    Cube.rotation.y += 0.01;
    Renderer.render(Scene, camera);
  }

  animate();

  console.log("what is Renderer dom element", Renderer.domElement);
  return (
    <></>
  );
};

export default App;
