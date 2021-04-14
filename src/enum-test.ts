enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

enum ColorDefault {
  RED,
  GREEN,
  BLUE,
}

// 리버스 맵핑이 되었다.
console.log(ColorDefault[ColorDefault.RED]);
// 문자열로 초기화하는경우 리버스 맵핑이 되지 않는다.
// console.log(Color[Color.RED]);
