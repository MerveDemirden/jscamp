console.log("Merhaba Kodlama.io")


let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "Ankara"
//  Javascript dili rahatlıkla tipi değiştirebilir. Çıktı da dolarDun Ankara sonucunu verir...
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 
//  "const" veri tiplerinden biridir. Anlamı sabit demektir. Yukarıdakinin sonucunda 'read only' hatası gelir. 
//Sebebi ise sabite başka atama yapılamamasındandır...


console.log(euroDun)

//array (dizi)
//camelCasing; değişken tanımlarken kullanılan bir notasyondur...
//PascalCasing; başharf büyük
//<li>; liste elemanı 

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi", "Özel Konut Kredisi]

console.log("<ul>")
for (let i = 0; i<konutKredileri.length;i++) {
    
 console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")


console.log(konutKredileri)

