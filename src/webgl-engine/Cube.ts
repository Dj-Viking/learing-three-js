import * as THREE from "three";
import { FS } from "./Shaders/FragmentShader.glsl";
import { VS } from "./Shaders/VertexShader.glsl";

const geometry = new THREE.BoxGeometry(5, 5, 5, 10, 10, 10);
// const material = new THREE.MeshBasicMaterial({   
//   color: 0x00ff00,
//   wireframe: false
// });

// eslint-disable-next-line
export type MyUniforms = Record<string, any>

export const uniforms: MyUniforms = {
  u_resolution: { value: { x: null, y: null } },
  u_time: { value: 0.0 },
  u_mouse: { value: { x: null, y: null } }
};

const ShaderMaterial = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: VS,
  fragmentShader: FS
}); 

export const Cube = new THREE.Mesh(
  geometry, 
  ShaderMaterial
);
