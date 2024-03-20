class Panel {
  constructor() {
    this.draw();
  }

  draw() {
    context.fillStyle = "#fff000";
    // 만약, 정사각형의 300, 300 짜리를 그린다고 하면 canvas가 600*400이고 x가 150이어야하고, y는 50이라고...

    // center를 중심으로 panel width의 절반만큼 땡겨주면 가운데 정렬이 된다.
    // x, y, width, height
    context.fillRect(oX - 150, oY - 150, 300, 300);
  }
}
