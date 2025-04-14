const movableElement = document.getElementById("movableElement")
let x = 0
let y = 0

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            y -= 10
            break;
        case "ArrowDown":
            y += 10
            break
        case "ArrowLeft":
            x -= 10
            break
        case "ArrowRight":
            x += 10
            break
        default:
            return
    }

    movableElement.style.transform = `translate(${x}px, ${y}px)`;
})
