alert("Warning! Working JavaScript!");
const anchors=document.querySelectorAll(".thumbnails-anchor");
const detailsImage=document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");
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
