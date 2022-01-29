let headerContainer = document.getElementById("header")

let h1 = document.createElement("h1")
let p = document.createElement('p')
let span = document.createElement('span')

h1.textContent = 'Javascript Made This!'
span.textContent = "Jackie "
let pText = document.createTextNode('wrote the Javascript')

span.style.color = "gold"



// same thing down here as above:

// const h1 = {
//     textContent: ''
// }

// h1.textContent = ""



p.appendChild(span)
p.appendChild(pText)

headerContainer.appendChild(h1)
headerContainer.appendChild(p)

 const messages = document.getElementsByClassName('message')
 const friendlyArr = ['hello there', 'hi, how are you?', 'SO POSITIVE!', 'that is great']

 for(let i = 0; i < messages.length; i++ ){
     messages[i].textContent = friendlyArr[i]
 }

let clearBtn = document.querySelector("#clear-button")
let messageContainer = document.querySelector('.messages')

clearBtn.addEventListener('click', function(){
    messageContainer.textContent = ''
})

let dropDown = document.querySelector("#theme-drop-down")

dropDown.addEventListener('change', function(){
    let color = event.target.value
    let leftColor, rightColor;
    if(color === "theme-one"){
        leftColor = '#DE8887'
        rightColor = "#ADD8E6"
    }else {
        leftColor = "red"
        rightColor = "black"
    }
    for(let i = 0; i < messages.length; i++ ){
        if(messages[i].className.includes('left')){
            messages[i].style.backgroundColor = leftColor
        }else {
            messages[i].style.backgroundColor = rightColor
        }
    } 
})

let messageForm = document.message
let messageInput = messageForm.input
console.log(messageInput.value)

let messageBtn = messageForm.msgBtn

let messageCount = 1

messageBtn.addEventListener('click', function(e){
    e.preventDefault()
    let div = document.createElement('div')
    if(messageCount % 2 !== 0){
        div.className = "message left"
        messageCount++
    }else{
        div.className = "message right"
        messageCount++
    }
    div.className = 'message left'
    div.textContent = messageInput.value
    messageContainer.appendChild(div)
})
