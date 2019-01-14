console.log("working");
//===Initial Prompt===
var calc = prompt("Welcome to my JS Calculator\nWhich Calculator do you want to use?\nTo use the Basic Calculator (Type Basic to select option)\nTo use the Advanced Calculator (Type Adv to select option) ");
switch(calc){
    case "basic":
    alert("You are on Basic Calculator Mode");
    break;

    case "adv":
    alert("You are on Advanced Calculator Mode");
    break;

    default:
    alert("you are on Basic Mode");
    break;
}

//======BASIC CALCULATOR======
function operatorFunction(x, y, operator){
    var z;
    if(operator == '+'){
        z = x + y;
    }else if(operator == '/'){
        z = x / y;
    }else if(operator == '*'){
        z = x * y;
    }else if(operator == '-'){
        z = x - y;
    }
    return z;
}
// ======ADVANCED CALCULATOR======
// ===BMI===
    
// ===Celcius To Farenheit
    function tempFunction(){
        var t;
    }
//Connecting Switch Statement to either Basic or Advanced
var adv = "Do you want BMI or Temperature Conversion?";
if(calc=="basic"){
    console.log(alert("enter to start calculating"));
    var x, y, operator;
    x = parseFloat(prompt("Type a number"));
    y = parseFloat(prompt("Type a number"));
    operator = prompt("Choose an Operator");
    alert(operatorFunction(x, y, operator));
    prompt("Do you want to continue?")
// Prompt to choose between BMI & Temperature
}else if(calc=="adv"){
    console.log(prompt(`${adv}`));
}
// BMI
if(adv=="BMI"){

}
// Temperature
else if(adv=="temperature"){

}


// var bool = true;
// while (bool){
//     // console.log(true);
// }
// var addNumbers = (num1, num2) => num1 + num2
// var divideNumbers = (num1, num2) => num1 / num2;
// var multiplyNumbers = (num1, num2) => num1 * num2;
// var subtractNumbers = (num1, num2) => num1 - num2;



