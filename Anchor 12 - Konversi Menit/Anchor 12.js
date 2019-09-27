



function konversiMenit(menit) {
    var hour
    var minuteBuffer
    var minute
    var fullTime

    hour = Math.floor(menit/60)
    minuteBuffer = menit - (hour*60) 

    if (minuteBuffer === 0) {
        minute = '00'
    }else if (minuteBuffer <10 ){
        minute = '0' + minuteBuffer
    }else{
        minute = minuteBuffer
    }



    fullTime = hour + ":" + minute

    return fullTime
  }


  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


