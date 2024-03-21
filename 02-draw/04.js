const canvas = document.getElementById("canvas");

const draw = () => {
  // canvas 태그를 찾기 전에 load되는 경우 getContext를 찾을 수 없다고 나옴..
  const ctx = canvas.getContext("2d");
  if (ctx.getContext) {
  }
};
