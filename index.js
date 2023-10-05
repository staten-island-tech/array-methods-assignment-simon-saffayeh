const lot = []

const car1 = { brand: "Toyota", color: "blue", year: 2022, mileage: 15000, features: ["GPS navigation", "Bluetooth connectivity", "Backup camera"] };
const car2 = { brand: "Honda", color: "red", year: 2021, mileage: 18000, features: ["Sunroof", "Lane departure warning", "Keyless entry"] };
const car3 = { brand: "Chevrolet", color: "silver", year: 2019, mileage: 22000, features: ["Apple CarPlay", "Android Auto", "Heated seats"] };
const car4 = { brand: "BMW", color: "black", year: 2020, mileage: 20000, features: ["Leather seats", "Adaptive cruise control", "Premium sound system"] };
const car5 = { brand: "Audi", color: "white", year: 2023, mileage: 5000, features: ["Panoramic sunroof", "Navigation system", "Parking assist"] };


lot.push(car1)
lot.push(car2)
lot.push(car3)
lot.push(car4)
lot.push(car5)
function old(miles){
    return miles == "Sunroof"
}
lot.forEach(i => {
    console.log(i.features.filter(old))
    console.log(i.brand)
    i.features.forEach(j => {
        console.log(j)
    });
});

