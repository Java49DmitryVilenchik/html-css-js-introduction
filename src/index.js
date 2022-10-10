alert("Warning! Working JavaScript!");
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");

const detailsAnchor=document.querySelectorAll(".details-anc");  /*  my cod  */

function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML=anchor.getAttribute('data-details-title');
}
for(let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("on click", anchors[i]);
        setDetails(anchors[i]);
    })
}
detailsImage.addEventListener("click", function() { /*   my cod     */
    alert("on click details image");
    
    /*window.location.href="https://en.wikipedia.org/wiki/Money";*/
    let a=detailsTitle.innerHTML;
    alert(a);
    if (a=="Electrum coin")
    window.open("https://en.wikipedia.org/wiki/Stater","_blank");
    else window.open("https://en.wikipedia.org/wiki/Money","_blank");
})