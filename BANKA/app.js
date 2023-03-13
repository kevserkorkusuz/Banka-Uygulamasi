// localStorage.setItem("sifre",1234); //!veri yükler
// localStorage.setItem("bakiye",1000);

let sifre = localStorage.getItem("sifre"); //! veri çeker

$(".girisBtn").click(function (e) { 
    e.preventDefault();
    let girilenSifre = $(".loginInp").val();

    if(girilenSifre==sifre) {
        window.location.href="islemler.html"
    }
    else{
        $(".girisSonuc").html("Hatalı Girdiniz!")
    } 
});

let rndKod = Math.round(Math.random()*1000000);
console.log(rndKod);

$(".sifreUnutBtn").click(function (e) { 
    e.preventDefault();
    let girilenKod=Number($(".sifreUnutInp").val());
    if(rndKod==girilenKod){
        $(".kodSifre").hide();
        $(".yeniSifreBelirle").show();
     }
   else{
        alert("Kodunuz Hatalı!")
   }
});

$(".sifreDegis").click(function (e) { 
    e.preventDefault();
    let yeniSifre = $(".yeniSifre").val();
    localStorage.setItem("sifre",yeniSifre);
    $(".yeniSifreSonuc").html("Tebrikler Şifreniz Değişti! Ana Sayfaya Yönlenddiriliyorsunuz!")
    
    setTimeout(function(){
        window.location.href = "index.html";
     }, 5000);
});

//!Bakiye gösterme;
let bakiye = localStorage.getItem("bakiye");
$(".bakiyeGoster").html(`Bakiyeniz : ${bakiye}`);


$(".islemSec").click(function (e) { 
    e.preventDefault();
    let secilenIslem = $(".islemSecSel").val();
    
    if(secilenIslem=="Para Çek") {
        let girilenTutar = Number($(".girilenTutar").val());
        if (girilenTutar<=bakiye){
            bakiye=bakiye-girilenTutar;
        localStorage.setItem("bakiye",bakiye);
        $(".bakiyeGoster").html(`Para Çekme İşleminiz Tamamnlandı. Güncel Bakiyeniz : ${bakiye}`);
        }
        else {
        $(".bakiyeGoster").html(`Bakiyeniz Yetersiz! Toplam Bakiyeniz : ${bakiye}`);
        }
        
    }
 
    else if(secilenIslem=="Para Yatır") {
        bakiye = Number(bakiye);
        let girilenTutar=Number($(".girilenTutar").val());
        bakiye=bakiye +girilenTutar;
        localStorage.setItem("bakiye",bakiye);
        $(".bakiyeGoster").html(`Para Yatırma İşleminiz Tamamnlandı. Güncel Bakiyeniz : ${bakiye}`);
    
    }
  

});

$(".ibanPaylas").click(function (e) { 
    e.preventDefault();
    let iban = "TR4256346521433";
    alert(iban);
    
});





