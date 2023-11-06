 let mesafe = prompt("Mesafeni daxil et!") * 1;
 let vaxt = prompt("Vaxti daxil et!") * 1;
 const hesabla = function (mesafe,vaxt) {
    let serfiyyat = 0;
    let suret = mesafe / vaxt;
    if (suret >= 0 && suret <= 60) {
        serfiyyat = 6;
    }
     else if (suret >= 60 && suret <= 90) {
        serfiyyat = 9;
    }
     else if (suret >= 90 && suret <= 120) {
         serfiyyat = 8;
    }
     else {
         serfiyyat = 10;
     };
      let miqdar = (serfiyyat * mesafe) / 100;
    let netice = `${mesafe} km yolu ${vaxt} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${suret} km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${miqdar} litr, ortalama yanacaq sərfiyyatı isə ${serfiyyat}l/100 km olacaq`
    return netice;
 }
 console.log(hesabla(mesafe, vaxt));
