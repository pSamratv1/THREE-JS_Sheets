import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ============================================================================
// Scene: The container for everything in your 3D world.
// ============================================================================

const scene = new THREE.Scene();

// ============================================================================
// Mesh: A 3D object made up of geometry (shape) and material (appearance).
// ============================================================================

const cubeGemoetry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(cubeGemoetry, cubeMaterial);
scene.add(cube);

// ============================================================================

// ============================================================================
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

cube.position.y = 1;

// ============================================================================
/* Camera: Determines the viewpoint from which the scene is rendered. */
// ============================================================================

const aspect = window.innerWidth / window.innerHeight;

const perspectiveCamera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  300
);
perspectiveCamera.position.set(3, 3, 3);

// ============================================================================
/* Canvas: The HTML element where the 3D scene is rendered. */
// ============================================================================

const canvas = document.querySelector("#threejs-canvas");

// ============================================================================
/* Renderer: Handles the process of drawing the scene onto the canvas. */
// ============================================================================

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// ============================================================================
// OrbitControls: Provides user-controlled navigation in a 3D scene.
// ============================================================================

// Add OrbitControls for both cameras
const controls = new OrbitControls(perspectiveCamera, canvas);
controls.autoRotate = true;
controls.enableDamping = true;
controls.enableZoom = false;
controls.dampingFactor = 0.05;
controls.update();

// ============================================================================

// Render Loop: Continuously renders the scene and updates controls for smooth animations.
// ============================================================================

const renderLoop = () => {
  controls.update(); // Keep the controls smooth

  renderer.render(scene, perspectiveCamera); // Render using the current camera
  window.requestAnimationFrame(renderLoop); // Recursively calls renderLoop for the next frame
};

// Start the rendering process
renderLoop();

// ============================================================================

// Resize Event Listener: Adjusts camera and renderer size when window is resized

/* What it does:
- Dynamically adjusts the camera's aspect ratio and updates the renderer size whenever the window is resized.
- Ensures the 3D scene remains properly scaled and centered in the browser viewport.

How it works:
- When the window is resized, the event listener triggers:
  - `perspectiveCamera.aspect` updates to match the new width-to-height ratio.
  - `perspectiveCamera.updateProjectionMatrix()` recalculates the projection matrix to apply the new aspect ratio.
  - `renderer.setSize()` updates the canvas dimensions so the scene fills the viewport correctly.
- This ensures that the 3D scene maintains the correct proportions and prevents distortion.

Why it's important:
- Without this adjustment, resizing the browser window would cause the scene to become stretched or squished.
- Keeps the visuals responsive and adaptive to various screen sizes.

Example Usage:
```javascript
window.addEventListener("resize", () => {
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}); */

/* Common Issues:
-Scene appears stretched or squished after resizing? Make sure perspectiveCamera.updateProjectionMatrix() is called after adjusting the aspect ratio.

-Black or blank screen after resizing? Ensure renderer.setSize() uses the updated window dimensions (window.innerWidth and window.innerHeight).

-Event listener not triggering? Confirm that the resize listener is correctly added after the scene, camera, and renderer are initialized.

-Slow or choppy resizing? If performance drops during resizing, consider debouncing the resize event to limit how frequently the function executes.

-Aspect ratio not updating correctly? Ensure the perspectiveCamera and renderer variables are accessible within the scope of the event listener.

-Canvas not filling the entire viewport after resize? Check if any CSS styles (like width or height) are applied to the canvas element that might conflict with renderer.setSize(). */
// ==============================================================================
window.addEventListener("resize", () => {
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



