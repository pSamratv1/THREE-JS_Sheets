// ===============================================================================================
// Understanding Three.js Materials: `MeshBasicMaterial`, `MeshMatcapMaterial`, `MeshDepthMaterial`
//
// In Three.js, materials define how the surfaces of objects are rendered.
// Each material type has unique properties and behaviors, suitable for different visual effects.

// ===============================================================================================
// MeshBasicMaterial
//
// What it does:
// - A simple material that displays a color or texture without any lighting calculations.
// - Best used for objects that should not react to light (e.g., 2D graphics, background elements).
//
// Key Properties (unique to MeshBasicMaterial):
/*
  - `color`: The color of the material (default: white). Example: `color: 0xff0000` for red.
  - `map`: A texture map applied to the surface (e.g., an image or pattern).
  - `wireframe`: If set to `true`, renders the object as a wireframe.
  - `opacity`: Controls the transparency (works if `transparent` is set to `true`).
  - `transparent`: Allows the material to be rendered with transparency.
*/

// Example Usage:
// const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

// Use Cases:
/*
  - For objects that don’t need to respond to lighting, like UI elements, sprites, or background objects.
  - Useful when you want a constant, unshaded color.
*/

// ===============================================================================================

// MeshMatcapMaterial
//
// What it does:
// - A material that uses a matcap (material capture) texture to simulate complex lighting effects.
// - The matcap texture contains pre-baked lighting information, allowing for realistic lighting without actual lights.
//
// Key Properties (unique to MeshMatcapMaterial):
/*
  - `matcap`: A texture that defines how light interacts with the material. Example: chrome or shiny surfaces.
  - `bumpMap`: A texture that adds surface detail through simulated bumps.
  - `bumpScale`: Controls the intensity of the bump effect (used with `bumpMap`).
  - `normalMap`: Adds extra detail by simulating surface normals.
*/

// Example Usage:
// const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: myMatcapTexture });

// Use Cases:
/*
  - Perfect for objects that need to appear glossy or metallic, like shiny sculptures or polished surfaces.
  - Great for quick, realistic lighting effects without adding actual lights to the scene.
*/

// ===============================================================================================

// MeshDepthMaterial
//
// What it does:
// - A material that renders objects based on their distance from the camera (depth).
// - Useful for special effects like shadows, fog, or depth-of-field.
//
// Key Properties (unique to MeshDepthMaterial):
/*
  - `wireframe`: Renders the object as a wireframe if set to `true`.
  - `opacity`: Controls the transparency (works if `transparent` is set to `true`).
*/

// Example Usage:
// const depthMaterial = new THREE.MeshDepthMaterial({ wireframe: false });

// Use Cases:
/*
  - For creating effects that depend on the depth of objects, like soft shadows or fog effects.
  - Often used in combination with post-processing shaders for depth-based effects.
*/

// ===============================================================================================

// Common Properties & Methods (from the Base `Material` Class):
//
// Three.js materials inherit properties and methods from the `Material` class. Here are some of the most important ones:

// Common Properties:
/*
  - `transparent`: Allows the material to be rendered with transparency.
  - `opacity`: Sets the transparency level (0 is fully transparent, 1 is fully opaque).
  - `visible`: Controls whether the material is visible.
  - `side`: Defines which sides of the geometry are rendered (`THREE.FrontSide`, `THREE.BackSide`, `THREE.DoubleSide`).
  - `depthTest`: Determines whether the material is affected by the depth buffer.
  - `depthWrite`: Controls whether the material writes to the depth buffer.
  - `alphaTest`: Discards pixels with alpha values lower than a specified threshold.
  - `blending`: Controls how the material blends with the scene (`THREE.NormalBlending`, `THREE.AdditiveBlending`, etc.).
*/

// Common Methods:
/*
  - `.copy(material)`: Copies the properties of another material to this one.
  - `.clone()`: Creates a new material with the same properties as the original.
  - `.dispose()`: Frees up memory by deleting the material when it’s no longer needed.
  - `.toJSON()`: Converts the material to a JSON object for serialization.
*/

// ===============================================================================================

// Common Issues & Debugging Tips:
/*
- Objects not appearing? Check if `opacity` is set to `0` or `visible` is set to `false`.
- Transparency not working? Ensure `transparent: true` is enabled.
- Matcap textures not showing correctly? Verify that the `matcap` texture is loaded properly and mapped correctly.
- For `MeshDepthMaterial`, ensure that `depthTest` and `depthWrite` are set correctly to achieve desired depth effects.
*/

// ===============================================================================================
