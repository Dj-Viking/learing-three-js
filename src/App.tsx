import React, { useEffect, useCallback } from 'react';
import * as THREE from "three";
import { Scene } from './webgl-engine/Scene';
import { Renderer } from './webgl-engine/Renderer';
import { CreateCamera } from './webgl-engine/Camera';
import { Cube , uniforms } from './webgl-engine/Cube';
import './App.css';

const App: React.FC<Record<string, unknown>> = () => {
  const { innerHeight, innerWidth } = window;
  const Camera = CreateCamera(innerWidth, innerHeight);
  document.addEventListener("mousemove", (event) => {
    uniforms.u_mouse.value.x = event.clientX;
    uniforms.u_mouse.value.y = event.clientY;
    
    Camera.position.z = 5 + (event.clientY / 30) / 2;
  });
  const onWindowResize = useCallback(() => {
    if (uniforms.u_resolution !== undefined) {
      uniforms.u_resolution.value.x = innerWidth;
      uniforms.u_resolution.value.y = innerHeight;
    }
    Camera.aspect = innerWidth / innerHeight;
    Camera.updateProjectionMatrix();
    Renderer.setSize(innerWidth, innerHeight);
  }, [innerHeight, innerWidth, Camera]);
  
  useEffect(() => {
    if (window) {
      window.onresize = onWindowResize;
    }
  }, [onWindowResize]);
  
  window.document.body.appendChild(Renderer.domElement);

  Scene.add(Cube);

  // true start automatically
  const clock = new THREE.Clock(true);

  function animate(): void {
    requestAnimationFrame(animate);

    Cube.rotation.x += 0.01;
    Cube.rotation.y += 0.01;

    uniforms.u_time.value = clock.getElapsedTime();
    
    Renderer.render(Scene, Camera);
  }
  
  Renderer.setSize(innerWidth, innerHeight, false);
 
  animate();

  return (
    <></>
  );
};

export default App;
