import * as THREE from "three";
import { PerspectiveCamera } from "three";

export const CreateCamera = (innerWidth: number, innerHeight: number): PerspectiveCamera => { 
  return new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000); 
};
