'use strict';
const button = document.querySelector(".btn.check");
let randomNumber = Math.ceil(Math.random() * 20);
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore")
const number = document.querySelector(".number")
let state = false
const again = document.querySelector(".again")

button.addEventListener("click", (event) => {
    if (state == false) {
        const value = document.querySelector(".guess").value;
        if (value > 20 || value < 0) {
            alert("Please enter a number between 1 and 20.")
        } else {
            if (value > randomNumber) {
                score.textContent -= 1;
                message.textContent = "Too high !"
            } else if (value < randomNumber) {
                score.textContent -= 1
                message.textContent = "Too low !"
            } else if (value == randomNumber) {
                document.body.style.backgroundColor = "green"
                message.textContent = "Correct number ."
                highscore.textContent = score.textContent
                number.textContent = String(randomNumber)
                state = true
            }
        }
        if (score.textContent == 0) {
            alert("you lost !")
            again.click()
        }
    } else {
        alert("please click again button or refresh the page")
    }
})
again.addEventListener("click", () => {
    state = false
    document.body.style.backgroundColor = "#222"
    message.textContent = "Start guessing..."
    number.textContent = "?"
    score.textContent = "20"
    randomNumber = Math.ceil(Math.random() * 20)
})