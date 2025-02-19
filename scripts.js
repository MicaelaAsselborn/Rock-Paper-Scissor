const computerOptionIndex = Math.floor(Math.random() * 3);
const options = ["ROCK", "PAPER", "SCISSOR"];
const computerChoice = options[computerOptionIndex];
console.log(computerChoice)

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
const computerInput = document.querySelector("#computer-input");
const result = document.querySelector("#result");
const resultContainer = document.querySelector("#result-container");
const button = document.querySelectorAll("button")

function rockCase() {
    computerChoice === "ROCK" ? tie() : false;
    computerChoice === "PAPER" ? lose() : false;
    computerChoice === "SCISSOR" ? win() : false;
    resultContainer.style.display = "block";
    rock.classList.add("selected")
    paper.disabled = true;
    scissor.disabled = true;
}
function paperCase(){
    computerChoice === "ROCK" ? win() : false;
    computerChoice === "PAPER" ? tie() : false;
    computerChoice === "SCISSOR" ? lose() : false;
    resultContainer.style.display = "block";
    paper.classList.add("selected");
    rock.disabled = true;
    scissor.disabled = true;
}
function scissorCase(){
    computerChoice === "ROCK" ? lose() : false;
    computerChoice === "PAPER" ? win() : false;
    computerChoice === "SCISSOR" ? tie() : false;
    resultContainer.style.display = "block";
    scissor.classList.add("selected");
    rock.disabled = true;
    paper.disabled = true;
}

function tie(){
    computerInput.innerText = `${computerChoice}`;
    result.innerText = "It's a tie."
    result.style.backgroundColor = "yellow";
    result.style.color = "black"
}
function lose(){
    computerInput.innerText = `${computerChoice}`
    result.innerText = "You lose :("
    result.style.backgroundColor = "red"
}
function win(){
    computerInput.innerText = `${computerChoice}`
    result.innerText = "You win!"
    result.style.backgroundColor = "green"
}

function restart(){
    location.reload()
}