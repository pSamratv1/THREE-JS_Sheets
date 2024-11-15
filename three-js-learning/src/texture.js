import * as THREE from "three";

const scene = new THREE.Scene();

const material = new THREE.MeshPhysicalMaterial({
  clearcoat: 0.5,
  clearcoatRoughness: 0.2,
  reflectivity: 0.7,
  sheen: 0.3,
  color: 0x2194ce,
});

const geometry = new THREE.SphereGeometry(7, 64, 32);
const object = new THREE.Mesh(geometry, material);
scene.add(object);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const canvas = document.querySelector("#threejs-canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
