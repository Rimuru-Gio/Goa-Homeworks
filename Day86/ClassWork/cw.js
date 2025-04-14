function checkName() {
    var userName = document.getElementById('username').value;
    var myName = "გიორგი"
    switch (userName) {
        case myName:
            document.getElementById('result').textContent = myName
            break
        default:
            document.getElementById('result').textContent = "სახელი არ ემთხვევა"
            break
    }
}
