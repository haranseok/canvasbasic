class Box {
  // 생성자
  constructor(index, x, y, speed) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 100;
    this.height = 100;
    this.draw(); // 생성하는 순간 x, y 생성되고 draw 함수까지 호출
  }

  draw() {
    context.fillStyle = "rgba(0,0,0,0.5)";
    context.fillRect(this.x, this.y, 100, 100);
    context.fillStyle = "#fff";
    context.fillText(this.index, this.x + 30, this.y + 30); // 들어갈 텍스트 내용, 좌표;
  }
}
