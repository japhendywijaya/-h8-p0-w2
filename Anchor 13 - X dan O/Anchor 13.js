
function xo(str) {
    var panjangKata
    var countX = 0
    var countO = 0


    panjangKata = str.length

    for (var x = 0; x < panjangKata; x++){

        if (str[x] ==='x') {
            countX += 1
        }
        if (str[x] ==='o') {
            countO += 1
        }

    }

    if (countX === countO) {
        return true
    }else{
        return false
    }


  }

  

  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  
