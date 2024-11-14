/*
 * === Textures in Three.js ===
 *
 * Textures: Images applied to 3D objects to enhance realism.
 * - Typically created in programs like Photoshop or GIMP.
 * - Used to simulate surfaces (e.g., wood, brick walls).
 *
 * Loading Textures:
 * - Use THREE.TextureLoader() to load textures.
 * - Apply the loaded texture to a material's "map" property.
 * Example:
 *
 * const loader = new THREE.TextureLoader();
 * const texture = loader.load('path/to/texture.jpg');
 * const material = new THREE.MeshBasicMaterial({ map: texture });
 */

/*
 * === Applying Multiple Textures to a Cube ===
 *
 * - BoxGeometry supports different textures for each of its 6 faces.
 * - Example:
 *
 * const loader = new THREE.TextureLoader();
 * const materials = [
 *   new THREE.MeshBasicMaterial({ map: loader.load('image1.jpg') }),
 *   new THREE.MeshBasicMaterial({ map: loader.load('image2.jpg') }),
 *   new THREE.MeshBasicMaterial({ map: loader.load('image3.jpg') }),
 *   new THREE.MeshBasicMaterial({ map: loader.load('image4.jpg') }),
 *   new THREE.MeshBasicMaterial({ map: loader.load('image5.jpg') }),
 *   new THREE.MeshBasicMaterial({ map: loader.load('image6.jpg') })
 * ];
 * const cube = new THREE.Mesh(geometry, materials);
 */

/*
 * === Texture Loading Basics ===
 *
 * - Textures load asynchronously, so they may appear transparent until fully loaded.
 * - Use a callback function to perform actions once a texture is loaded:
 *
 * loader.load('image.jpg', (texture) => {
 *   const material = new THREE.MeshBasicMaterial({ map: texture });
 *   scene.add(new THREE.Mesh(geometry, material));
 * });
 */

/*
 * === Loading Multiple Textures with LoadingManager ===
 *
 * - Use THREE.LoadingManager() to wait until all textures are loaded before continuing.
 * Example:
 *
 * const manager = new THREE.LoadingManager();
 * manager.onLoad = () => console.log('All textures loaded');
 * const loader = new THREE.TextureLoader(manager);
 *
 * - You can show a progress bar using the `onProgress` callback if needed.
 */

/*
 * === Memory Usage Optimization ===
 *
 * - Textures consume GPU memory based on their dimensions, not the file size.
 * - Formula: width * height * 4 * 1.33 bytes.
 * - Example: A 3024x3761 image uses around 60MB of GPU memory.
 * - For better performance, use smaller dimensions where possible.
 */

/*
 * === JPG vs PNG ===
 *
 * - JPG: Lossy compression, results in smaller file sizes.
 * - PNG: Lossless compression, supports transparency.
 * - Both use the same amount of GPU memory once loaded, despite differing file sizes.
 */

/*
 * === Filtering and Mipmaps ===
 *
 * - Mipmaps: Precomputed, downscaled versions of textures for efficient rendering at different distances.
 * - Texture filtering:
 *   - `texture.magFilter` (when scaling up):
 *     - THREE.NearestFilter: Creates a pixelated look.
 *     - THREE.LinearFilter: Smooth blending of pixels.
 *   - `texture.minFilter` (when scaling down):
 *     - Options include:
 *       - THREE.NearestMipmapNearestFilter
 *       - THREE.NearestMipmapLinearFilter
 *       - THREE.LinearMipmapNearestFilter
 *       - THREE.LinearMipmapLinearFilter (best quality)
 */

/*
 * === Texture Wrapping, Repeating, Offsetting, and Rotating ===
 *
 * - Wrapping Modes (`wrapS`, `wrapT`):
 *   - THREE.ClampToEdgeWrapping: Default mode.
 *   - THREE.RepeatWrapping: Repeats the texture.
 *   - THREE.MirroredRepeatWrapping: Repeats with a mirrored effect.
 * - Repeating:
 *   texture.repeat.set(4, 2); // 4 times horizontally, 2 times vertically
 * - Offsetting:
 *   texture.offset.set(0.5, 0.25); // Offset texture by 50% horizontally, 25% vertically
 * - Rotation:
 *   texture.center.set(0.5, 0.5); // Rotate around center
 *   texture.rotation = THREE.MathUtils.degToRad(45); // Rotate 45 degrees
 * - After changing wrapping modes, set `texture.needsUpdate = true`.
 */

/*
 * === GUI Controls Example (Using lil-gui) ===
 * - Allow users to adjust texture properties interactively.
 *
 * import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
 * const gui = new GUI();
 * gui.add(texture.repeat, 'x', 0, 5, 0.01).name('Repeat X');
 * gui.add(texture.offset, 'x', -2, 2, 0.01).name('Offset X');
 * gui.add(texture.center, 'x', 0, 1, 0.01).name('Center X');
 * gui.add(new DegRadHelper(texture, 'rotation'), 'value', -360, 360).name('Rotation');
 */

/*
 * === Conclusion ===
 *
 * - This is an introduction to textures in Three.js.
 * - Future topics include texture coordinates, texture atlases, and advanced maps (e.g., normal maps, bump maps).
 */
