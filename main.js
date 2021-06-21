const board = document.querySelector('#board')
const SQUARE_COUNT = 460
//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purpure',]
const colors = [ "white" , 'silver', '333']

for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseleave', (e) => {
    removeColor(e.target)
  })

  board.append(square)
}

board.addEventListener('mouseover', (e) => {
  if (e.target.className != 'square') return
  setColor(e.target)
})


function setColor(elem) {
  let color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 4px ${color}, 0 0 12px ${color}`
}

function removeColor(elem) {
  elem.style.backgroundColor = "#111"
  elem.style.boxShadow = ''
}

function getRandomColor() {
  let index = Math.floor( Math.random() * colors.length )
  return colors[index]
}