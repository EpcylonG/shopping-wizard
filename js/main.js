const mainImg = document.querySelector(".main-img");
const linealImgs = document.querySelector(".lineal-imgs");

mainImg.setAttribute("src","assets/img/magnetic-bottle/1-magnetic.jpg");
mainImg.setAttribute("width","600px");
mainImg.setAttribute("height","600px");


for(let i = 1; i < 7; i++){
    createImage(i);
}

function createImage(i){
    const linealImg = document.createElement("img");
    linealImg.setAttribute("class","lineal-img");
    linealImg.setAttribute("width","100px");
    linealImg.setAttribute("height","100px");
    linealImg.setAttribute("src","assets/img/magnetic-bottle/" + i + "-magnetic.jpg");
    linealImgs.appendChild(linealImg); 
}

const linealImgHover = document.querySelectorAll(".lineal-img");

for(let img of linealImgHover){
    img.addEventListener("mouseenter", function( event ) {
        setImg(event.target.src);
    }, false);
    img.addEventListener("mouseleave", function( event ) {
        setImg("assets/img/magnetic-bottle/1-magnetic.jpg");
    }, false);
}

function setImg(src){
    mainImg.setAttribute("src", src);
}