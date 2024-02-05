function somar() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1 + num2;
    document.getElementById("resultadosoma").textContent = res;
}
function sub() {
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var res = num3 - num4;
    document.getElementById("resultadosub").textContent = res;
}
function mul() {
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var res = num5 * num6;
    document.getElementById("resultadomul").textContent = res;
}
function div() {
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var res = num7 / num8;
    document.getElementById("resultadodiv").textContent = res;
}

