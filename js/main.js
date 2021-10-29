/*const mainImg = document.querySelector(".main-img");
mainImg.setAttribute("width","600px");
mainImg.setAttribute("height","600px");*/
const linealImgs = document.querySelector(".lineal-imgs");
const current_page = document.querySelector('.pages .page.is-active');

const numImages = [5,5,6,6];

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.nav-list .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');
            console.log("fuera " + page_id);
            switchPage(page_id);
        });
    }
}

function switchPage(page_id) {
    
    current_page.classList.remove('is-active');
    
    const next_page = document.querySelector('.pages .page[data-page="${page_id}"]');

    next_page.classList.add('is-active');

    for(let i = 1; i < numImages[page_id-2]; i++){
        createImage(i);
    }
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