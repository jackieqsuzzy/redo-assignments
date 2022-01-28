var changeColor = document.getElementById("colorsquare")
changeColor.addEventListener("mouseover", function () {
    changeColor.style.backgroundColor = "blue"
})

changeColor.addEventListener("mousedown", function () {
    changeColor.style.backgroundColor = "yellow"
})

changeColor.addEventListener("mouseleave", function () {
    changeColor.style.backgroundColor = "red"
})

changeColor.addEventListener("ondblclick", function (){
    squareIt.style.backgroundColor = "green"
})

window.addEventListener("wheel", function (){
    squareIt.style.backgroundColor = "orange"
})