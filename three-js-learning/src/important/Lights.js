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
