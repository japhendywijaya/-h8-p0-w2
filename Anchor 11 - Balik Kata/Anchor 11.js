


function balikKata(kata) {
    var panjangKata = kata.length-1
    var kataDibalik = ""

    
    for(var x = 0; x <= panjangKata; panjangKata--){
        kataDibalik += kata[panjangKata]
    }

    return kataDibalik
}


  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

