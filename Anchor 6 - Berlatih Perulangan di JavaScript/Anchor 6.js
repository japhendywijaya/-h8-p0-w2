// nomor 1
console.log('nomor 1')


console.log('LOOPING PERTAMA')

var x = 2

while(x<=20){
    console.log(x + ' - I love coding')
    x += 2
}


console.log("LOOPING KEDUA")

x = 20
while(x>=2){
    console.log(x + ' - I will become fullstack developer')
    x -= 2
}



// nomor 2
console.log("\n", "\n")
console.log('nomor 2')

console.log('LOOPING PERTAMA')

var x = 1

for(x; x<=20; x++){
    console.log(x + ' - I Love Coding')
}


console.log("LOOPING KEDUA")

x=20
for(x; x>=1; x--){
    console.log(x + ' - I will become fullstack developer')
}

 

 
// nomor 3
console.log("\n", "\n")
console.log('nomor 3')



var counter = 1

for(counter; counter<=100; counter++){
    if ( counter%2 >0 ){
        console.log(counter + ' adalah bilangan GANJIL')
    }
    else{
        console.log(counter + ' adalah bilangan GENAP')
    }
}

 



// nomor 3 - pertambahan 2 kelipatan 3

console.log("\n", "\n")
console.log('nomor 3 - pertambahan 2 kelipatan 3')

var counter = 1

for(counter; counter<=100; counter+=2){
    
    
    if ( counter%3 == 0 ){
        console.log(counter + ' adalah kelipatan 3')
    }
    else{
        console.log('')
    }


}



// nomor 3 - pertambahan 5 kelipatan 6

console.log("\n", "\n")
console.log('nomor 3 - pertambahan 5 kelipatan 6')

var counter = 1

for(counter; counter<=100; counter+=5){
    
    
    if ( counter%6 == 0 ){
        console.log(counter + ' adalah kelipatan 6')
    }
    else{
        console.log('')
    }


}




// nomor 3 - pertambahan 9 kelipatan 10

console.log("\n", "\n")
console.log('nomor 3 - pertambahan 9 kelipatan 10')

var counter = 1

for(counter; counter<=100; counter+=9){
    
    
    if ( counter%10 == 0 ){
        console.log(counter + ' adalah kelipatan 10')
    }
    else{
        console.log('')
    }


}