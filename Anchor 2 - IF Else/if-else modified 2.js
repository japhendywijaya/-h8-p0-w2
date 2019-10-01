var nama ="Hendy"
var peran ="Penyihir"
var message



if (peran === 'Ksatria')
  {
    message = ", kamu dapat menyerang dengan senjatamu!"
  }
else if(peran ==='Tabib')
  {
    message = ", kamu akan membantu temanmu yang terluka."
  }
else if(peran ==='Penyihir')
  {
    message = ", ciptakan keajaiban yang membantu kemenanganmu!"
  }




if (nama==='') 
  {
    console.log('Nama harus diisi')

  }
else if (nama !== "" && peran==="") 
  {
    console.log('Halo', nama + ', Pilih peranmu untuk memulai game!')  
  }
else
  {
    console.log("Selamat datang di Dunia Proxytia,", nama)
    console.log("Halo", peran, nama+ message)
  }




