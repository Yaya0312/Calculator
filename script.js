'use strict'
const OPERATOR = ['+','-','*','/','%'];
const ACCEPT_KEYS = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','.'];
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
  result.value = eval(result.value + "* (-1)");
}

document.onkeydown = function (e) {
  if (ACCEPT_KEYS.includes(e.key)) {
    put(e.key);
  }
  if (e.key === "Enter") {
    res();
  }
  if (e.key === "Backspace") {
    back();
  }
  if (e.key === "Delete") {
    clean();
  }
  if (e.key === "Shift") {
    neg();
  }
}