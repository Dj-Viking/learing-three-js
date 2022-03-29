import * as THREE from "three";
import { FS } from "./Shaders/FragmentShader.glsl";
import { VS } from "./Shaders/VertexShader.glsl";

const geometry = new THREE.BoxGeometry(5, 5, 5, 10, 10, 10);

// trying to figure out how to add textures to the cube...
// maybe need to provide a texture for each face of the cube
// const material = new THREE.MeshBasicMaterial({   
//   map: new THREE.TextureLoader().setPath("/resources/").load("wall.jpg")
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
  ShaderMaterial,
  // material

);
