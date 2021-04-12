interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}

// Note that this pattern of setting defaults for unspecified values is so common that JavaScript has syntax to support it.
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos);
  //                               ^ = var xPos: number
  console.log('y coordinate at', yPos);
  //                               ^ = var yPos: number
  // ...
}
const shape = 'triangle';
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
