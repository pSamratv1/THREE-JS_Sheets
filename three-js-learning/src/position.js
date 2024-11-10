// ============================================================================
// Position in THREE.js: Managing the location of objects in 3D space
// - Each object (like meshes, cameras, and lights) has a `.position` property
// - `.position` is a THREE.Vector3, representing (x, y, z) coordinates
// ============================================================================

// 1. Setting Object Positions
/* 
mesh.position.set(5, 10, -3);   // Sets the object's position to (x: 5, y: 10, z: -3)
mesh.position.x = 2;            // Sets only the x-coordinate to 2
mesh.position.y += 1;           // Moves the object up by 1 unit
*/

// 2. Resetting Position to Origin
/* 
mesh.position.set(0, 0, 0);     // Resets position to the origin (0, 0, 0)
*/

// 3. Offsetting / Moving Relative to Current Position
/* 
mesh.position.add(new THREE.Vector3(1, 0, 0)); // Moves the object 1 unit in x-direction
mesh.position.addScaledVector(directionVector, 5); // Moves by `directionVector` scaled by 5 units
*/

// 4. Using Position for Animations & Interactions
/* 
// Example: Move an object up and down smoothly
mesh.position.y = Math.sin(time) * 2;
*/

// 5. Copying & Cloning Positions
/*
const otherPosition = new THREE.Vector3();
otherPosition.copy(mesh.position);  // Copies current position into otherPosition
*/

// 6. Using `.lerp()` for Smooth Position Transitions
/*
mesh.position.lerp(new THREE.Vector3(10, 5, 0), 0.1); // Smoothly moves 10% towards target position
*/

// 7. Clamping Position within a Range
/* 
mesh.position.clamp(
  new THREE.Vector3(-10, 0, -10),
  new THREE.Vector3(10, 10, 10)
); // Restricts position within the given bounds
*/

// 8. Common Uses of Position: Moving Cameras, Lights, and Objects
/* 
camera.position.set(0, 2, 5);   // Sets camera to look down at the scene from above
light.position.set(5, 5, 5);    // Moves a light to illuminate the scene better
*/

// ============================================================================
// Common Issues & Debugging Tips:
// - Object not moving? Ensure `.position.set()` is called on a valid object.
// - Object appearing out of view? Check camera's position and frustum settings.
// - Sudden jumps? Use `.lerp()` or `.addScaledVector()` for smoother transitions.
// - Object not visible? Confirm that `.position` coordinates are within the scene bounds.
// - Camera not showing objects? Adjust `camera.position` and `camera.lookAt()`.
// ============================================================================

// End of Position Overview
// ============================================================================
