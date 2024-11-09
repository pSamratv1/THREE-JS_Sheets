import * as THREE from "three";

// Creating a Scene
const scene = new THREE.Scene();

// Creating cubeBox
const cubeGemoetry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(cubeGemoetry, cubeMaterial);

// Add Mesh to a scene
scene.add(cube);

// Creating a Camera
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  300
);
camera.position.z = 4;

// Creating a canvas
const canvas = document.querySelector("#threejs-canvas");

// Creating Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
