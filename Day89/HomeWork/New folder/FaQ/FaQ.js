function toggleFAQ(element) {
    const answer = element.nextElementSibling
    const arrow = element.querySelector('.arrow')

    answer.classList.toggle("show")
    arrow.classList.toggle("rotate")
}

let outLog = document.querySelector(".log-out")
if(localStorage.getItem('isLogged') == "true"){
    document.querySelector(".log-in").style.display = "none"
    outLog.style.display = "flex"
}else{
    document.querySelector(".log-in").style.display = "flex"
    outLog.style.display = "none"
}
outLog.addEventListener("click",function(){
    localStorage.setItem('isLogged','false')
    document.querySelector(".log-in").style.display = "flex"
    outLog.style.display = "none"
    alert("You Have Logged Out Of Your Account")
})
