
let a = 10, b = 5, c = 3, d = 2
let numbers = [a, b, c, d]
let operators = ["+", "-", "*", "/"]

console.log("1) ყველა შესაძლო მათემატიკური ოპერაცია:")
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
            console.log(`${numbers[i]} + ${numbers[j]} = ${numbers[i] + numbers[j]}`)
            console.log(`${numbers[i]} - ${numbers[j]} = ${numbers[i] - numbers[j]}`)
            console.log(`${numbers[i]} * ${numbers[j]} = ${numbers[i] * numbers[j]}`)
            console.log(`${numbers[i]} / ${numbers[j]} = ${numbers[i] / numbers[j]}`)
        }
    }
}

let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"))
let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"))

console.log("\n2) მომხმარებლის რიცხვებზე მოქმედებები:")
console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} - ${num2} = ${num1 - num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`${num1} / ${num2} = ${num1 / num2}`)

let firstName = prompt("შეიყვანეთ თქვენი სახელი:")
let lastName = prompt("შეიყვანეთ თქვენი გვარი:")
console.log(`\n3) მომხმარებლის სახელი: ${firstName}, გვარი: ${lastName}`)

let comp1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"))
let comp2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"))
console.log(`\n4) შედარება: ${comp1} ${comp1 > comp2 ? "მეტია" : comp1 < comp2 ? "ნაკლებია" : "ტოლია"} ${comp2}`)

let x = 15, y = 20;
console.log(`\n5) ${x} და ${y} ${x === y ? "ტოლია" : "არ არის ტოლი"}`)

let checkNum = parseFloat(prompt("შეიყვანეთ რიცხვი (შეამოწმებთ 50-ზე ნაკლებია თუ არა):"))
console.log(`\n6) რიცხვი 50-ზე ${checkNum < 50 ? "ნაკლებია" : "მეტია ან ტოლია"}`)

let sumNum1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"))
let sumNum2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"))
console.log(`\n7) ორი რიცხვის ჯამი 100-ზე ${sumNum1 + sumNum2 > 100 ? "მეტია" : "არ არის მეტი"}`)

let tenCheck = parseFloat(prompt("შეიყვანეთ რიცხვი:"))
console.log(`\n8) რიცხვი 10-ზე ${tenCheck >= 10 ? "მეტია ან ტოლია" : "ნაკლებია"}`)


let fixedNum = 25
let userNum = parseFloat(prompt("შეიყვანეთ რიცხვი შესადარებლად:"))
console.log(`\n9) შეყვანილი რიცხვი ${userNum} არის ${userNum <= fixedNum ? "ნაკლები ან ტოლი" : "მეტი"} ${fixedNum}-ზე`)

let myName = "გიორგი"
let userName = prompt("შეიყვანეთ თქვენი სახელი:")
console.log(`\n10) სახელი ${userName === myName ? "ემთხვევა" : "არ ემთხვევა"}`)

let password1 = prompt("შეიყვანეთ პაროლი:")
let password2 = prompt("გაიმეორეთ პაროლი:")
console.log(`\n11) პაროლები ${password1 === password2 ? "ემთხვევა" : "არ ემთხვევა"}`)