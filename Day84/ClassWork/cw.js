function handleClick(event) {
    const clickedElement = event.target
    clickedElement.style.color = 'red'
    console.log(`${clickedElement.id}`)
    console.log(`${clickedElement.innerText}`)
}