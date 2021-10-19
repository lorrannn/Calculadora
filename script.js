let history = document.getElementById('history')
let panel = document.getElementById('insertingPanel')
let count = []





function addNumber(n) {
let maxVisor = panel.innerHTML.split("")
if(maxVisor.length == 8){return}

panel.innerHTML += n
}

function addComa(){
    panel.innerHTML += "."
}

function addOperator(operator){

    if(count[1] != undefined){return}
    

    let replacedComma = panel.innerHTML

    count.push(Number(replacedComma))
    count.push(operator)

        history.innerHTML += panel.innerHTML + ' ' + operator + ' '
        panel.innerHTML = "";
   console.log(count)
}

function percentage(){
    panel.innerHTML = panel.innerHTML/100
}

function cleanAll(){
history.innerHTML = "";
panel.innerHTML = ""
count = []
}

function cancelEntry(){
  panel.innerHTML = panel.innerHTML.slice(0, -1)
}

function calc(){ 
    number1 = count[0];
    number2 = count[2];
    operator = count[1];

    if(number2 === undefined){number2 = Number(panel.innerHTML)}
    
switch(operator){
case '+': return number1 + number2
case '-': return number1 - number2
case '*': return number1 * number2
case '/': return number1 / number2}
} 


function result(){
    
    if(calc() == undefined){return}
    history.innerHTML += ` ${panel.innerHTML} = ` 
    
    panel.innerHTML = calc()
    

    count = []
   

}
