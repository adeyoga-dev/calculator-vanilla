let value = "";
let first_character = 0;
let dump_value = "";
// inislalisasi element
let text_input = document.getElementById("text-input");
let text_result = document.getElementById("text-result");

function getValue(element){
    let length = value.length;
    //validasi data dan aksi
    if(!isNumber(element.value) && value==="") return;
    if(element.value==="." && value==="") return;
    if(element.value==="C") return;
    if(element.value==="D") return;
    if(!isNumber(dump_value) && !isNumber(element.value)) return;
    if(dump_value == "." && element.value == ".") return;
    if(length>=48) return; //jika lebih dari sama dengan 48 karakter jangan simpan value dan print screen
    value += element.value;
    dump_value = element.value;
    printValue(value);
}

function printValue(value){
    let length = value.length;
    if(length>=6 && length<24){ //jika lebih dari sama dengan 6 karakter kurangi ukuran font
        text_input.style.fontSize = "30px";
    }else if(length>=24){ //jika lebih dari sama dengan 24 karakter kurangi ukuran font
        text_input.style.fontSize = "15px";
    }else{ //jika normal kembali ke ukuran normal
        text_input.style.fontSize = "60px";
    }
    text_input.innerHTML = value;
}

function printResult(value){
    let length = value.toString().length;
    //if(isOperator(value[length]) == true) return;
    if(length>=6 && length<24){ //jika lebih dari sama dengan 6 karakter kurangi ukuran font
        text_result.style.fontSize = "30px";
    }else if(length>=24){ //jika lebih dari sama dengan 24 karakter kurangi ukuran font
        text_result.style.fontSize = "15px";
    }else{//jika normal kembali ke ukuran normal
        text_result.style.fontSize = "70px";
    }
    text_result.innerHTML = value;
}

function beginCount(){
    let length = value.length;
    let data_dump = [];
    let character_dump = "";
    if(isOperator(value.charAt(length-1))) return;
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
    let number1 = parseFloat(value[0]);
    
    for(i=0; i<length; i++){
        let number2 = parseFloat(value[i+2]);
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
            case "%":
                result = number1 % number2;
                break;
        }
        number1 = result;
        total = number1;
        i++
    }
    printResult(total);
}

function isNumber(number){
    let number_list = ".0123456789";
    let length = number_list.length;
    for(let i=0; i<length; i++){
        if(number == number_list.charAt(i)) return true;
    }
    return false;
}

function isOperator(operator){
    let operator_list = "+-x÷%.";
    let length = operator_list.length;
    for(let i=0; i<length; i++){
        if(operator == operator_list.charAt(i)) return true;
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

function deleteContent(){
    let length = value.length;
    let dump = "";
    for(let i=0; i<length-1; i++){
        dump += value.charAt(i);
    }
    value = dump;
    printValue(dump);
}