let canvas; // 定義全域變數以儲存畫布

function setup() {
  // 設置畫布寬高為視窗的 80%
  let canvasWidth = windowWidth * 0.8;
  let canvasHeight = windowHeight * 0.8;
  canvas = createCanvas(canvasWidth, canvasHeight); // 儲存畫布到變數
  // 將畫布置中
  let x = (windowWidth - canvasWidth) / 2;
  let y = (windowHeight - canvasHeight) / 2;
  canvas.position(x, y); // 使用變數 canvas
  noLoop(); // 停止 draw 的重複執行
}

function draw() {
  background('#E39695'); // 設置背景顏色
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布
  setup();
}
