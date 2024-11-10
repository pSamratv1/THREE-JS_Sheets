import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ============================================================================

// Scene: The container for everything in your 3D world.

/* What it does:
- Holds all 3D objects, lights, cameras, and other elements in a single space.
- Acts as the root for all objects in the 3D scene graph. */

/* How it works:
- The scene is like an empty room where you add objects, lights, and cameras.
- You can create multiple scenes, but typically, you'll work with just one per project.
- The scene needs to be rendered using a camera and renderer to display its content on the screen. */

/* Example usage:
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Set background color to black
scene.add(mesh); // Add objects to the scene */

/* Common Issues:
- Scene not rendering? Check if objects, lights, and camera are correctly added.
- Make sure `renderer.render(scene, camera)` is called in your render loop. */

// ============================================================================

const scene = new THREE.Scene();

// ============================================================================

// Mesh: A 3D object made up of geometry (shape) and material (appearance).

/* What it does:
- Represents a visible object in your scene, like a cube, sphere, or custom shape.
- Combines geometry (vertices and faces) with materials to create a renderable object. */

/* How it works:
- Geometry defines the shape (like a cube or sphere).
- Material defines how the shape looks (color, texture, lighting, etc.).
- Meshes can be added to the scene and transformed (position, rotation, scale). */

/* Example usage:
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // Add the mesh to the scene */

/* Common Issues:
- Mesh not visible? Ensure it's added to the scene: `scene.add(mesh)`.
- Make sure the material is compatible with the scene lighting.
- Check the position, scale, or rotation if it's not appearing as expected. */

// ============================================================================

const cubeGemoetry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(cubeGemoetry, cubeMaterial);
scene.add(cube);

// ============================================================================

/* Camera: Determines the viewpoint from which the scene is rendered. */

/* What it does:
- Defines the perspective or orthographic projection used to display the 3D scene.
- Controls what part of the scene is visible and how it appears on screen. */

/* How it works:
- The camera has a position, orientation, and field of view (FOV).
- PerspectiveCamera mimics human vision (depth and perspective).
- OrthographicCamera is often used for 2D or technical drawings without perspective distortion. */

/* Example usage:
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5); // Set camera position
scene.add(camera); */

/* Common Issues:
- Scene not visible? Check camera's position and FOV (field of view).
- Ensure the camera is added to the scene if needed.
- Make sure `renderer.render(scene, camera)` references the correct camera. */

// ============================================================================

const aspect = window.innerWidth / window.innerHeight;

// Perspective Camera: Creates a camera that mimics human vision with depth and perspective.
/* How it works:
- The first parameter (80) sets the field of view (FOV) in degrees (how wide the camera view is).
- The second parameter is the aspect ratio (width/height of the canvas) to avoid image distortion.
- The third and fourth parameters define the near (0.1) and far (300) clipping planes.
  Objects outside this range won't be rendered.
- The `position.set(3, 3, 3)` places the camera at (x: 3, y: 3, z: 3) in the 3D space.
- `lookAt(0, 0, 0)` makes the camera point towards the origin (center of the scene). */

const perspectiveCamera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  300
);
perspectiveCamera.position.set(3, 3, 3);

// ===========================================================================

// Orthographic Camera: Creates a camera for rendering objects without perspective distortion.
/* How it works:
- Instead of a field of view, this camera uses a "box" to define its view.
  The box is defined by the left, right, top, and bottom boundaries.
- Here, we calculate the left/right boundaries using the aspect ratio to ensure it matches the canvas size. */
/* - The first four parameters (-2 * aspect, 2 * aspect, 2, -2) define the visible area of the camera.
  Objects outside this box will not be visible.
- The last two parameters (0.1 and 100) define the near and far clipping planes.
- The camera is positioned at (3, 3, 3) and looks towards the origin (0, 0, 0) like the Perspective Camera. */

const orthoCamera = new THREE.OrthographicCamera(
  -1 * aspect, // Left boundary (scaled by aspect ratio)
  1 * aspect, // Right boundary (scaled by aspect ratio)
  1, // Top boundary
  -1, // Bottom boundary
  0.1, // Near clipping plane
  300 // Far clipping plane
);
orthoCamera.position.set(3, 3, 3);

// ============================================================================

/* Canvas: The HTML element where the 3D scene is rendered. */

/* What it does:
- Serves as the target for rendering your Three.js scene.
- Provides a surface where the WebGL renderer draws the scene based on camera views. */

/* How it works:
- You can create a custom canvas element in HTML and pass it to the renderer.
- The canvas can be styled with CSS and used to handle user input (clicks, drags, etc.). */

/* Example usage:
<canvas id="myCanvas"></canvas>
const canvas = document.getElementById('myCanvas');
const renderer = new THREE.WebGLRenderer({ canvas }); */

/* Common Issues:
- Black screen? Check if the correct canvas element is selected.
- Make sure the renderer is using this canvas: `new THREE.WebGLRenderer({ canvas })`. */

// ============================================================================

const canvas = document.querySelector("#threejs-canvas");

// ============================================================================

