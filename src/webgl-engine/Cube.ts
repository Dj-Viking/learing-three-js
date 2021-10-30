import * as THREE from "three";

const geometry = new THREE.BoxGeometry(5, 5, 5, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({   
  color: 0x00ff00,
  wireframe: false
});

export const Cube = new THREE.Mesh(geometry, material);
