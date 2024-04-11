let value = "";
// inislalisasi element
let text_input = document.getElementById("text-input");
let text_result = document.getElementById("text-result");


function getValue(element){
    value += element.value;
    printValue(value);
}

function printValue(value){
    text_input.innerHTML = value;
}

function beginCount(){
    let length = value.length;
    let data_dump = [];
    let character_dump = "";
    for(let i=0; i<length+1; i++){
        let number = value.charAt(i);
        if(isNumber(number)){
            character_dump += number;
        }else{
            data_dump.push(character_dump);
            data_dump.push(value.charAt(i));
            character_dump = "";
        }
    }
    data_dump = deleteLastArray(data_dump);
    arithmeticOperation(data_dump);
    
}

function arithmeticOperation(value){
    let length = value.length;
    let total = 0;
    let number1 = parseInt(value[0]);
    
    for(i=0; i<length; i++){
        let number2 = parseInt(value[i+2]);
        let result = 0;
        if(typeof value[i+1] === "undefined"){
            break;
        }
        switch(value[i+1]){
            case "+":
                result = number1 + number2;
                break;
            case "-":
                result = number1 - number2;
                break;
            case "x":
                result = number1 * number2;
                break;
            case "÷":
                result = number1 / number2;
                break;
        }
        number1 = result;
        total = number1;
        i++
    }
    console.log(total);
}

function isNumber(number){
    let number_list = "0123456789";
    let length = number_list.length;
    for(let i=0; i<length; i++){
        if(number == number_list.charAt(i)) return true;
    }
    return false;
}

function deleteLastArray(array){
    let length = array.length;
    let array_dump = [];
    for(let i=0; i<length-1; i++){
        array_dump.push(array[i]);
    }
    return array_dump;
}