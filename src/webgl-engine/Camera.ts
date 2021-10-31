import * as THREE from "three";
import { PerspectiveCamera } from "three";

const fov = 75;
const near = 0.01;
const far = 1000;

export const CreateCamera = (
  innerWidth: number, 
  innerHeight: number
): PerspectiveCamera => {
  const aspect = innerWidth / innerHeight;
  
  return new THREE.PerspectiveCamera(
    fov, 
    aspect, 
    near, 
    far
  ); 
};
