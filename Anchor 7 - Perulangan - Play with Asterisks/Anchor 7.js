// 1)
var rows1 = 5
var cetakBintang

for (cetakBintang =0; cetakBintang<rows1; cetakBintang++){
    console.log("*")
} 

console.log()
// 2) varian pake string

var rows2 = 5
var cetakBintang
var cetakBintangNested
var cetakBintangNestedValue

for (cetakBintang = 1; cetakBintang<=rows2; cetakBintang++){
    cetakBintangNestedValue =""

    for(cetakBintangNested=1; cetakBintangNested<=rows2; cetakBintangNested++){
        cetakBintangNestedValue += "*"
    }
    console.log (cetakBintangNestedValue)

}


console.log()
// 2) varian pake array
var rows2 = 5
var cetakBintang2
var cetakBintangNested
var cetakBintangNestedValue =[]
var cetakBintangNestedValueJoin

for (cetakBintang2 =0; cetakBintang2<rows2; cetakBintang2++){
    cetakBintangNestedValue = ['']
    for(cetakBintangNested=0; cetakBintangNested<rows2; cetakBintangNested++){
        cetakBintangNestedValue.push("*")
    }
    cetakBintangNestedValueJoin = cetakBintangNestedValue.join('')
    console.log(cetakBintangNestedValueJoin)
    
}

console.log()
// 3) Varian pake String

var rows3 = 5
var cetakBintang
var cetakBintangNested
var cetakBintangNestedValue =""

for (cetakBintang = 1; cetakBintang<=rows3; cetakBintang++){
        cetakBintangNestedValue += "*"
        console.log (cetakBintangNestedValue)
}


console.log()
// 3) varian pake array
var rows3 = 5
var cetakBintang
var cetakBintangNested
var cetakBintangNestedValue =[]
var cetakBintangNestedValueJoin

for (cetakBintang =0; cetakBintang<rows3; cetakBintang++){
    
    for(cetakBintangNested=0; cetakBintangNested<1; cetakBintangNested++){
        cetakBintangNestedValue.push("*")
    }
    cetakBintangNestedValueJoin = cetakBintangNestedValue.join('')
    console.log(cetakBintangNestedValueJoin)
    
}






