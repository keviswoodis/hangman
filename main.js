"use strict";

let words = ["SANTA", "TREE", "CANDY", "STOCKING", "ORNAMENT", "LIGHTS", "PRESENTS", "CAROLS", "JINGLE", "BELLS",
             "SNOWMAN", "REINDEER", "SNOW", "ELVES", "COOKIES", "SLEIGH", "HOLIDAY", "SNOWFLAKE"];

let word = document.getElementById("word");


/*create an array of ten numbers, so that we can avoid using words that have
been used in the last ten games, to remedy repetition issues. pulls existing
liste of indexes from session storage first, if none, then creates one full of -1s. */
let indexes = JSON.parse(sessionStorage.getItem("indexes")) || [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

/* This function gets our words index. */
function getIndex(max){
    let number;
    do {
        //choose random number within our range.
        number = Math.floor(Math.random() * max);

        //if the index includes the number, try again. 
    }while (indexes.includes(number));
        return number;
    
};

//once an index that hasnt been used in ten rounds has been found,
//assign the word at that index as the word for the puzzle.
let wordNum = getIndex(words.length);

//remove the oldest number from the index list, and add the new number.
indexes.shift();
indexes.push(wordNum); 


//save the index to session storage, so that when the page reloads, we can
//still keep track of what words have been used. 
sessionStorage.setItem("indexes", JSON.stringify(indexes));
let theWord = words[wordNum];
console.log(indexes);
console.log(words[0]);
console.log(theWord);

/*this async function summons our puzzle to the screen on letter at time for 
effect*/

async function createSlotsWithDelay(){
    for(let i = 0; i < theWord.length; i++){
        let slot = document.createElement("h2");
        slot.id = `letter${i}`;
        word.appendChild(slot);
    
        await new Promise(resolve => setTimeout(resolve, 60));
    }
}
//call the function to put the puzzle on the screen. 

createSlotsWithDelay();

//store the number of incorrect guesses
let incorrect = 0;

//create variables for our letter keys, and then add event listeners to them. 
let lettera = document.getElementById("letterkeya");
let letterb = document.getElementById("letterkeyb");
let letterc = document.getElementById("letterkeyc");
let letterd = document.getElementById("letterkeyd");
let lettere = document.getElementById("letterkeye");
let letterf = document.getElementById("letterkeyf");
let letterg = document.getElementById("letterkeyg");
let letterh = document.getElementById("letterkeyh");
let letteri = document.getElementById("letterkeyi");
let letterj = document.getElementById("letterkeyj");
let letterk = document.getElementById("letterkeyk");
let letterl = document.getElementById("letterkeyl");
let letterm = document.getElementById("letterkeym");
let lettern = document.getElementById("letterkeyn");
let lettero = document.getElementById("letterkeyo");
let letterp = document.getElementById("letterkeyp");
let letterq = document.getElementById("letterkeyq");
let letterr = document.getElementById("letterkeyr");
let letters = document.getElementById("letterkeys");
let lettert = document.getElementById("letterkeyt");
let letteru = document.getElementById("letterkeyu");
let letterv = document.getElementById("letterkeyv");
let letterw = document.getElementById("letterkeyw");
let letterx = document.getElementById("letterkeyx");
let lettery = document.getElementById("letterkeyy");
let letterz = document.getElementById("letterkeyz");

lettera.addEventListener("click", function (){checkLetter("A"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterb.addEventListener("click", function (){checkLetter("B"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterc.addEventListener("click", function (){checkLetter("C"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterd.addEventListener("click", function (){checkLetter("D"); this.style.color  = "green"; this.style.pointerEvents = "none";});
lettere.addEventListener("click", function (){checkLetter("E"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterf.addEventListener("click", function (){checkLetter("F"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterg.addEventListener("click", function (){checkLetter("G"); this.style.color   = "green"; this.style.pointerEvents = "none";});
letterh.addEventListener("click", function (){checkLetter("H"); this.style.color = "green"; this.style.pointerEvents = "none";});
letteri.addEventListener("click", function (){checkLetter("I"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterj.addEventListener("click", function (){checkLetter("J"); this.style.color   = "green"; this.style.pointerEvents = "none";});
letterk.addEventListener("click", function (){checkLetter("K"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterl.addEventListener("click", function (){checkLetter("L"); this.style.color   = "green"; this.style.pointerEvents = "none";});
letterm.addEventListener("click", function (){checkLetter("M"); this.style.color = "green"; this.style.pointerEvents = "none";});
lettern.addEventListener("click", function (){checkLetter("N"); this.style.color  = "green"; this.style.pointerEvents = "none";});
lettero.addEventListener("click", function (){checkLetter("O"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterp.addEventListener("click", function (){checkLetter("P"); this.style.color  = "green"; this.style.pointerEvents = "none";});
letterq.addEventListener("click", function (){checkLetter("Q"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterr.addEventListener("click", function (){checkLetter("R"); this.style.color = "green"; this.style.pointerEvents = "none";});
letters.addEventListener("click", function (){checkLetter("S"); this.style.color = "green"; this.style.pointerEvents = "none";});
lettert.addEventListener("click", function (){checkLetter("T"); this.style.color = "green"; this.style.pointerEvents = "none";});
letteru.addEventListener("click", function (){checkLetter("U"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterv.addEventListener("click", function (){checkLetter("V"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterw.addEventListener("click", function (){checkLetter("W"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterx.addEventListener("click", function (){checkLetter("X"); this.style.color = "green"; this.style.pointerEvents = "none";});
lettery.addEventListener("click", function (){checkLetter("Y"); this.style.color = "green"; this.style.pointerEvents = "none";});
letterz.addEventListener("click", function (){checkLetter("Z"); this.style.color = "green"; this.style.pointerEvents = "none";});

let correctLetters = "";

document.getElementById("playagain").addEventListener("click", function  () {window.location.href="index.html";});
/* function listens to the letter we clicked an checks if it is part of the puzzle. If it is,
   it is added to the correct letters array, and displayed on the puzzle each time it occurs. If it's not
   the number of incorrect guesses increases */

function checkLetter(letter){
    let guess = letter;
    console.log(guess);



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
                correctLetters = correctLetters + guess;
            }
        }
        // after the letter is guessed, if the word is complete, display winner screen and
        // play again button.
        if(correctLetters.length == theWord.length) {
            let playfield = document.getElementById("body");
            playfield.style.backgroundColor = "green";
            playfield.style.color = "white";
            let message = document.getElementById("top-message");
            message.innerHTML = "You Win!";
            let playagain = document.getElementById("playagain");
            playagain.style.display = "block";
        }

    //if no, increase the number of incorrect guesses, and if it's more than 5, display the loser screen and 
    //play again button. 
    }else{
        console.log("no");
        incorrect++;
        if(incorrect > 5) {
            window.location = "loser.html";
           
        } 
    }
}