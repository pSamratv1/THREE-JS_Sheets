import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const textureTest = textureLoader.load(
  "/texture/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png"
);

const material = new THREE.MeshPhysicalMaterial({
  clearcoat: 0.7,
  clearcoatRoughness: 0.9,
  reflectivity: 0.2,
});
material.map = textureTest;

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

const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.enableDamping = true;
controls.enableZoom = false;
controls.dampingFactor = 0.05;

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

function animate() {
  controls.update();
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
