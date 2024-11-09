import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

// Scene, Camera, Canvas, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const canvas = document.querySelector("#threejs-canvas");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Maze Data: 1 = Wall, 0 = Path
const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

// Wall Parameters
const wallSize = 2;
const wallGeometry = new THREE.BoxGeometry(wallSize, wallSize, wallSize);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 });

// Function to Create Walls Based on Layout
const createMaze = () => {
  mazeLayout.forEach((row, z) => {
    row.forEach((cell, x) => {
      if (cell === 1) {
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.position.set(x * wallSize, wallSize / 2, z * wallSize);
        scene.add(wall);
      }
    });
  });
};
createMaze();

const controls = new PointerLockControls(camera, renderer.domElement);

// Lock the pointer when clicking on the canvas
document.addEventListener("click", () => {
  controls.lock();
});

// Event listener to unlock the pointer
controls.addEventListener("unlock", () => {
  console.log("Pointer unlocked");
});

// Set initial camera position
camera.position.set(2, 1, 2);

// Variables for movement
let speed = 4;
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const clock = new THREE.Clock();

const keys = {
  forward: false,
  backward: false,
  left: false,
  right: false,
};

// Keyboard Controls for Movement
window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      keys.forward = true;
      break;
    case "ArrowDown":
    case "KeyS":
      keys.backward = true;
      break;
    case "ArrowLeft":
    case "KeyA":
      keys.left = true;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      keys.forward = false;
      break;
    case "ArrowDown":
    case "KeyS":
      keys.backward = false;
      break;
    case "ArrowLeft":
    case "KeyA":
      keys.left = false;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right = false;
      break;
  }
});

// Collect all wall objects for collision detection
const walls = [];
scene.traverse((object) => {
  if (object.isMesh && object !== camera) {
    walls.push(object);
  }
});

// Function to check for collisions
const checkCollisions = (newPosition) => {
  const playerBox = new THREE.Box3().setFromCenterAndSize(
    newPosition,
    new THREE.Vector3(1, 2, 1)
  );
  for (const wall of walls) {
    const wallBox = new THREE.Box3().setFromObject(wall);
    if (playerBox.intersectsBox(wallBox)) {
      return true;
    }
  }
  return false;
};

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);

  const deltaTime = clock.getDelta();

  // Handle movement
  direction.set(0, 0, 0);
  if (keys.forward) direction.z -= 1;
  if (keys.backward) direction.z += 1;
  if (keys.left) direction.x -= 1;
  if (keys.right) direction.x += 1;

  direction.normalize();

  // Calculate new velocity based on direction and speed
  velocity.set(
    direction.x * speed * deltaTime,
    0,
    direction.z * speed * deltaTime
  );

  const newPosition = camera.position.clone().add(velocity);

  // Check for collisions before updating position
  if (!checkCollisions(newPosition)) {
    camera.position.copy(newPosition);
  }

  renderer.render(scene, camera);
};

animate();
