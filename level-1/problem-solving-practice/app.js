//Write a function that takes an array of numbers and 
// returns the largest (without using Math.max())

// let numsArr = [3, 5, 2, 8, 1]
// let num = 0

// numsArr.forEach((element) => {
//     if (num < element){
//         num = element
//     }
// })

// console.log(`the largest number is the array is : ${num}`)

//Write a function that takes an array of words and a 
// character and returns each word that has that character present.

// var array = ["#3", "$$$", "C%4!", "Hey!"]

// function findCharacter (item) {
//     var empArr = []
//     for (var i = 0; i < array.length; i++){
//         if (array[i].includes("!")){
//             empArr.push(array[i])
//         }
//     }
//     console.log(empArr)
// }

// findCharacter(array)


// short hand methods of a for loop :

// var array = ["#3", "$$$", "C%4!", "Hey!"]

// function findCharacter (item) {
//     var empArr = []
//     for (const [index, item] of array.entries()){
//          console.log(index, item)
//         if (item.includes("!")){
//             empArr.push(item)
//         }
//     }
//     console.log(empArr)
// }

// findCharacter(array)
// console.log(findCharacter(array))

// const findCharacter = array.filter( (item) => {
//     item.includes("!") ? empArr.push(item) : "Does not include !"
// })
// console.log(empArr)

// Write a function that takes a num1 and num2 
// and returns whether num1 is divisible by num2.


// function divisibleNum(num1, num2){
//     if (num1 % num2 === 0){
//         return true 
//     } else return false
// }
// console.log((divisibleNum)(17, 5))
