// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.

// const readlineSync = require("readline-sync");
// const options = ['Put hand in hole', 'Find the Key', 'Open the door'];
// const action = readlineSync.keyInSelect(['Put hand in hole', 'Find the Key', 'Open the door'], "what you like to do?");

// console.log(options[action]) 

const ask = require("readline-sync");
let isAlive = true
let hasKey = false

while(isAlive){
    const action = ask.keyIn(`What would you like to do?

[p] Put hand in hole, 
[f] Find the key, 
[o] Open the door, 
[q] quit `

, {limit: 'pfoq'});


if (action === 'p'){
    console.log(`
    
    You chose to put your hand in a hole
    
    `)
    console.log('looks like you died')
    isAlive = false
}else if(action === 'f'){
    console.log(`

    You chose to find the key

    `)
    console.log("you chose to find the key")
    console.log("Congragulations you found it here")
    hasKey = true 

}else if(action === 'o'){
    console.log(`

    You chose to open the door
    `)
    if(hasKey){
        console.log("Congragulations you opened the door")
        isAlive = false 
    }else {
        console.log("You need to find the key because the door is locked")
    }
}else {
    console.log(`

    you quit, Thanks for playing! ;)

    `)
    isAlive = false
}

    // isAlive = false - the only thing you need to do to stop a while loop is for it equal false

}




