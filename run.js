var number;
var number1;
do{
    number = Math.floor(Math.random() * 999);
}while (number < 100);
console.log(number);

do{
    number1 = Math.floor(Math.random() * 99);
}while (number1 < 10);
console.log(number1);

document.getElementById("text").innerHTML = number + " x "+ number1;


function check(){
    var mul = number * number1;
    var container = document.getElementById('name').value;
    console.log(container);
    if(mul == container){
        console.log("Correct Answer");
        document.getElementById("tx").innerHTML = "Correct Answer";
        document.getElementById('on').style.visibility = 'hidden';
        setTimeout(() => {  location.reload(); }, 3000);
    }
    else{
        console.log("Incorrect Answer");
        document.getElementById("tx").innerHTML = "Incorrect Answer";
        document.getElementById('on').style.visibility = 'hidden';
        setTimeout(() => {  location.reload(); }, 3000);
    }
}