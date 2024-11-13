// ============================================================================
// Understanding Three.js Materials: `MeshStandardMaterial` and `MeshPhysicalMaterial`
//
// These two materials are among the most advanced in Three.js, supporting
// Physically-Based Rendering (PBR). This makes them ideal for realistic and
// complex lighting environments where accurate reflections, roughness, and metallic properties are needed.

// ============================================================================
// MeshStandardMaterial
//
// What it does:
// - A versatile, physically-based material that offers realistic surface shading.
// - Supports metallic and roughness properties, making it suitable for a wide range of surfaces.
// - Ideal for creating realistic materials like metal, plastic, rubber, and wood.
//
// How it works:
// - `MeshStandardMaterial` uses the PBR (Physically-Based Rendering) approach, which simulates light behavior closer to reality.
// - Calculates reflections, light scattering, and roughness based on physical properties.
// - Reacts to environmental lighting, including HDR environments and reflections.

// Key Properties (unique to MeshStandardMaterial):
/*
  - `color`: The base color of the material.
  - `metalness`: Determines how metallic the surface is (0 = non-metal, 1 = fully metallic).
  - `roughness`: Controls the smoothness of the surface (0 = perfectly smooth, 1 = very rough).
  - `map`: A texture map applied to the surface.
  - `metalnessMap`: A texture that controls the metallic areas of the surface.
  - `roughnessMap`: A texture that controls the roughness areas of the surface.
  - `normalMap`: Adds extra detail by simulating surface normals.
  - `bumpMap`: A texture that creates simulated surface bumps.
  - `envMap`: An environment map for adding reflections.
  - `aoMap`: Ambient Occlusion map that simulates shadows for added depth.
  - `emissive`: Adds a glowing effect to the material (doesn't emit light but appears lit).
  - `emissiveIntensity`: Controls the brightness of the emissive color.
  - `transparent` & `opacity`: Controls transparency.
*/

// Example Usage:
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x0077ff,
  metalness: 0.7,
  roughness: 0.4,
  envMap: environmentTexture,
  normalMap: textureLoader.load("textures/normalMap.jpg"),
});

// Use Cases:
/*
  - Ideal for surfaces that need realistic lighting, like metals, ceramics, and plastics.
  - Efficient for rendering realistic scenes with accurate reflections and lighting.
*/

// ============================================================================
// MeshPhysicalMaterial
//
// What it does:
// - Extends `MeshStandardMaterial` by adding additional PBR features for even more realism.
// - Adds support for advanced effects like clear coats, transmission, and sheen.
// - Best used for highly realistic scenes where surfaces like glass, water, and car paint are required.
//
// How it works:
// - `MeshPhysicalMaterial` builds on `MeshStandardMaterial` by providing additional controls for more complex materials.
// - Allows for effects like clear coats (for shiny surfaces), refraction (for glass), and sheen (for fabrics).
// - Useful for photorealistic rendering where subtle surface properties are needed.

// Key Properties (unique to MeshPhysicalMaterial):
/*
  - `clearcoat`: Adds a clear coat layer on top of the material (like car paint).
  - `clearcoatRoughness`: Controls the roughness of the clear coat layer.
  - `clearcoatNormalMap`: A texture that affects the normal of the clear coat layer.
  - `sheen`: Adds a soft, fabric-like sheen effect to the surface.
  - `sheenColor`: The color of the sheen effect.
  - `transmission`: Controls how much light passes through (used for glass-like surfaces).
  - `thickness`: Controls the thickness of transmissive materials.
  - `reflectivity`: Adjusts how reflective the material is.
*/

// Example Usage:
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.1,
  clearcoat: 0.9,
  clearcoatRoughness: 0.05,
  transmission: 0.8,
  thickness: 1.5,
  envMap: environmentTexture,
});

// Use Cases:
/*
  - Perfect for simulating glass, water, polished surfaces, and fabrics.
  - Recommended for scenes where ultra-realistic rendering is required.
*/

// ============================================================================
// Common Properties & Methods (inherited from the base `Material` class):
// These properties apply to both `MeshStandardMaterial` and `MeshPhysicalMaterial`.
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
- Object not appearing shiny or reflective? Adjust `metalness`, `roughness`, and `envMap`.
- Glass not looking right? Check `transmission`, `thickness`, and environment lighting for `MeshPhysicalMaterial`.
- Using clear coats? Make sure `clearcoat` and `clearcoatRoughness` are set correctly.
- Reflections not showing? Ensure `envMap` is correctly loaded and assigned.
- High GPU usage? Use `MeshStandardMaterial` instead of `MeshPhysicalMaterial` for better performance if advanced effects aren't needed.
*/

// ============================================================================
