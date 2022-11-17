const words = ["pappy", "beach", "apple", "react", "basis",
 "anger", "hello"];
 const questions = ["question 1?", "question 2?", "question 3?", "question 4?", "question 5?", "question 6?", "question 7?"];
let word;

var N_LETTERS = 0;
var QUESTION=questions[0];
var INDEX=0;

const sectionElement=document.querySelector(".word-guess")
sectionElement.innerHTML=getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialsElement = document.querySelector(".guess-trials");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");
const questionElement = document.querySelector("question");

const INITIAL_TRIALS = 6;
let trials = INITIAL_TRIALS;

function getDivsElements() {
    INDEX=Math.floor(Math.random() * words.length);
    let wordField=words[INDEX];
    //QUESTION=questions[INDEX];
    
    let wordFieldAr=Array.from(wordField);
    N_LETTERS=wordFieldAr.length;
    let res=wordFieldAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');

}
function showTrialsMessage(trials) {
    
        trialsElement.innerHTML = `remained ${trials} guess trials and ${QUESTION} and word ${words[INDEX]}`;
       
   
}
function startGame() {
    //letterElements[2].style.background="white";
    letterElements.forEach(function(e){
        e.style.background='black';
    })
    QUESTION=questions[INDEX];

    //let index = Math.floor(Math.random() * words.length);
    word = words[INDEX];
    trials = INITIAL_TRIALS
    showTrialsMessage(trials);    

    gameOverElement.innerHTML ='';
    playAgainElement.style.display='none';
    
    //letterElements.forEach(e => e.innerHTML='')
}
function onChange(event) {
    const wordGuess = event.target.value;
    trials--;
    showTrialsMessage(trials);
    
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)

        const colors = wordAr.map((l, i) => {
             let index = word.indexOf(l);
             let res = 'black';
            if (index  > -1) { //letterElements[index].style.background='white'; res='green';
                // if (l==word[i]) {res='green';} else {res='yellow'}
               res = l == word[i] ? 'green' : 'yellow'
               // if (l==word[i] || word[i]==l) {res='white';} //else if (word[i]==l) 
                
            }
            return res;
        })
        colors.forEach((c, i) =>
        letterElements[i].style.background=c)
    }
    const res = wordGuess == word;
    if (trials == 0 || res) {
        endGame(res);
    }
    
}
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML =  "Congratulations you are winner";
        gameOverElement.style.color = "green"
    } else {
        gameOverElement.innerHTML =  "Sorry you are loser";
        gameOverElement.style.color = "red"
    }
   
   playAgainElement.style.display='block';
   trialsElement.innerHTML = ''
}
startGame()