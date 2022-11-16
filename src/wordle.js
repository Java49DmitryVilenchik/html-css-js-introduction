//const word="green";
// Math.random() * (max - min) + min;

let ArrayWords=["table","world","count","index","green"];
let index=Math.floor(Math.random()*5);
let word=ArrayWords[index];

const N_LETTERS=5;
var count=6;
//const buttonNewGame=document.querySelector("new-game");
const labelAttempt=document.querySelector(".count-attempts");
const letterElements=document.querySelectorAll(".letter-guess");
function onChange(event) {
    const wordGuess=(event.target.value).toLowerCase();
    event.target.value='';
    if (wordGuess.length !=N_LETTERS) {
        alert(`A word ${wordGuess} should contain ${N_LETTERS} letters`)

    } else { 
        const wordAr=Array.from(wordGuess);
        wordAr.forEach((l, i)=> letterElements[i].innerHTML=l)
        const colors = wordAr.map((l,i) => {
            let index=word.indexOf(l);
            //let indexLast=word.lastIndexOf(l);
            let res='red';
            if (index > -1) {
                res=word[i]==l ? 'green' : 'yellow'
                //res=index==i ? 'green' : 'yellow'

               // if (indexLast> -1) {
               //     if (indexLast==i) {res='green';}                    
               // }
            }
            
            return res;
        })
        colors.forEach((c,i) => letterElements[i].style.color=c)
        count--;
         if (wordGuess==word) {
            labelAttempt.style.color='green';
            labelAttempt.textContent='Congratulations - you have guessed word';
            count=6;
        }        
        else if (count==0) {
            labelAttempt.style.color='red';
            labelAttempt.textContent='Sorry – your guess trials have ended up';
            count=6;
            //buttonNewGame.style.visibility='visible';
        } 
        
        else {
            labelAttempt.style.color='blue';
            labelAttempt.textContent=`You have ${count} attempts`; 
        } 
    }    
    
}