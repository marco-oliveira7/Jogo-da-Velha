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
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")


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
            if(progress === 9)
            {
                setTimeout(remove, 2000)
                progresso = 0
            }

            if(one.classList.contains("x") && two.classList.contains("x") && three.classList.contains("x"))
            {
                alert("x ganhou")
            }
        })
    })

}

function init() {
    remove()
    addListenerHitBox()
}

init()