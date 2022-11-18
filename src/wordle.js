
let ArrayWords=["table","notebook","count","pen","magazin"];
let questions = ["question 1? Answer- table", "question 2? Answer- notebook", "question 3? Answer- count", "question 4? Answer- pen", "question 5? Answer-magazin"];

var INDEX=Math.floor(Math.random()*5);
var WORD=ArrayWords[INDEX];
var QUESTION=questions[INDEX];

const sectionElement=document.querySelector(".word-guess")
sectionElement.innerHTML=getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");

const labelQuestion=document.querySelector(".question");
const labelGameOver = document.querySelector(".game-over-message");

const playAgainElement = document.getElementById("play-again");

function getDivsElements() {
    let wordField=WORD;
    let wordFieldAr=Array.from(wordField);    
    let res=wordFieldAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');

}

function showQuestion() {    
    labelQuestion.innerHTML = `You question: ${QUESTION}`;    

}

function startGame() {
    
    letterElements.forEach(function(e){
        e.style.background='black';
    })

    showQuestion();   

    labelGameOver.innerHTML ='';
    

    //letterElements.forEach(e => e.innerHTML='')
}

function onChange(event) {
    const wordGuess=(event.target.value).toLowerCase();
    event.target.value='';
    labelGameOver.innerHTML="Let's go!!! But remember, you must inputs words!!! (else may be little bug)";

    let wordFieldAr=Array.from(WORD); 
    
    const wordAr=Array.from(wordGuess);
    

    const colors=wordFieldAr.map(function(l) {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    
    colors.forEach(function(c,i) {
       if (c=="white") {
            if (letterElements[i].style.background !='white') {
                
                letterElements[i].style.background='white';
            }
        }
    })
    let whiteLetters = colors.filter(i => i === 'white').length;
    let Leng=wordFieldAr.length;
    if (Leng==whiteLetters) {endGame(true); location.reload();}
    
}
function endGame(isSuccess) {
    if (isSuccess) {
        let Message="Congratulations you are winner";
        //labelGameOver.innerHTML =  "Congratulations you are winner";
        //labelGameOver.style.color = "green";
        alert(Message);
    } else {
        labelGameOver.innerHTML =  "Sorry you are loser";
        labelGameOver.style.color = "red"
    }
       
   //trialsElement.innerHTML = ''
}
function startNewGame() {
    location.reload();
}
startGame();
