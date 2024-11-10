// ============================================================================
// Vector3 Methods Overview: The fundamental class for 3D vector mathematics
// - Commonly used for positions, directions, and transformations in 3D space
/* What it does:
- `THREE.Vector3` is a core class used to represent coordinates (x, y, z) in 3D space.
- Commonly used for positions, directions, movement calculations, or storing offsets.
- Supports many mathematical operations like addition, subtraction, normalization, etc.

How it works:
- `new THREE.Vector3(x, y, z)` creates a vector with specified coordinates.
- Methods like `.add()`, `.sub()`, `.multiply()`, and `.divide()` perform mathematical operations on vectors.
- Useful for handling movement, collisions, or object transformations in a 3D scene.
// ============================================================================

// 1. Setting Values & Copying Vectors
/* 
vectorA.set(1, 2, 3);               // Sets x, y, z components to (1, 2, 3)
vectorA.copy(vectorB);              // Copies values from vectorB to vectorA
*/

// 2. Mathematical Operations
/* 
vectorA.add(vectorB);               // Adds vectorB to vectorA
vectorA.sub(vectorB);               // Subtracts vectorB from vectorA
vectorA.multiplyScalar(2);          // Scales vectorA by 2
vectorA.divideScalar(2);            // Divides vectorA by 2
*/

// 3. Cross Product: Finds a vector perpendicular to both vectors (useful for normals)
/*
vectorA.cross(vectorB);             // Result is perpendicular to vectorA and vectorB
*/

// 4. Dot Product: Checks the angle between vectors
/*
const dot = vectorA.dot(vectorB);   // Returns a scalar (positive, zero, or negative)
*/

// 5. Distance & Length Calculations
/* 
vectorA.length();                   // Returns the magnitude (length) of the vector
vectorA.lengthSq();                 // Faster, returns the squared length (avoids square root)
vectorA.distanceTo(vectorB);        // Euclidean distance between vectorA and vectorB
vectorA.distanceToSquared(vectorB); // Faster, squared distance for comparison
*/

// 6. Normalizing Vectors: Converts to a unit vector (length = 1)
/*
vectorA.normalize();                // Useful for directions
*/

// 7. Clamping & Limiting
/* 
vectorA.clamp(minVector, maxVector); // Restricts components between min and max values
vectorA.clampLength(0, 5);          // Limits vector length to a maximum of 5 units
*/

// 8. Interpolation (Smooth Transitions)
/* 
vectorA.lerp(vectorB, 0.5);         // Moves halfway between vectorA and vectorB
const result = new THREE.Vector3();
result.lerpVectors(vectorA, vectorB, 0.75); // 75% of the way from A to B
*/

// 9. Transforming Vectors
/* 
vectorA.applyMatrix4(matrix);       // Applies a 4x4 matrix transformation (for scaling, rotating, translating)
const euler = new THREE.Euler(Math.PI / 2, 0, 0);
vectorA.applyEuler(euler);          // Rotates vectorA using Euler angles
*/

// 10. Projecting & Unprojecting (Screen Space Conversions)
/* 
vectorA.project(camera);            // Projects vectorA to 2D screen space
vectorA.unproject(camera);          // Converts screen coordinates back to 3D space
*/

// 11. Angle Calculations
/* 
const angle = vectorA.angleTo(vectorB); // Returns angle between vectorA and vectorB in radians
*/

// 12. Checking if Vectors are Equal
/* 
vectorA.equals(vectorB);            // Returns true if all components match
*/

// ============================================================================
// Common Issues & Debugging Tips:
// - NaN values? Check if normalizing a zero-length vector or dividing by zero.
// - Incorrect directions? Ensure vectors are normalized when used for directions.
// - Unexpected results with `applyMatrix4()`? Verify the matrix is correct.
// - Stuck with strange distances? Use `.distanceToSquared()` for efficiency in comparisons.
// - Vectors not updating? Ensure transformations are recalculated properly.
// ============================================================================

// End of Vector3 Overview
// ============================================================================
