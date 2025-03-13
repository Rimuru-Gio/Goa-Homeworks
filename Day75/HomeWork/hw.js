
const car = {
    company: "Toyota",
    model: "Corolla",
    milage: 50000,
    year: 2018,
    condition: "good",
    checkCondition: function(condition) {
    console.log(`Car is in ${condition} condition.`)
    }
}
car.checkCondition(car.condition);
