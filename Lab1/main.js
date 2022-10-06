
const sumaWynik = document.querySelector('#suma')
const sredniaWynik = document.querySelector('#srednia')
const minWynik = document.querySelector('#min')
const maxWynik = document.querySelector('#max')

onload = function(){
    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const num3 = document.querySelector('#num3')

    num1.oninput = function(){
        sumaWynik.innerHTML ="Suma: "+(parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value))
        sredniaWynik.innerHTML ="Średnia: "+(parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value))/3
        minWynik.innerHTML ="Min: "+Math.min(parseInt(num1.value), parseInt(num2.value), parseInt(num3.value))
        maxWynik.innerHTML ="Max: "+Math.max(parseInt(num1.value), parseInt(num2.value), parseInt(num3.value))
    }
    num2.oninput = function(){
        num2.oninput = num1.oninput
    }
    num3.oninput = function(){
        num3.oninput = num1.oninput
    }
}