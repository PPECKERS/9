var ilkalinan;
var sonalinan;
var sayac = 0;
var hesapla;
var kontrol = 0 ;
function sifir() {
    if (sayac == 1) {
        sonalinan = 0;
    }
    if (sayac == 0) {
        ilkalinan = 0;
    }
    document.getElementById("textbox").value = 0;
}
function bir() {
    if (sayac == 1) {
        sonalinan = 1;
    }
    if (sayac == 0) {
        ilkalinan = 1;
    }
    document.getElementById("textbox").value = 1;
}
function iki() {
    if (sayac == 1) {
        sonalinan = 2;
    }
    if (sayac == 0) {
        ilkalinan = 2;
    }
    document.getElementById("textbox").value = 2;
}
function uc() {
    if (sayac == 1) {
        sonalinan = 3;
    }
    if (sayac == 0) {
        ilkalinan = 3;
    }
    document.getElementById("textbox").value = 3;
}
function dort() {
    if (sayac == 1) {
        sonalinan = 4;
    }
    if (sayac == 0) {
        ilkalinan = 4;
    }
    document.getElementById("textbox").value = 4;
}
function bes() {
    if (sayac == 1) {
        sonalinan = 5;
    }
    if (sayac == 0) {
        ilkalinan = 5;
    }
    document.getElementById("textbox").value = 5;
}
function alti() {
    if (sayac == 1) {
        sonalinan = 6;
    }
    if (sayac == 0) {
        ilkalinan = 6;
    }
    document.getElementById("textbox").value = 6;
}
function yedi() {
    if (sayac == 1) {
        sonalinan = 7;
    }
    if (sayac == 0) {
        ilkalinan = 7;
    }
    document.getElementById("textbox").value = 7;
}
function sekiz() {
    if (sayac == 1) {
        sonalinan = 8;
    }
    if (sayac == 0) {
        ilkalinan = 8;
    }
    document.getElementById("textbox").value = 8;
}
function dokuz() {
    if (sayac == 1) {
        sonalinan = 9;
    }
    if (sayac == 0) {
        ilkalinan = 9;
    }
    document.getElementById("textbox").value = 9;
}
function sil() {
    document.getElementById("textbox").value = "";
}
function topla() {
    document.getElementById("textbox").value = "+";
    sayac = 1;
    kontrol = 1;
}
function cikar() {
    document.getElementById("textbox").value = "-";
    sayac = 1;
    kontrol = 2;
}
function bol() {
    document.getElementById("textbox").value = "/";
    sayac = 1;
    kontrol = 3;
}
function carp() {
    document.getElementById("textbox").value = "*";
    sayac = 1;
    kontrol = 4;
}
function esittir() {
    sayac = 0;
    if (kontrol == 4) {
        hesapla = ilkalinan * sonalinan;
    }
    else if (kontrol == 3) {
        hesapla = ilkalinan / sonalinan;
    }
    else if (kontrol == 2) {
        hesapla = ilkalinan - sonalinan;
    }
    else if (kontrol == 1) {
        hesapla = ilkalinan + sonalinan;
    }
    document.getElementById("textbox").value = hesapla;
}