// 1. Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0; i < 10; i++){
// console.log(i)
// }

// 2. Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i > 0; i--){
//     console.log(i)
// }

// 3. Write a for loop that prints these fruits to the console.

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
// const item is the same as let i = 0
//  you us "of" to go a array 
//  you us "in" to go over an object
// for (const [index, item] of fruit.entries()){
//     console.log(index,item)
// }

// fruit.forEach((item, index) => {
//     console.log(index,item)
// })

// Bronze Metal

// 1. Write a for loop that will push the numbers 0 through 9 to an array.

// var numbers = []

// for (let i = 1; i <= 9; i++){
//     numbers.push(i)
// }

// console.log(numbers)




// // 2. Write a for loop that prints to the console only even numbers 0 through 100.

// for (let i = 0; i <= 101; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// 3. Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]



// var everyOther = []

// for ( var i = 0; i < fruit.length; i += 2){
//     everyOther.push(fruit[i])
// }

// console.log(everyOther)


// Silver Metal 

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// // 1. Write a loop that will print out all the names of the people of the people array

// for (var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }

// how to put the names into an array: 

// var names = []

// for (var i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
// }
// console.log(names)

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// var names = []
// var occupations = []

// for (var i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }

// console.log(names)
// console.log(occupations)

// Write a loop that pushes every other name to an array starting with the first person, 
// in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

var everyOtherName = []
var everyOtherOcc = []

for (var i = 0; i < peopleArray.length; i++){
    if (i % 2 === 0){
        everyOtherName.push(peopleArray[i].name)
    }
}
console.log(everyOtherName)

for (var i = 1; i < peopleArray.length; i++){
    if(i % 2 === 1){
        everyOtherOcc.push(peopleArray[i].occupation)
    }
}

console.log(everyOtherOcc)