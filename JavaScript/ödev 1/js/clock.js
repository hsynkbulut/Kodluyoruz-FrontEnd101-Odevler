
let userName = prompt("Adınız nedir?")
let myName = document.getElementById('myName')
myName.innerHTML = userName

let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function showTime() {
    const today = new Date();
    let saat = today.getHours();
    let dakika = today.getMinutes();
    let saniye = today.getSeconds();
    let gun = gunler[today.getDay()];

    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    
    document.getElementById('myClock').innerHTML = saat + ":" + dakika + ":" + saniye + " " + gun;
    
    /*setTimeout(), bir fonksiyonun veya kodun belirlediğiniz süre sonunda çalışmasını sağlar.*/
    setTimeout(showTime, 1000); //1000 milisaniye yani 1 sn sonra showTime fonksiyonu çalışır.
    
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    
    return i;
  }

  showTime()