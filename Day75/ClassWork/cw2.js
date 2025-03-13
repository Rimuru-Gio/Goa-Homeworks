const carInfo = {
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "black",
    isElectric: true,}

    function CarFullInfo(car) {
        return `Car Information:
    Brand: ${car.brand}
    Model: ${car.model}
    Year: ${car.year}
    Color: ${car.color}
    Electric: ${car.isElectric ? "Yes" : "No"}'
    }

console.log(CarFullInfo(carInfo));