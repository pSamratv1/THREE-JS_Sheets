// ===== Light =====

// Abstract base class for all types of lights.
// Not intended to be instantiated directly; use derived classes instead.
// Examples of derived classes include AmbientLight, DirectionalLight, etc.

// Constructor:
// Light(color : Integer, intensity : Float)
// - color (optional): Hexadecimal color of the light, default is 0xffffff (white).
// - intensity (optional): Numeric value representing light strength, default is 1.

// Properties:
// .color : Color
// - Defines the color of the light.
// - Defaults to white if not specified.

// .intensity : Float
// - Controls the strength of the light. Varies based on light type.

// .isLight : Boolean
// - Read-only flag to check if an object is of type Light.

// Methods:
// .dispose()
// - Abstract method for disposing GPU resources, implemented by subclasses.

// .copy(source : Light) : this
// - Copies color and intensity from another Light object.

// .toJSON(meta : Object) : Object
// - Converts the Light instance to a three.js JSON Object/Scene format.

// ===== AmbientLight =====

// Provides global illumination affecting all objects equally.
// No shadows can be cast because it lacks a direction.

// Constructor:
// AmbientLight(color : Integer, intensity : Float)
// - color (optional): Hexadecimal color of the light, default is 0xffffff.
// - intensity (optional): Strength of the light, default is 1.

// Properties:
// Inherits properties from Light.

// .isAmbientLight : Boolean
// - Read-only flag to check if an object is an AmbientLight.

// ===== DirectionalLight =====

// Emits light in a specific direction, simulating sunlight.
// Rays are parallel, creating uniform lighting like the sun.
// Can cast shadows (expensive, requires tweaking).

// Constructor:
// DirectionalLight(color : Integer, intensity : Float)
// - color (optional): Hexadecimal color, default is 0xffffff.
// - intensity (optional): Light strength, default is 1.

// Properties:
// .castShadow : Boolean
// - Enables dynamic shadows if set to true (default is false).

// .isDirectionalLight : Boolean
// - Read-only flag to check if an object is a DirectionalLight.

// .position : Vector3
// - By default, (0, 1, 0) so it shines top-down.

// .target : Object3D
// - The light points from its position to the target position (default is (0, 0, 0)).
// - To change the target, add it to the scene (scene.add(light.target)).
// - Can track another object’s position.

// .shadow : DirectionalLightShadow
// - Used to calculate shadows.

// Methods:
// .dispose()
// - Frees up GPU resources when no longer needed.

// .copy(source : DirectionalLight) : this
// - Copies all properties from the source light.

// ===== PointLight =====

// Emits light in all directions from a single point (like a bare bulb).
// Can cast shadows, but it's computationally expensive.

// Constructor:
// PointLight(color : Integer, intensity : Float, distance : Number, decay : Float)
// - color (optional): Light color, default is 0xffffff.
// - intensity (optional): Light strength, default is 1.
// - distance: Maximum range, default is 0 (no limit).
// - decay: Light decay over distance, default is 2.

// Properties:
// .castShadow : Boolean
// - Enables shadows if set to true (default is false).

// .distance : Float
// - Controls light falloff. If set to 0, attenuation follows the inverse-square law.

// .decay : Float
// - Light diminishes over distance. Default is 2 for physically correct rendering.

// .power : Float
// - Measured in lumens (lm). Adjusting power also affects intensity.

// Methods:
// .dispose()
// - Clean up GPU resources when not in use.

// .copy(source : PointLight) : this
// - Copies all properties from another PointLight.

// ===== SpotLight =====

// Emits light in a cone shape from a single point in a specific direction.
// Can cast shadows and be used for focused lighting (like a flashlight).

// Constructor:
// SpotLight(color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float)
// - color (optional): Light color, default is 0xffffff.
// - intensity (optional): Strength, default is 1.
// - distance: Maximum range, default is 0 (no limit).
// - angle: Cone spread angle, max is Math.PI/2.
// - penumbra: Soft edge (0-1), default is 0.
// - decay: Light decay over distance, default is 2.

// Properties:
// .angle : Float
// - Cone angle of the spotlight. Default is Math.PI/3.

// .penumbra : Float
// - Softness of spotlight edges, default is 0.

// .target : Object3D
// - Like DirectionalLight, points to a target.
// - Update target using scene.add(light.target).

// .castShadow : Boolean
// - Allows shadows if set to true (default is false).

// .map : Texture
// - Optional texture for modulating light color (disabled if .castShadow is false).

// Methods:
// .dispose()
// - Frees GPU resources.

// .copy(source : SpotLight) : this
// - Copies properties from another SpotLight.

// ===== LightShadow =====

// Base class for all shadow-related calculations.
// Not instantiated directly, used by shadow-casting lights like DirectionalLight and SpotLight.

// Constructor:
// LightShadow(camera : Camera)
// - camera: Used to capture depth data for shadows.

// Properties:
// .autoUpdate : Boolean
// - Enables dynamic shadow updates. Set to false for static scenes.

// .bias : Float
// - Shadow map bias to reduce artifacts. Default is 0 (tweak to fix shadow acne).

// .mapSize : Vector2
// - Resolution of the shadow map. Higher values increase quality but cost more processing power.

// .radius : Float
// - Controls shadow edge blurring (not effective with PCFSoftShadowMap).

// Methods:
// .getFrameExtents() : Vector2
// - Used internally for extending shadow map viewports.

// .updateMatrices(light : Light)
// - Updates shadow matrices based on light position and orientation.

// .dispose()
// - Releases GPU resources when the shadow is no longer needed.