/* Renderer: Handles the process of drawing the scene onto the canvas. */

/* What it does:
- Converts the 3D scene, camera, and lighting into pixels displayed on the canvas.
- Uses WebGL to render the scene efficiently using GPU acceleration. */

/* How it works:
- You need to create a renderer instance and set its size to match the canvas or window size.
- The renderer's `render()` method is called in the animation loop to update the scene continuously.
- Options like antialiasing can improve visual quality but may affect performance. */

/* Example usage:
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera); */

/* Common Issues:
- Nothing rendering? Check if `renderer.setSize()` matches canvas/window size.
- Ensure the `render()` method is called within your animation loop.
- Enable antialiasing if edges appear jagged: `new THREE.WebGLRenderer({ antialias: true })`. */

// ============================================================================

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// ============================================================================

// OrbitControls: Provides user-controlled navigation in a 3D scene.
/* 
What it does:
- Enables interactive rotation, zooming, and panning in the scene using mouse or touch inputs.
- Allows users to explore the 3D environment by manipulating the camera's view. */

/* How it works:
- Rotate (Orbit): Drag with the left mouse button or one-finger swipe to orbit the camera around the target.
- Zoom (Dolly): Scroll the mouse wheel or pinch with two fingers to zoom in/out.
- Pan: Drag with the right mouse button or use two-finger touch drag to move the camera view horizontally/vertically. */

/* What it takes:
- A `camera`: Controls manipulate the camera's position and orientation.
- A `renderer.domElement`: Usually the canvas where the scene is rendered. */

/* Key Settings:
- `autoRotate`: Automatically rotates the camera around the target. Good for showcasing models.
- `enableDamping`: Adds a smooth easing effect to controls, making movements feel more natural.
- `dampingFactor`: Controls the intensity of damping (lower values = smoother movements).
- `minDistance` & `maxDistance`: Sets limits on how close or far the camera can zoom.
- `controls.update()`: Must be called on each frame to apply damping and keep controls in sync. */

/* Example usage:
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true; // Enables auto-rotation (for dynamic, engaging scenes).
controls.enableDamping = true; // Smoothens user interactions.
controls.dampingFactor = 0.05; // Sets the damping strength.
controls.minDistance = 2; // Prevents zooming too close.
controls.maxDistance = 20; // Prevents zooming too far out.
controls.target.set(0, 0, 0); // The point the camera orbits around.
controls.update(); // Required for damping to work. */

/* Common Issues:
- Controls not working? Check if `controls.update()` is called in the render loop.
- Ensure the correct DOM element is used: `new OrbitControls(camera, canvas)`.
- Smooth movement not working? Set `controls.enableDamping = true` and call `controls.update()` on each frame. */

// ============================================================================
// Set initial camera to orthographic
let currentCamera = orthoCamera;

// Add OrbitControls for both cameras
const controls = new OrbitControls(currentCamera, canvas);
controls.autoRotate = true;
controls.enableDamping = true;
controls.enableZoom = false;
controls.dampingFactor = 0.05;
controls.update();

// ============================================================================

// Render Loop: Continuously renders the scene and updates controls for smooth animations.

/* What it does:
- Keeps the scene alive by rendering frames continuously (like a game loop).
- Updates the `OrbitControls` on each frame for smooth interactions and animations.
How it works: */

/* - `controls.update()`: Ensures smooth control transitions (especially with damping enabled).
- `renderer.render(scene, camera)`: Draws the current state of the scene from the camera’s perspective.
- `window.requestAnimationFrame(renderLoop)`: Recursively calls the `renderLoop` function to create a smooth, infinite loop. */

/* Why it's important:
- The render loop is crucial for any animations or interactive 3D scenes.
- Ensures that the scene reflects changes in camera position, object transformations, or user inputs in real-time. */

/* Common Issues:
- Stuttering animation? Check if `controls.update()` is inside the loop.
- Nothing appears? Ensure `renderer.render(scene, camera)` is called each frame.
- High CPU usage? Consider limiting the frame rate or using a conditional `req */

// ============================================================================
// Switch between cameras
// Example usage:
const renderLoop = () => {
  controls.update(); // Keep the controls smooth
  renderer.render(scene, currentCamera); // Render using the current camera
  window.requestAnimationFrame(renderLoop); // Recursively calls renderLoop for the next frame
};

// Start the rendering process
renderLoop();
// Toggle between Orthographic and Perspective Cameras using the "c" key
window.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    if (currentCamera === orthoCamera) {
      currentCamera = perspectiveCamera;
    } else {
      currentCamera = orthoCamera;
    }
    // Update controls with the new camera
    controls.object = currentCamera;
    controls.update();
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  const newAspect = window.innerWidth / window.innerHeight;

  // Update Perspective Camera
  perspectiveCamera.aspect = newAspect;
  perspectiveCamera.updateProjectionMatrix();

  // Update Orthographic Camera
  orthoCamera.left = -2 * newAspect;
  orthoCamera.right = 2 * newAspect;
  orthoCamera.top = 2;
  orthoCamera.bottom = -2;
  orthoCamera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});
