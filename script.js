'use strict'

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPERATORS = ['+','-','*','/','%'];
const OTHERS = ['.']
const ACCEPT_KEYS = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','.'] ;
const result = document.getElementById("res");

function res() {
  
  result.value = eval(result.value);
}


function clean() {
  result.value = "0";
}

function put(n) {
  result.value = (result.value === "0") ? "" : result.value;

  result.value = result.value + n;
}

function back() {
  if (result.value.length == 1) {
    clean();
  } else {
    result.value = result.value.slice(0, -1);
  }
}

function neg() {
  res();
  put('*(-1)');
  res();
}

document.addEventListener('keypress', (e) => {
  if (ACCEPT_KEYS.includes(e.key)) {
    put(e.key);
    
  }
  if (e.key === "Enter") {
    res();
  }
});