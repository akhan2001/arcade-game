const canvas = document.getElementById('airHockeyGameCanvas')
const ctx = canvas.getContext('2d')

const hockeyTableImage = new Image()
hockeyTableImage.onload = function () {
  ctx.drawImage(hockeyTableImage, 0, 0, canvas.width, canvas.height)
}
hockeyTableImage.src = 'assets/airhockey-table-copy.png'
