// ============================================================================
// Three.js Math and MathUtils: Basics and Intermediate Concepts
//
// Three.js provides powerful math utilities through its `Math` and `MathUtils` modules.
// These are essential for manipulating angles, distances, randomness, and more in 3D space.
// ============================================================================

// 1. Math Basics:
/*
- THREE.Math is a legacy namespace. Prefer using MathUtils instead in newer code.
- MathUtils includes static methods for mathematical operations and utility functions.
*/

// 2. Key Methods in MathUtils:
/*
- .degToRad(degrees) : Float
  - Converts degrees to radians (since Three.js uses radians).
  - Example: THREE.MathUtils.degToRad(90); // Output: 1.5708 (π/2 radians)

- .radToDeg(radians) : Float
  - Converts radians to degrees.
  - Example: THREE.MathUtils.radToDeg(Math.PI / 2); // Output: 90

- .clamp(value, min, max) : Float
  - Clamps a value between a specified minimum and maximum.
  - Example: THREE.MathUtils.clamp(5, 0, 10); // Output: 5
  - Example: THREE.MathUtils.clamp(15, 0, 10); // Output: 10

- .lerp(start, end, alpha) : Float
  - Linearly interpolates between two values based on the alpha (0 to 1).
  - Example: THREE.MathUtils.lerp(0, 10, 0.5); // Output: 5

- .mapLinear(x, a1, a2, b1, b2) : Float
  - Maps a value from one range to another.
  - Example: THREE.MathUtils.mapLinear(5, 0, 10, 0, 100); // Output: 50

- .randomFloat(min, max) : Float
  - Generates a random float between the given min and max.
  - Example: THREE.MathUtils.randomFloat(0, 1); // Random value between 0 and 1

- .randomInt(min, max) : Integer
  - Generates a random integer between the given min and max.
  - Example: THREE.MathUtils.randomInt(1, 6); // Random value between 1 and 6 (like a dice roll)

- .smoothstep(x, min, max) : Float
  - Smoothly interpolates between 0 and 1 when x is between min and max.
  - Example: THREE.MathUtils.smoothstep(0.5, 0, 1); // Output: 0.5
  - Useful for smooth transitions.

- .seededRandom(seed) : Float
  - Generates a pseudo-random number based on a seed.
  - Useful for reproducible randomness.
  - Example: THREE.MathUtils.seededRandom(42); // Random value based on seed 42

- .floorPowerOfTwo(value) : Integer
  - Rounds down to the nearest power of two.
  - Example: THREE.MathUtils.floorPowerOfTwo(7); // Output: 4
*/

// 3. Math Functions for Angles and Trigonometry:
/*
- THREE.MathUtils.PI2 : Float
  - Represents 2 * π (approximately 6.2832).

- .euclideanModulo(n, m) : Float
  - Computes the positive remainder of a division (like modulo but handles negatives correctly).
  - Example: THREE.MathUtils.euclideanModulo(-3, 2); // Output: 1

- .setQuaternionFromProperEuler(q, a, b, c, order) : Quaternion
  - Sets a quaternion from Euler angles using proper Euler angles.
  - Useful when working with rotations.
*/

// 4. Usage Examples:
/*
// Convert 45 degrees to radians
const radians = THREE.MathUtils.degToRad(45);
console.log(radians); // Output: 0.785398 (π/4 radians)

// Clamp a value within a range
const clampedValue = THREE.MathUtils.clamp(12, 0, 10);
console.log(clampedValue); // Output: 10

// Linearly interpolate between two values
const lerpedValue = THREE.MathUtils.lerp(0, 100, 0.75);
console.log(lerpedValue); // Output: 75

// Generate a random number between 1 and 10
const randomValue = THREE.MathUtils.randomInt(1, 10);
console.log(randomValue);

// Map a value from one range to another
const mappedValue = THREE.MathUtils.mapLinear(25, 0, 50, 0, 100);
console.log(mappedValue); // Output: 50
*/

// 5. Common Issues & Debugging Tips:
/*
- Wrong unit conversions? Remember that Three.js uses radians, not degrees.
  - Use `degToRad()` and `radToDeg()` for conversions.

- Animations not smooth? Try using `.lerp()` or `.smoothstep()` for smoother transitions.
  - These methods help avoid sudden jumps in values.

- Getting unexpected NaN or infinity values?
  - Ensure inputs to methods like `.mapLinear()` are in the correct ranges.
  - Use `.clamp()` to constrain values when needed.

- Random values not reproducible?
  - Use `seededRandom()` if you need consistent randomness (e.g., for procedural generation).
*/

// End of Math and MathUtils Notes
// ============================================================================
