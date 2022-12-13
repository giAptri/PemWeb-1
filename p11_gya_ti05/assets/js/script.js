document.querySelector("#option a").forEach((a) => {
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element) {
    let pilihanUser = element.target.innerText;
    let pilihanComputer = document.querySelector("#result");

    let Choices = ["Rock", "Paper", "Scissors"];
    
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.lenght)]
    pilihanComputer = pilihanComputer.innerHTML;

    if (pilihanUser == pilihanComputer) {
        alert("DRAWW!");
    }

    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN!");
    }else if (pilihanUser == "Paper" && pilihanComputer == "rock") {
        alert("COMPUTER WIN!");
    }else if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN!");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN!");
    }else{
        alert("TIDAK ADA PILIHAN COKKK");
    }


    if (pilihanComputer == "Rock" && pilihanUser == "Scissors") {
        alert("YOU WIN!");
    }else if (pilihanComputer == "Paper" && pilihanUser == "rock") {
        alert("YOU WIN!");
    }else if (pilihanComputer == "Rock" && pilihanUser == "Scissors") {
        alert("YOU WIN!");
    }else if (pilihanComputer == "Scissors" && pilihanUser == "Paper") {
        alert("YOU WIN!");
    }else{
        alert("TIDAK ADA PILIHAN COKKK");
    }
}