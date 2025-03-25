const firstItem = document.querySelector('.item')
firstItem.style.backgroundColor = 'red'
const allItems = document.querySelectorAll('.item')
allItems.forEach((item) => {
    item.style.backgroundColor = 'green'
})