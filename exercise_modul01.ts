//Operator

// Soal 1
    //Rectangle
    let _panjang: number = 5;
    let _lebar: number = 3;

    //rumus luas persegi panjang
    const _luasPersegiPanjang = _panjang * _lebar ;
    console.log(_luasPersegiPanjang);

// Soal 2
    // Parimeter (keliling) of rectangle
    const _kelilingPersegiPanjang = (_panjang + _lebar) * 2;
    console.log(_kelilingPersegiPanjang);

// Soal 3
    //Diamter, circumference and area of circle
    let _r : number = 5;
    const _phi : number = Math.PI; // 3.14

    //diameter
    const _diameter = ( _r + _r);
    console.log('Diameter lingkaran adalah ' + _diameter);

    //circumferemce
    const _lingkar =  _phi * _diameter;
    console.log(_lingkar.toFixed(3));

    //area of a circle
    const _luasLingkaran = Math.PI * Math.pow(_r,2);
    console.log(_luasLingkaran.toFixed(3));

// Soal 4
    //Sudut terakhir
    let a:number = 80;
    let b:number = 65;
    const _sudutTerakhirSegitita : number = 180 - (a+b)
    console.log(_sudutTerakhirSegitita)

     //mencari sisi miring segitia
    const _sisiMiring = Math.sqrt((a*a)+(b*b));
    console.log(_sisiMiring);



// Soal 5

    //option 01
    let _jumlahHari = 460;
    let _year = 365;
    let _month = 30;
    let _days = 30;
    const _tahun = parseInt(_jumlahHari / _year);
    const _bulan = parseInt(_jumlahHari % _year / _month);
    const _hari = parseInt(_jumlahHari % _year % _month );

    console.log(_tahun+ " tahun" , _bulan+ " bulan" , _hari+ " hari");
    console.log(`${_tahun}, ${_bulan}, ${_hari} `)

    //option 02
    //Convert days to year, months and days
    function _dataTahunBulanHari (numberOfDays) {
        let _tahun = Math.floor(numberOfDays / 365);
        let _bulan = Math.floor(numberOfDays % 365 / 30);
        let _hari = Math.floor(numberOfDays % 365 % 30);

        return [_tahun+" Tahun" , _bulan+" Bulan" , _hari +" Hari"];
    }

    //soal pertama 1000 hari
    const _soal1 =_dataTahunBulanHari(700);
    const _info1:string = `${_soal1}`;
    console.log(_info1);
    console.log(_soal1);



    //soal kedua 3600 hari
    const _soal2 = _dataTahunBulanHari (3600);
    //perbedaan jika menggunakan `` (backtip)
    const _info:string = `${_soal2}`;
    console.log(_info)
    // memangil data langung
    console.log(_soal2);

    


//Soal 6
let date1: Date = new Date("2022-01-20");
let date2: Date = new Date("2022-03-30");
const perbedaanDate = (date2.getTime() - date1.getTime()) / (24 * 3600 * 1000);
console.log("Perbedaan hanya "+ perbedaanDate + " hari")


