/*alert("Warning! Working JavaScript!");*/
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer=document.querySelector(".details-container");

const detailsFrame=document.querySelector(".details-frame"); /*  my cod  */
const detailsAnchor=document.querySelector(".details-anchor"); /* my code */
const detailsAudio=document.querySelector(".details-audio"); /* my cod */

const HIDDEN = "hidden";
const IS_POINT="is-point";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute('data-details-image'));
    detailsAudio.setAttribute('src', anchor.getAttribute('data-details-audio')); /* my code */
    detailsTitle.innerHTML=anchor.getAttribute('data-details-title');
    detailsAnchor.setAttribute("details-url", anchor.getAttribute('data-details-url')); /* */
}
for(let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("on click", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
        detailsAudio.play();    /* my  */
        setTimeout(function() {
            detailsAudio.pause();
        },5000)  /*  my */
    })    
}
detailsFrame.addEventListener("click", function() { /*   my cod     */  
    
    window.open(detailsAnchor.getAttribute('details-url'));   
   
})

function showDetails() {
    detailsAnchor.setAttribute("details-url", "#");
    
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    },1)

}
function hideDetails() {
    detailsAnchor.setAttribute("details-url", "#");     
    mainClass.classList.add(HIDDEN);
   
    window.close();   /*my code -clouse url when press btn hide (it-s not very good) */
}