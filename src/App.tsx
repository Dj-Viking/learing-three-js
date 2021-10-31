import React, { useEffect, useState } from "react";
import * as THREE from "three"; 
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Scene } from "./webgl-engine/Scene";
import { Renderer } from "./webgl-engine/Renderer";
import { CreateCamera } from "./webgl-engine/Camera";
import { Cube , uniforms } from "./webgl-engine/Cube";
import "./App.css";
import { setCanvasDimensions } from "./utils/setCanvasDimensions";

const App: React.FC<Record<string, unknown>> = () => {
  const { innerHeight, innerWidth } = window;
  const [windowHeightState, setWindowHeightState] = useState(innerHeight);
  const [windowWidthState, setWindowWidthState] = useState(innerWidth);
  const Camera = CreateCamera(innerWidth, innerHeight);

  const controls = new OrbitControls(
    Camera, Renderer.domElement
  );
  controls.target.set(0, 20, 0);
  controls.update();

  document.addEventListener("mousemove", (event) => {
    uniforms.u_mouse.value.x = event.clientX;
    uniforms.u_mouse.value.y = event.clientY;
  });
  
  // document.addEventListener("keyup", (event) => {
  //   // Camera.position.z = 5 + (event.clientY / 30) / 2;
  //   if (event.key === "ArrowUp") {
  //     Camera.position.z += 5;
  //   }
  //   if (event.key === "ArrowDown") {
  //     Camera.position.z -= 5;
  //   }
  // });
  
  window.document.body.appendChild(Renderer.domElement);

  Scene.add(Cube);

  if (window) {
    window.addEventListener("resize", () => {
      window.innerHeight !== windowHeightState && setWindowHeightState(window.innerHeight);

      window.innerWidth !== windowWidthState && setWindowWidthState(window.innerHeight);
    }, false);
  }

  useEffect(() => {
    if (
      windowHeightState === window.innerHeight 
      && windowWidthState === window.innerWidth
    ) {
      setCanvasDimensions(Renderer.domElement, windowWidthState, windowHeightState);
    }
    Renderer.setSize(windowWidthState, windowHeightState);
    return void 0;
  }, [windowHeightState, windowWidthState]);

  // true start automatically
  const clock = new THREE.Clock(true);
  
  function animate(): void {
    requestAnimationFrame(animate);
    
    Cube.rotation.x += 0.001;
    Cube.rotation.y += 0.001;

    uniforms.u_time.value = clock.getElapsedTime();

    Renderer.render(Scene, Camera);
  }
  
  Renderer.setSize(innerWidth, innerHeight);
  
  window.addEventListener("DOMContentLoaded", () => {
    animate();
  });

  return (
    <></>
  );
};

export default App;
