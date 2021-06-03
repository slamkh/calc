let histor = '';

function dis(val){
    document.getElementsByClassName(".display").value += val;

    addToHistory(val);
}

function solve (){
    let x = document.getElementsByClassName(".display").value,
        y = eval (x);
    document.getElementsByClassName(".display").value  = y;

    addToHistory('=' + y);  
}

function clr(){
    document.getElementsByClassName(".display").value = "";

    addToHistory(' ');
}

function addToHistory(value){
    histor += value;
    document.getElementById("history").innerText = histor;
}