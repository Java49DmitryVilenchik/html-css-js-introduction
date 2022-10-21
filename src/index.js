/*alert("Warning! Working JavaScript!");*/
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");

const detailsFrame=document.querySelector(".details-frame"); /*  my cod  */
const detailsAnchor=document.querySelector("details-anchor"); 

const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML=anchor.getAttribute('data-details-title');
    /*detailsAnchor.setAttribute('details-url', anchor.getAttribute('data-details-url'));*/
}
for(let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("on click", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
detailsFrame.addEventListener("click", function() { /*   my cod     */  
    
    /*window.open(detailsAnchor.getAttribute('details-url'));*/
    let a=detailsTitle.innerHTML;
   let url1="https://en.wikipedia.org/wiki/Stater";
   let url2="https://en.wikipedia.org/wiki/Sovereign_(British_coin)";
   let url3="https://en.wikipedia.org/wiki/Coin";
   let url4="https://en.wikipedia.org/wiki/Banknote";
   let url5="https://en.wikipedia.org/wiki/Money";
    console.log(a);
    switch(a) {
        case "Electrum coin":
            window.open(url1,"_blank");
            break;
        case "Gold sovereign":
            window.open(url2,"_blank");
            break;
        case "Gold coins":
            window.open(url3,"_blank");
            break;
        case "Banknotes":
            window.open(url4,"_blank");
            break;
        default:
            window.open(url5,"_blank");         
    }
   
})

function showDetails() {
    mainClass.classList.remove(HIDDEN);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}