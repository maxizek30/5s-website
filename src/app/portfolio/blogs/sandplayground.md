# Sand Simulation with Fan Influence in a Three.js Environment

## Introduction

This project was developed for my Computer Science Graphics class. The idea for this project came to be because I knew I wanted to do something with sand dunes, having just seen Dune Part 2 and absolutely loved it. Using Three.js, I built a simulation that models the behavior of sand particles, dynamically updating their positions based on gravity and the influence of a fan.

## Graphics Technique

### Sand Representation

The sand is represented using a 3D array, where each element indicates the presence (1) or absence (0) of a sand particle. This array serves as a discrete model of the sandbox. The array is defined as:

sandArray[x][z][y]

Here, `x`, `y`, and `z` represent the three dimensions of the sandbox. Each coordinate in the array corresponds to a position in the 3D space of the simulation.

### Gravity Simulation

Gravity is simulated by iterating through the sand array from the bottom to the top, ensuring that sand particles fall downwards if there is empty space below them. The algorithm considers both vertical and diagonal movements to simulate a more natural falling pattern.

### Fan Influence

The fan can blow sand particles in a specified direction (front, right, back, left). The fan’s influence is simulated by applying a force in the horizontal direction, both directly and diagonally.

### Mathematical Operations

The position update is calculated by adding the direction vector to the current position. Bounds checking ensures that the new position is within the limits of the sandbox.

## Sand Dynamics Algorithm

The `updateSandDynamics` function is responsible for simulating both gravity and the fan’s influence on the sand particles. The algorithm iterates through the sand array, applying gravity to make the sand particles fall and the fan’s influence to blow them in a specified direction.

## Future Improvements

Several enhancements can be made to improve the realism of the simulation, such as refining the sand pile-up algorithm or incorporating wind dynamics to better simulate the effect of the fan.

## Conclusion

This sand simulation algorithm effectively demonstrates the use of Three.js for dynamic 3D graphics in the web browser. By integrating gravity and fan influence, it creates a realistic simulation of sand behavior, with potential for future improvements.
