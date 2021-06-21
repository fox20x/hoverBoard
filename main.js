const board = document.querySelector('#board')
const touch_bar = document.querySelector('.touch_bar')
const SQUARE_COUNT = 300
//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purpure',]
const colors = [ "white" , 'silver', '#777']

let isMobile = false
const docWidth = document.documentElement.offsetWidth
alert(docWidth)

if (docWidth < 550) {
  isMobile = true
} else {
  isMobile = false
}

for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener( isMobile ? 'pointerover' : 'mouseover', (e) => { setColorMouse(e.target) })

  //square.addEventListener('mouseleave', (e) => { removeColor(e.target) })

  //square.addEventListener('pointerleave', (e) => { removeColor(e.target) })

  board.append(square)
}
board.addEventListener( isMobile ? 'pointerover' : 'mouseover', (e) => { 
  if (e.target.className == "square" ) { setColorMouse(e.target) }
})

let initPaddingBoard = () => {
  const marginLR = Math.floor((docWidth - board.offsetWidth) / 2)
  console.log(marginLR);

  board.style.maxWidth = ( 400 + marginLR * 2 ) + 'px'

  board.style.paddingLeft = marginLR + 'px'
  board.style.paddingRight = marginLR + 'px'

  touch_bar.style.marginLeft = marginLR + 'px'
  touch_bar.style.marginRight = marginLR + 'px'
}
initPaddingBoard()

function setColor(elem) {
  let color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 8px ${color}, 0 0 16px ${color}`
}
function setColorMouse(elem) {
  let color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 4px ${color}, 0 0 12px ${color}`
  setTimeout(() => { removeColor(elem) }, 1500)
}

function removeColor(elem) {
  elem.style.backgroundColor = "#111"
  elem.style.boxShadow = ''
}

function getRandomColor() {
  let index = Math.floor( Math.random() * colors.length )
  return colors[index]
}
