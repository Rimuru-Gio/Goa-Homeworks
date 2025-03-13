const myInfo = {
    firstName: "Giorgi",
    lastName: "Gloveli",
    age: 2,
    hobbies: ["Gym", "coding"]
}

const firstName = myInfo.firstName
const lastName = myInfo.lastName
const age = myInfo.age
const hobbies = myInfo.hobbies
myInfo["My Info"] = {
    firstName,
    lastName,
    age,
    hobbies
}
console.log(myInfo)