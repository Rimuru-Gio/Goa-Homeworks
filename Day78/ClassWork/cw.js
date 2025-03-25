const parentDiv = document.createElement('div')
parentDiv.style.display = 'flex'
parentDiv.style.flexDirection = 'column'
parentDiv.style.justifyContent = 'space-between'
parentDiv.style.height = '100px'

document.body.appendChild(parentDiv)
const childDiv1 = document.createElement('div')
childDiv1.style.height = '50px'
parentDiv.appendChild(childDiv1)

const childDiv2 = document.createElement('div')
childDiv2.style.height = '50px'
parentDiv.appendChild(childDiv2)

childDiv1.style.backgroundColor = 'blue'
childDiv2.style.backgroundColor = 'yellow'
