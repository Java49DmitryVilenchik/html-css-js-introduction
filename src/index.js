/*alert("Warning! Working JavaScript!");*/
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");

const detailsFrame=document.querySelector(".details-frame"); /*  my cod  */
const detailsAnchor=document.querySelector(".details-anchor"); 

const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML=anchor.getAttribute('data-details-title');
    detailsAnchor.setAttribute("details-url", anchor.getAttribute('data-details-url'));
}
for(let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("on click", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
detailsFrame.addEventListener("click", function() { /*   my cod     */  
    
    window.open(detailsAnchor.getAttribute('details-url'));   
   
})

function showDetails() {
    detailsAnchor.setAttribute("details-url", "#");
    
    mainClass.classList.remove(HIDDEN);
    
}
function hideDetails() {
    detailsAnchor.setAttribute("details-url", "#");
    
    mainClass.classList.add(HIDDEN);
    
}