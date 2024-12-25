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

lettera.addEventListener("click", function (){checkLetter("a"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterb.addEventListener("click", function (){checkLetter("b"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterc.addEventListener("click", function (){checkLetter("c"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterd.addEventListener("click", function (){checkLetter("d"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
lettere.addEventListener("click", function (){checkLetter("e"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterf.addEventListener("click", function (){checkLetter("f"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterg.addEventListener("click", function (){checkLetter("g"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterh.addEventListener("click", function (){checkLetter("h"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letteri.addEventListener("click", function (){checkLetter("i"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterj.addEventListener("click", function (){checkLetter("j"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterk.addEventListener("click", function (){checkLetter("k"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterl.addEventListener("click", function (){checkLetter("l"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterm.addEventListener("click", function (){checkLetter("m"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
lettern.addEventListener("click", function (){checkLetter("n"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
lettero.addEventListener("click", function (){checkLetter("o"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterp.addEventListener("click", function (){checkLetter("p"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterq.addEventListener("click", function (){checkLetter("q"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterr.addEventListener("click", function (){checkLetter("r"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letters.addEventListener("click", function (){checkLetter("s"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
lettert.addEventListener("click", function (){checkLetter("t"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letteru.addEventListener("click", function (){checkLetter("u"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterv.addEventListener("click", function (){checkLetter("v"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterw.addEventListener("click", function (){checkLetter("w"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterx.addEventListener("click", function (){checkLetter("x"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
lettery.addEventListener("click", function (){checkLetter("y"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});
letterz.addEventListener("click", function (){checkLetter("z"); this.style.backgroundColor = "red"; this.style.pointerEvents = "none";});

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