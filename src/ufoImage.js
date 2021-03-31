var ufoXCenter = 100
var ufoYCenter = 100

const ufo = (canvas, context) => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawUFOTop(context)
  drawUFOBody(context)
  drawUFOlights(context)
}

function drawUFOBody(context) {
  var ufoColour = context.createLinearGradient(0, 0, 150, 150)
  ufoColour.addColorStop(0, 'grey')
  ufoColour.addColorStop(1, 'silver')

  context.beginPath();
  context.ellipse(ufoXCenter, ufoYCenter, 30, 100, Math.PI * 9 / 20, 0, 2 * Math.PI)
  context.fillStyle = ufoColour
  context.fill()
  context.strokeStyle = 'gray'
  context.stroke()

  context.beginPath()
  context.ellipse(ufoXCenter, ufoYCenter, 6, 20, Math.PI * 9 / 20, 0, 2 * Math.PI)
  context.fillStyle = '#505050'
  context.fill()
}

function drawUFOTop(context) {
  context.beginPath()
  context.arc(ufoXCenter, ufoYCenter, 50, 39 / 20 * Math.PI, 19 / 20 * Math.PI, true)
  context.fillStyle = 'darkgrey'
  context.fill()
  context.strokeStyle = 'gray'
  context.stroke()
}

function drawUFOlights(context) {
  drawUFOlight(context, -80, 14)
  drawUFOlight(context, 80, -14)
  drawUFOlight(context, -27, 21)
  drawUFOlight(context, 35, 12)
  drawUFOlight(context, 27, -21)
  drawUFOlight(context, -35, -10)
}

function drawUFOlight(context, XShift, YShift) {
  context.beginPath()
  context.ellipse(ufoXCenter + XShift, ufoYCenter + YShift, 5, 10, Math.PI * 9 / 20, 0, 2 * Math.PI)
  context.fillStyle = 'yellow'
  context.fill()
}

export default ufo