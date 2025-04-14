function handleClick(event) {
    const clickedElement = event.target
    console.log(`Clicked element ID: ${clickedElement.id}`)
    const colorMap = {
        div1: 'red',
        div2: 'blue',
        div3: 'green',
        div4: 'yellow'
    }
    clickedElement.style.backgroundColor = colorMap[clickedElement.id]
    const paragraph = clickedElement.querySelector('p')
    paragraph.textContent = colorMap[clickedElement.id]
}
