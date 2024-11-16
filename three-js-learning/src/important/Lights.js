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
