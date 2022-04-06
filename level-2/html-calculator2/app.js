const adder = document.addition;
const subtracter = document.subtraction;
const multiplier = document.multiplication;

adder.addEventListener('submit', function(e){
    e.preventDefault();
    const num1 = parseInt(adder.num1.value);
    const num2 = parseInt(adder.num2.value);
    document.getElementById('added').textContent = `Answer = ${num1 + num2}`;
})

subtracter.addEventListener('submit', function(e){
    e.preventDefault();
    const num3 = parseInt(subtracter.num3.value);
    const num4 = parseInt(subtracter.num4.value);
    document.getElementById('subtracted').textContent = `Answer = ${num3 - num4}`;
})

multiplication.addEventListener('submit', function(e){
    e.preventDefault();
    const num5 = parseInt(multiplication.num5.value);
    const num6 = parseInt(multiplication.num6.value);
    document.getElementById('multiplied').textContent = `Answer = ${num5 * num6}`;
})