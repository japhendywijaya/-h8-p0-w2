

//nomor 1
console.log('NOMOR 1')

function shoutOut(){
    return 'Halo Function!'
}

console.log(shoutOut())




//nomor 2
console.log('\n', '\n', 'NOMOR 2')


function calculateMultiply(number1, number2){
    var number3 = number1 * number2
    return number3
}



var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 



//nomor 3
console.log('\n', '\n', 'NOMOR 3')

function processSentence (parName, parAge, parAdd, parHobby){
    var completeSentence = 
    'Nama saya '+ parName 
    + ', umur saya ' + parAge 
    + ' tahun, alamat saya di ' + parAdd 
    + ' , dan saya punya hobby yaitu ' + parHobby + '!';
    return completeSentence
}


var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 



