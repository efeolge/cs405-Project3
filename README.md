# cs405-Project3
# Solar System Simulation

This project simulates a basic solar system using a scene graph structure and realistic illumination effects. The implementation involves hierarchical transformations, advanced lighting calculations, and the addition of new elements to the scene.

---

## Objectives
- Implement a **scene graph** for hierarchical transformations.
- Enhance **fragment shaders** to include diffuse and specular lighting.
- Add a new celestial body (Mars) to the solar system simulation.

---

## Implementation Details

### Task 1: Scene Graph Implementation
The `draw` method in the `SceneNode` class was implemented to propagate transformations from parent to child nodes. This ensured:
- Proper hierarchical transformations by multiplying each node's transformation matrix with its parent's.
- Recursive traversal of the scene graph to render all nodes with their respective transformations.

### Task 2: Lighting Enhancements
The fragment shader was updated to include realistic lighting effects:
- **Diffuse Lighting**: Calculated using the dot product of the light direction and surface normal vectors.
- **Specular Lighting**: Computed using the Phong reflection model with a configurable shininess exponent.
- Combined with ambient lighting, these enhancements added depth and realism to the scene.

### Task 3: Adding Mars to the Scene
Mars was added as a child node of the Sun in the scene graph:
- **Transformations**: Translated by -6 units on the X-axis and scaled to `0.35`.
- **Texture**: Applied a Mars-specific texture from the provided URL.
- **Rotation**: Set to rotate 1.5 times faster than the Sun.

---

## Results
The solar system simulation successfully demonstrates:
- Hierarchical relationships between celestial bodies.
- Realistic illumination effects with dynamic lighting.
- Accurate transformations and textures for added elements (e.g., Mars).

---

## Conclusion
This project showcases the effective use of scene graphs and shader programming for interactive 3D graphics. By combining transformations, lighting, and hierarchical modeling, it delivers a visually appealing and functional simulation of a solar system.

