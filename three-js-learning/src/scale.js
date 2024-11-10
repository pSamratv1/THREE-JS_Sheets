// ============================================================================
// Scale in THREE.js: Adjusting the Size of Objects in 3D Space
// - Each object (like meshes, lights, etc.) has a `.scale` property
// - `.scale` is a THREE.Vector3, representing scaling factors for (x, y, z) axes
// - By default, scale is set to (1, 1, 1), meaning the object retains its original size
// ============================================================================

// 1. Setting Object Scale
/* 
mesh.scale.set(2, 2, 2);        // Doubles the size of the object in all dimensions
mesh.scale.x = 0.5;             // Reduces the object's width by half
mesh.scale.y *= 1.5;            // Increases height by 1.5 times
*/

// 2. Uniform Scaling
/* 
mesh.scale.setScalar(3);        // Scales the object uniformly to 3x its original size
*/

// 3. Resetting Scale to Default
/* 
mesh.scale.set(1, 1, 1);        // Resets the scale to the original size
*/

// 4. Inverting Scale
/* 
mesh.scale.set(-1, 1, 1);       // Flips the object along the x-axis (useful for mirroring)
*/

// 5. Dynamic Scaling for Animations
/* 
mesh.scale.x = Math.sin(time) * 2; // Animates scaling along the x-axis over time
mesh.scale.lerp(new THREE.Vector3(1, 2, 1), 0.1); // Smoothly scales towards (1, 2, 1)
*/

// 6. Using `.multiplyScalar()` for Uniform Scaling
/* 
mesh.scale.multiplyScalar(0.5); // Shrinks the object to half its current size
*/

// 7. Copying & Cloning Scale Values
/*
const newScale = new THREE.Vector3();
newScale.copy(mesh.scale);      // Copies current scale into another vector
*/

// ============================================================================
// Common Uses of Scale:
// - Adjusting object size without changing its geometry
// - Creating animations like pulsing effects, shrinking, or growing objects
// - Dynamically adjusting scale for responsiveness (e.g., based on window size)
// ============================================================================

// Common Issues & Debugging Tips:
/* 
- Object not scaling? Ensure `.scale.set()` is called on a valid mesh.
- Object disappearing? Negative scale values can cause the object to flip inside out.
- Scale looks off? Remember scaling is multiplicative; a scale of (0, 0, 0) makes the object invisible.
- Object flickering or deforming? Check if scaling factors are being updated too rapidly.
- Object appears stretched? Ensure the scale values are proportionate (e.g., uniform scaling).
*/

// End of Scale Overview
// ============================================================================
