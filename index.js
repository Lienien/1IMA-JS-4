let num = Math.round(Math.random()*100)
console.log(num)
let correct = true
let guess = Number(prompt("Skriv inn et tall..."))

while (correct) {
    if (guess < num) {
        guess = prompt("Skriv et høyere tall")
    } else if (guess > num) {
        guess = prompt("Skriv et lavere tall")
    } else if (guess == num) {
        alert("Det er riktig!")
        correct = false
    }
}

for (let i = 0; i <= 9; i++) {
   for (let k = 0; k < 10; k++) {
    document.write(k+"  ")
    }
    document.write("<br>")

}