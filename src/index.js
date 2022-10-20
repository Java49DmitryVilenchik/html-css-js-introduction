/*alert("Warning! Working JavaScript!");*/
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");

const detailsFrame=document.querySelector(".details-frame"); /*  my cod  */

const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML=anchor.getAttribute('data-details-title');
}
for(let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("on click", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
detailsFrame.addEventListener("click", function() { /*   my cod     */  

    let a=detailsTitle.innerHTML;
   
    console.log(a);
    switch(a) {
        case "Electrum coin":
            window.open("https://en.wikipedia.org/wiki/Stater","_blank");
            break;
        case "Gold sovereign":
            window.open("https://en.wikipedia.org/wiki/Sovereign_(British_coin)","_blank");
            break;
        case "Gold coins":
            window.open("https://en.wikipedia.org/wiki/Coin","_blank");
            break;
        case "Banknotes":
            window.open("https://en.wikipedia.org/wiki/Banknote","_blank");
            break;
        default:
            window.open("https://en.wikipedia.org/wiki/Money","_blank");         
    }
   
})

function showDetails() {
    mainClass.classList.remove(HIDDEN);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}