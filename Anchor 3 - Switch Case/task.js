var tanggal = 1;
var bulan = 1;
var bulanName;
var tahun =  2018;

switch (bulan) {
    case 1:
        bulanName="January"
        break;
    case 2:
        bulanName="February"
        break;
    case 3:
        bulanName="March"
        break;
    case 4:
        bulanName="April"
        break;
    case 5:
        bulanName="May"
        break;
    case 6:
        bulanName="June"
        break;
    case 7:
        bulanName="July"
        break;
    case 8:
        bulanName="August"
        break;
    case 9:
        bulanName="September"
        break;
    case 10:
        bulanName="October"
        break;
    case 11:
        bulanName="November"
        break;
    case 12:
        bulanName="December"
        break;
    default:
        console.log('(wrong input)')
        break;
}

console.log (tanggal, bulanName, tahun)

console.log (tanggal + " " + bulanName + " " + tahun)

console.log (tanggal + bulanName + tahun)


