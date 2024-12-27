"use strict";

let words = ["SANTA", "TREE", "CANDY", "STOCKING", "ORNAMENT", "LIGHTS", "PRESENTS", "CAROLS", "JINGLE", "BELLS",
             "SNOWMAN", "REINDEER", "SNOW", "ELVES", "COOKIES", "SLEIGH", "HOLIDAY", "SNOWFLAKE"];

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

lettera.addEventListener("click", function (){checkLetter("A"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterb.addEventListener("click", function (){checkLetter("B"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterc.addEventListener("click", function (){checkLetter("C"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterd.addEventListener("click", function (){checkLetter("D"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
lettere.addEventListener("click", function (){checkLetter("E"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterf.addEventListener("click", function (){checkLetter("F"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterg.addEventListener("click", function (){checkLetter("G"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterh.addEventListener("click", function (){checkLetter("H"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letteri.addEventListener("click", function (){checkLetter("I"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterj.addEventListener("click", function (){checkLetter("J"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterk.addEventListener("click", function (){checkLetter("K"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterl.addEventListener("click", function (){checkLetter("L"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterm.addEventListener("click", function (){checkLetter("M"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
lettern.addEventListener("click", function (){checkLetter("N"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
lettero.addEventListener("click", function (){checkLetter("O"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterp.addEventListener("click", function (){checkLetter("P"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterq.addEventListener("click", function (){checkLetter("Q"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterr.addEventListener("click", function (){checkLetter("R"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letters.addEventListener("click", function (){checkLetter("S"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
lettert.addEventListener("click", function (){checkLetter("T"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letteru.addEventListener("click", function (){checkLetter("U"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterv.addEventListener("click", function (){checkLetter("V"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterw.addEventListener("click", function (){checkLetter("W"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterx.addEventListener("click", function (){checkLetter("X"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
lettery.addEventListener("click", function (){checkLetter("Y"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});
letterz.addEventListener("click", function (){checkLetter("Z"); this.style.backgroundColor = "green"; this.style.pointerEvents = "none";});

let correctLetters = "";

document.getElementById("playagain").addEventListener("click", function  () {window.location.href="index.html";});

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

        if(correctLetters.length == theWord.length) {
            let playfield = document.getElementById("body");
            playfield.style.backgroundColor = "green";
            playfield.style.color = "white";
            let message = document.getElementById("top-message");
            message.innerHTML = "You Win!";
            let playagain = document.getElementById("playagain");
            playagain.style.display = "block";
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