// let age = +prompt("Вкажіть свій вік:")

// if (age > 0 && age < 12) {
//     alert("Ви дитина!")
// }
// else if (age >= 12 && age <= 18) {
//     alert("Ви підліток!")
// }
// else if (age >= 19 && age <= 60) {
//     alert("Ви дорослий!")
// }
// else if (age >= 61) {
//     alert("Пенсія єбана")
// }

// let symbol = +prompt("Введіть число від 0 до 9")
// if (symbol < 0 || symbol > 9) {
//     do {
//         symbol = +prompt("Введіть число від 0 до 9")
//     } while (symbol < 0 || symbol > 9)
// } else {
//     switch (symbol) {
//         case 1:
//             alert("!")
//             break
//         case 2:
//             alert("@")
//             break
//         case 3:
//             alert("#")
//             break
//         case 4:
//             alert("$")
//             break
//         case 5:
//             alert("%")
//             break
//         case 6:
//             alert("^")
//             break
//         case 7:
//             alert("&")
//             break
//         case 8:
//             alert("*")
//             break
//         case 9:
//             alert("(")
//             break
//     }
// }

let num = +prompt(" Введіть трьох-значне число")
let num1 = num - (Math.trunc(num / 10) * 10)
document.write(num1)
document.write(`<br>`)
let num2 = (num - (Math.trunc(num / 100) * 100) - num1) / 10
document.write(num2)
document.write(`<br>`)
let num3 = (num - num1 - (num - (Math.trunc(num / 100) * 100) - num1)) / 100    
document.write(num3)

if (num1 == num2 && num2 == num3 && num1 == num3) {
    alert("Всі цифри у числі однакові")
} else {
    alert("Цифри у числі не однакові!")
}