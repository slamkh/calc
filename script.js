let histor = '';

function dis(val){
    document.getElementById('display').value += val;

    addToHistory(val);
}

function solve(){
    let x = document.getElementById('display').value;
    let y = eval(x);
    document.getElementById('display').value  = y;

    addToHistory('=' + y); 
}

function clr(){
    document.getElementById('display').value = '';

    addToHistory(' ');
}

function addToHistory(value){
    histor += value;
    document.getElementById('history').innerText = histor;
}
