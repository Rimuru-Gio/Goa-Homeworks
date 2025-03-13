
let user = {
    firstName: prompt("ჩაწერეთ თქვენი სახელი:"),
    lastName: prompt("ჩაწერეთ თქვენი გვარი:"),
    age: prompt("ჩაწერეთ თქვენი ასაკი:"),
    hobby: prompt("ჩაწერეთ თქვენი ჰობი:"),
}
console.log(`Welcome` + firstName)

let name = { name: "Nino", age: 30 }
console.log(Object.keys(user))


for (let key in user) {
    console.log(key + " is " + user[key])
}