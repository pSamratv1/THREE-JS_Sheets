// ============================================================================
// Euler: Notes on Important Properties and Methods
//
// Euler represents rotational transformations using rotations along the x, y, and z axes.
// Useful for rotating objects in Three.js scenes using Euler angles.
// Rotations are applied in a specified order, affecting how the object is transformed.
// ============================================================================

// 1. Key Properties:
/*
- .x, .y, .z (Float):
  - Represents the angles (in radians) to rotate around the x, y, and z axes.
  - Example: euler.x = Math.PI / 4; // Rotate by 45 degrees around the x-axis.

- .order (String):
  - Determines the sequence in which rotations are applied.
  - Common orders include 'XYZ', 'YXZ', 'ZXY', etc.
  - Default is 'XYZ'. This order affects the final orientation.
  - Example: euler.order = 'YXZ'; // Change rotation order to YXZ.

- .isEuler (Boolean, Read-only):
  - A flag indicating whether the object is of type Euler.
  - Useful for type-checking before applying transformations.
*/

// 2. Essential Methods:
/*
- .set(x, y, z, order):
  - Sets the x, y, z angles and optionally the order.
  - Example: euler.set(Math.PI / 2, Math.PI / 4, 0, 'XYZ'); // Sets rotation and order.

- .copy(euler):
  - Copies the values from another Euler instance.
  - Example: euler2.copy(euler1); // euler2 has the same rotation as euler1.

- .clone():
  - Creates a new Euler instance with the same values.
  - Useful for creating independent copies of an object's rotation.

- .equals(euler):
  - Checks if two Euler instances have the same values.
  - Example: euler1.equals(euler2); // Returns true if both are equal.

- .reorder(newOrder):
  - Changes the order of rotations while preserving the orientation.
  - Example: euler.reorder('ZXY'); // Change rotation order to ZXY.
  - Warning: Can discard revolution information!

- .setFromQuaternion(q, order):
  - Converts a Quaternion into Euler angles with a specified order.
  - Useful when you have orientation data in quaternion form.
  - Example: euler.setFromQuaternion(quaternion, 'YXZ');

- .setFromRotationMatrix(m, order):
  - Converts a rotation matrix into Euler angles based on the order.
  - Useful for deriving rotations from matrices.
  - Example: euler.setFromRotationMatrix(matrix, 'XYZ');

- .setFromVector3(vector, order):
  - Sets x, y, z values from a Vector3 and optionally updates the order.
  - Example: euler.setFromVector3(new THREE.Vector3(1, 2, 3), 'ZXY');

- .toArray(array, offset):
  - Converts Euler to an array format [x, y, z, order].
  - Example: const arr = euler.toArray(); // [x, y, z, order]

- .fromArray(array):
  - Sets Euler values from an array [x, y, z, order].
  - Example: euler.fromArray([0, Math.PI / 2, Math.PI, 'YXZ']);
*/

// 3. Usage Example:
/*
const euler = new THREE.Euler(0, Math.PI / 4, Math.PI / 2, 'XYZ');
const vector = new THREE.Vector3(1, 0, 1);
vector.applyEuler(euler); // Applies the rotation to the vector
console.log(vector); // Vector3 after rotation
*/

// 4. Common Issues & Debugging Tips:
/*
- Unexpected rotation behavior? Check the `.order` property.
- Object looks distorted? Ensure that the Euler angles are set correctly.
- Applying rotations using quaternions? Convert with `.setFromQuaternion()`.
- Issues with combining rotations? Use `.reorder()` carefully to avoid losing rotation data.
- Rotating an object and seeing it behave oddly? Make sure you're using radians (not degrees).
*/

// End of Euler Notes
// ============================================================================
