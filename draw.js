function get_canvas_ctx() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = '24px serif';
  return ctx;
}

function draw_square(
  x, y, width, height, canvas_context) {
  canvas_context.strokeRect(x, y, width, height);
}

function draw_text(text, x, y, canvas_context) {
  canvas_context.fillText(text, x, y);
}

function draw_text_box(text, x, y, canvas_context = get_canvas_ctx()) {
  // https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics
  measured_text = canvas_context.measureText(text);

  https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#measuring_text_width
  width = measured_text.actualBoundingBoxRight + measured_text.actualBoundingBoxLeft;
  height = measured_text.actualBoundingBoxAscent + measured_text.actualBoundingBoxDescent;

  left = right = 5;
  width = left + width + right;
  above = below = 5;
  height = below + height + above;

  draw_text(text, x, y, canvas_context);
  draw_square(x - left, y - height / 2 - above, width, height, canvas_context);
}

draw_text_box("heyyyy", 50, 50);
draw_text_box("noo", 150, 50);
draw_text_box("wayyyyyyyy", 200, 50);
