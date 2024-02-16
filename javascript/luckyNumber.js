let randomNumber = Math.floor(Math.random() * 10) + 1 ; // 1 to 10, random

function guess()
{
    let myGuess = document.getElementById("number").value;
    if(myGuess == randomNumber)
    {
        alert("You win!");
    }
    else{
        alert("Guess Again!");
    }
}