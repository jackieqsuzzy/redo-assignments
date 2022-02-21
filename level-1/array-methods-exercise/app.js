
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//1. removed the last item off the vegetable array:

vegetables.pop()

// //2. revmoed the first item off the fruits array

fruit.shift()

// // //3. find the index of orange:

var indexFruit = fruit.indexOf("orange")
// // console.log(indexFruit)

// // 4. Add the number 2 (which is the index of orange) to the end of the fruit array

var adding2 = fruit.push("1")
// // console.log(fruit)

// //5. find the length of the vegtable array

var lengthVeg = vegetables.length
// // console.log(lengthVeg)

// //6. add that number to the end of the vegatables array

var addingNumVeg = vegetables.push("3")

// // console.log(vegetables)

// // 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)
// // // console.log(food)

// // 8. Remove 2 elements from your new array starting at index 4 with one method.

// food.splice(4,2)
food.splice(4,2)
// // console.log(food)

// // 9. Reverse your array.

// food.reverse()
food.reverse()
// // console.log(food)

// // 10. Turn the array into a string and return it.

var stringArr = food.toString()

console.log(stringArr)



