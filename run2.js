var number;
var number1;
var set = false;
do{
    number = Math.floor(Math.random()*999);
}while(number<100);
console.log(number);
do{
    number1 = Math.floor(Math.random()*15);
}while(number1<5);
console.log(number1);

function ok(){
    var rm = number % number1;
    console.log(rm);
    var qo = Math.floor(number/number1)
    console.log(qo);
    document.getElementById("text").innerHTML = number + " / "+ number1;
}

function check(){
    var rm = number % number1;
    var qo = Math.floor(number/number1);
    var container = document.getElementById('name').value;
    var container1 = document.getElementById('name1').value;
    if(container == qo && container1 == rm){
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