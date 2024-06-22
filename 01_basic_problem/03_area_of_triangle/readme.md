# Triangle Area Calculator

This repository contains a JavaScript program that calculates the area of a triangle given the lengths of its three sides using Heron's formula.

## Features

- Computes the area of a triangle given the lengths of its three sides.
- Utilizes Heron's formula for the calculation.

## Heron's Formula

The area of a triangle whose sides have lengths `a`, `b`, and `c` is given by:

\[ \text{Area} = \sqrt{s \cdot (s - a) \cdot (s - b) \cdot (s - c)} \]

where `s` is the semi-perimeter of the triangle:

\[ s = \frac{a + b + c}{2} \]

## Function definition

```javascript
function calculateTriangleArea(a, b, c) {
  // Calculate the semi-perimeter
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}
```

## Usage
```
// Calculate and display the area
const area = calculateTriangleArea(side1, side2, side3);
console.log("The area of the triangle is: " + area);
```

## Output
```
The area of the triangle is: 14.696938456699069
```