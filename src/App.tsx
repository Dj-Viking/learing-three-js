import React from 'react';
import './App.css';
import * as THREE from "three";

const App: React.FC<Record<string, unknown>> = () => {
  const { innerHeight } = window;
  const { innerWidth } = window;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    
  });
  renderer.setSize(innerWidth, innerHeight);

  window.document.body.appendChild(renderer.domElement);
  window.addEventListener("mousemove", (event) => {
    console.log("mouse event CLIENT X Y", event.clientX, event.clientY);
    camera.position.z = 5 + event.clientY / 30;
  });

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({   
    color: 0x00ff00,
    wireframe: true
  });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animate(): void {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.05;
    renderer.render(scene, camera);
  }

  animate();

  console.log("what is renderer dom element", renderer.domElement);
  return (
    <></>
  );
};

export default App;
