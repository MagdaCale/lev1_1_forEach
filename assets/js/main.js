// CodeFlow Übung lev1_1: forEach()
console.log('CodeFlow Übung lev1_1: forEach()')
document.write('<h2>CodeFlow Übung lev1_1: forEach()</h2> <br> ')

let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"]

getraenke.sort()

getraenke.forEach((item, index) =>{
    console.log(item)
    document.write(`${getraenke[index]} <br>`)
    
})
console.log(getraenke)
console.log('=========================================')
document.write(`=========================================`)



// CodeFlow Übung lev1_5: forEach()
console.log('CodeFlow Übung lev1_5: forEach()')
document.write('<h2>CodeFlow Übung lev1_5: forEach()</h2> <br>')

let checkNumber = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78]

checkNumber.forEach((item, index) =>{

    if(checkNumber[index] % 3 == 0) {
        document.write(`${checkNumber[index]}  ist durch 3 teilbar = ` )
        checkNumber[index] += 100
    }
    document.write(`${checkNumber[index]} <br>`)


})
console.log(checkNumber)