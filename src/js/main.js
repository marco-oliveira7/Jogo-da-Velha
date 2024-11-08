const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        borders: document.querySelector("border"),
    },

    values: {
        hitposition: 0,
    },

    action: {

    }
}

let currentPlayer = "x";
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let progress = 0
let winX = false
let winCircle = false
let gameOver = false

let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")



function remove() {
    state.view.squares.forEach((square) => {
        square.classList.remove("x");
        square.classList.remove("circle");
    })
}


function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("click", (event) => {
            if (square.classList.contains("x") || square.classList.contains("circle")) {

            }
            else if (currentPlayer === "circle") {
                player1.classList.add("border")
                player2.classList.remove("border")
                square.classList.add("circle")
                progress++
                currentPlayer = "x"
            }
            else if (currentPlayer === "x") {
                player2.classList.add("border")
                player1.classList.remove("border")
                square.classList.add("x")
                progress++
                currentPlayer = "circle"
            }

            if (one.classList.contains("x") && two.classList.contains("x") && three.classList.contains("x") ||
                four.classList.contains("x") && five.classList.contains("x") && six.classList.contains("x") ||
                seven.classList.contains("x") && eight.classList.contains("x") && nine.classList.contains("x") ||
                one.classList.contains("x") && four.classList.contains("x") && seven.classList.contains("x") ||
                two.classList.contains("x") && five.classList.contains("x") && eight.classList.contains("x") ||
                three.classList.contains("x") && six.classList.contains("x") && nine.classList.contains("x") ||
                one.classList.contains("x") && five.classList.contains("x") && nine.classList.contains("x") ||
                three.classList.contains("x") && five.classList.contains("x") && seven.classList.contains("x")) {
                winX = true
                gameOver = true
                checkWin()
            }

            else if (one.classList.contains("circle") && two.classList.contains("circle") && three.classList.contains("circle") ||
                four.classList.contains("circle") && five.classList.contains("circle") && six.classList.contains("circle") ||
                seven.classList.contains("circle") && eight.classList.contains("circle") && nine.classList.contains("circle") ||
                one.classList.contains("circle") && four.classList.contains("circle") && seven.classList.contains("circle") ||
                two.classList.contains("circle") && five.classList.contains("circle") && eight.classList.contains("circle") ||
                three.classList.contains("circle") && six.classList.contains("circle") && nine.classList.contains("circle") ||
                one.classList.contains("circle") && five.classList.contains("circle") && nine.classList.contains("circle") ||
                three.classList.contains("circle") && five.classList.contains("circle") && seven.classList.contains("circle")) {
                winCircle = true
                gameOver = true
                checkWin()

            }

            if (progress === 9 && winX == false && winCircle == false) {
                let button = document.createElement("h2");
                button.className = "reset";
                button.innerHTML = "VELHA!!! Clique aqui para jogar denovo";
                document.querySelector("main").appendChild(button)

                button.addEventListener("click", function () {
                    window.location.reload()
                })
            }
        })
    })

}

function checkWin() {
    if (winX == true && gameOver == true && winCircle == false) {
        let button = document.createElement("h2");
        button.className = "reset";
        button.innerHTML = "PLAYER 1 GANHOU!!! Clique aqui para jogar denovo";
        document.querySelector("main").appendChild(button)
        button.addEventListener("click", function () {
            window.location.reload()
        })
    }

    else if (winCircle == true && gameOver == true) {
        let button = document.createElement("h2");
        button.className = "reset";
        button.innerHTML = "PLAYER 2 GANHOU!!! Clique aqui para jogar denovo";
        document.querySelector("main").appendChild(button)

        button.addEventListener("click", function () {
            window.location.reload()
        })
    }
}

function init() {
    remove()
    addListenerHitBox()
}

init()