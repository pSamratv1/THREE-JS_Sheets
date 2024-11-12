// ============================================================================
// Understanding Three.js Materials: `MeshLambertMaterial` and `MeshPhongMaterial`
//
// Both of these materials simulate the interaction of light with surfaces,
// but they differ in how they handle lighting and shading. These materials
// are ideal for creating objects that react to scene lighting, with varying degrees of realism.

// ============================================================================
// MeshLambertMaterial
//
// What it does:
// - A material that uses the Lambertian reflectance model for non-shiny surfaces.
// - Provides a soft, matte appearance where light is diffused evenly.
// - Ideal for objects that do not require shiny or reflective surfaces (e.g., fabric, stone).
//
// How it works:
// - `MeshLambertMaterial` relies on ambient, directional, and point lights in the scene.
// - It calculates the color based on the angle between the light source and the surface normal.
// - Does not support specular highlights, so it appears dull and diffused.

// Key Properties (unique to MeshLambertMaterial):
/*
  - `color`: The base color of the material. Example: `color: 0x00ff00` for green.
  - `emissive`: Adds a glowing effect to the material (doesn't cast light but appears lit).
  - `emissiveIntensity`: Controls the brightness of the emissive color.
  - `emissiveMap`: A texture that controls which parts of the surface appear to glow.
  - `map`: A texture map applied to the surface.
  - `wireframe`: If set to `true`, renders the object as a wireframe.
  - `transparent`: Enables transparency (used with `opacity`).
  - `opacity`: Controls the transparency level.
*/

// Example Usage:
// const lambertMaterial = new THREE.MeshLambertMaterial({
//   color: 0x8a2be2,
//   emissive: 0x222222,
//   emissiveIntensity: 0.5,
// });

// Use Cases:
/*
  - Best for objects that need soft lighting effects, like cloth, terrain, or organic surfaces.
  - Efficient for scenes that require real-time rendering without complex reflections or highlights.
*/

// ============================================================================
// MeshPhongMaterial
//
// What it does:
// - A more advanced material that uses the Phong reflection model for shiny surfaces.
// - Supports specular highlights, which create a reflective, glossy effect.
// - Ideal for objects that need a shiny, polished look (e.g., metal, plastic, ceramics).
//
// How it works:
/*
  - `MeshPhongMaterial` calculates lighting using both diffuse and specular reflections.
  - It adds a specular highlight effect, which is the shiny spot seen on polished surfaces.
  - Works best with scene lights like point lights, spotlights, and directional lights.
*/

// Key Properties (unique to MeshPhongMaterial):
/*
  - `color`: The base color of the material.
  - `specular`: The color of the shiny highlights (default: white).
  - `shininess`: Controls the size and intensity of the specular highlights (higher values create smaller, sharper highlights).
  - `emissive`: Adds a glowing effect to the material.
  - `bumpMap`: A texture that creates simulated surface bumps.
  - `bumpScale`: Controls the intensity of the bump effect.
  - `normalMap`: Adds extra detail by simulating surface normals.
  - `reflectivity`: Controls the reflectiveness of the material (used with an environment map).
  - `envMap`: An environment map that adds reflections to the surface.
  - `wireframe`: If set to `true`, renders the object as a wireframe.
  - `opacity` and `transparent`: Controls transparency.
*/

// Example Usage:
// const phongMaterial = new THREE.MeshPhongMaterial({
//   color: 0xffd700,
//   specular: 0xffffff,
//   shininess: 100,
//   bumpMap: textureLoader.load("path/to/bump.jpg"),
//   normalMap: textureLoader.load("path/to/normal.jpg"),
// });

// Use Cases:
/*
  - Ideal for shiny objects like cars, jewelry, or any surfaces that need reflective highlights.
  - Suitable for scenes where you want more realistic lighting with highlights.
*/

// ============================================================================
// Common Properties & Methods (inherited from the base `Material` class):
// These properties apply to both `MeshLambertMaterial` and `MeshPhongMaterial`.
/*
  - `transparent`: Enables transparency (used with `opacity`).
  - `opacity`: Controls the transparency level (0 is fully transparent, 1 is fully opaque).
  - `visible`: Determines if the material is rendered.
  - `side`: Controls which sides of the geometry are rendered (`THREE.FrontSide`, `THREE.BackSide`, `THREE.DoubleSide`).
  - `depthTest`: Determines whether the material is affected by the depth buffer.
  - `depthWrite`: Controls whether the material writes to the depth buffer.
  - `blending`: Controls how the material blends with the background (`THREE.NormalBlending`, `THREE.AdditiveBlending`, etc.).
*/

// ============================================================================
// Common Issues & Debugging Tips:
/*
- Object not appearing shiny? Adjust `shininess` and `specular` properties for `MeshPhongMaterial`.
- Lights not affecting `MeshLambertMaterial`? Ensure you have ambient, directional, or point lights in your scene.
- Transparency not working? Make sure `transparent: true` is set and adjust `opacity`.
- Reflections not appearing on `MeshPhongMaterial`? Ensure `envMap` is properly loaded and assigned.
- High CPU/GPU usage? Use `MeshLambertMaterial` for non-reflective surfaces to optimize performance.
*/

// ============================================================================
