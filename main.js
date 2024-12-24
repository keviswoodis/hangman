"use strict";

let words = ["shit", "piss", "fuck", "cunt", "cocksucker", "motherfucker", "testicles", "nipples","tits", "fort", "turd", "twat"];
let word = document.getElementById("word");

function getIndex(max){
    let number = Math.floor(Math.random() * max);
    return number;
};

let wordNum = getIndex(10); 

let theWord = words[wordNum];
console.log(words[0]);
console.log(theWord);

for(let i = 0; i < theWord.length; i++){
    let slot = document.createElement("h2");
    slot.id = `letter${i}`;
    word.appendChild(slot);
}

let guessed_letters = [];
let incorrect = 0;

function checkLetter(){
    let guess = String(document.getElementById("guess").value);
    console.log(guess);
    //add guessed letter to the guessed letters array.
    guessed_letters.push(guess);
    let guessed = document.getElementById("guessed");
    //clear guessed letter div
    guessed.innerHTML = "";
    //add guessed_letters array elements to the guessed letter div.
    for(let i = 0; i < guessed_letters.length; i++){
        let gletter = document.createElement("h5");
        gletter.textContent = guessed_letters[i];
        guessed.appendChild(gletter);
    }

    //does the word contain the guessed letter?

    //if Yes:
    if(theWord.includes(guess)){
        console.log("yes");
        //loop through guess and put the letter in each box
        //fill in the puzzle with the correct letter where they go.
        for(let i = 0; i < theWord.length; i++){
            if(theWord[i] == guess){
                let block = document.getElementById(`letter${i}`);
                block.innerText = guess;
            }
        }

    //if no: 
    }else{
        console.log("no");
        incorrect++;
        if(incorrect > 5) {
            window.location = "loser.html";
        } 
    }
}