function checkWords() {
    const word1 = document.getElementById('word1').value
    const word2 = document.getElementById('word2').value
    if (word1 === word2) {
        console.log("The operation was successful")
    } else {
        console.log("The values should be equal and not blank")
    }
}
