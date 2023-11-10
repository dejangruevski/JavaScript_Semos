//SWITCH

//1.
var monthNumber = 6
switch (monthNumber) {
    case 1:
        console.log("January!")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("Invalid month number. Please enter number between 1 and 12")
}

// 2.
var colour = 3
switch (colour) {
    case 1:
        console.log("Red")
        break
    case 2:
        console.log("Green")
        break
    case 3:
        console.log("Blue")
        break
    case 4:
        console.log("Yellow")
        break
    default:
        console.log("Invalid colour number. Please enter number between 1 and 4")
}

// 3.
var car = 5
switch (car) {
    case 1:
        console.log("BMW")
        break
    case 2:
        console.log("Opel")
        break
    case 3:
        console.log("Toyota")
        break
    case 4:
        console.log("Puegot")
        break
    default:
        console.log("Invalid car number. Please enter number between 1 and 4")
}

// 4.
var food = 2
switch (food) {
    case 1:
        console.log("Pizza")
        break
    case 2:
        console.log("Pasta")
        break
    case 3:
        console.log("Burger")
        break
    case 4:
        console.log("Salad")
        break
    default:
        console.log("Invalid food number. Please enter number between 1 and 4")
}

// 5.
var age = 10
switch (true) {
    case (1 <= age && age < 5):
        console.log("Baby")
        break
    case (5 <= age && age < 13):
        console.log("Kid")
        break
    case (13 <= age && age < 18):
        console.log("Teenager")
        break
    default:
        console.log("Invalid age number. Please enter number between 0 and 18")
}

// FUNCTIONS

// 1.
let celsiusToFarenheit = celsius => celsius * 9 / 5 + 32
console.log(celsiusToFarenheit(25))

// 2.
function farenheitToCelsius(farenheit) {
    let celsius = (farenheit - 32) * 5 / 9
    return celsius
}
console.log(farenheitToCelsius(25))

// 3.
let feetToMeter = feet => feet * 0.3048
console.log(feetToMeter(5))

// 4.
let isEven = number => number % 2 == 0
console.log(isEven(4))
console.log(isEven(5))

// 5.
function isEven2(number) {
    return number % 2 == 0
}
console.log(isEven2(50))
console.log(isEven2(37))
console.log(isEven2(26.4))

//ARRAYS

// 1.
var gradovi = ["Bitola", "Ohrid", "Malmo", "Lund", "Copenhagen"]
console.log(gradovi)
console.log(gradovi[3])

// 2.
var drzavi = ["Macedonia", "Sweden", "Bulgaria", "Denmark", "Spain", "Australia", "Iceland", "Japan", "USA", "Poland",]
console.log(drzavi)
console.log(drzavi[1])