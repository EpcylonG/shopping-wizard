const current_page = document.querySelector('.pages .page.is-active');

const numImages = [5,5,6,6];
const folderImages = ["animal-kingdom-bottle", "magnetic-bottle", "portable-cup-bottle", "smooth-bottle"];

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.nav-list .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            switchPage(page_id);
        });
    }
}

function switchPage (page_id) {
    
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');
    
    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');

    next_page.innerHTML = "";
    if(page_id != 1) createDiv(next_page, numImages[page_id-2], folderImages[next_page.dataset.page-2]);
    
}

function createDiv(page, id, folder){
    const divElement = document.createElement("div");
    const selectionElement = document.createElement("selection");
    const imgMainElement = document.createElement("img");
    imgMainElement.setAttribute("class","main-img");
    imgMainElement.setAttribute("width","600px");
    imgMainElement.setAttribute("height","600px");
    selectionElement.appendChild(imgMainElement);
    divElement.appendChild(selectionElement);
    const sectionLinealElement = document.createElement("section");
    sectionLinealElement.setAttribute("class","lineal-imgs");
    
    createImage(folder, id, imgMainElement, sectionLinealElement);

    selectionElement.appendChild(sectionLinealElement);
    divElement.appendChild(selectionElement);
    page.appendChild(divElement);
}

function createImage(folder, id, main, lineal){
    main.setAttribute("src","assets/img/" + folder + "/1.jpg");
    for(let i = 1; i < id; i++){
        const linealImg = document.createElement("img");
        linealImg.setAttribute("class","lineal-img");
        linealImg.setAttribute("width","100px");
        linealImg.setAttribute("height","100px");
        linealImg.setAttribute("src","assets/img/" + folder + "/" + i + ".jpg");
        addListener(linealImg, folder, main);
        lineal.appendChild(linealImg); 
    }
}

function addListener(img, folder, main){
    img.addEventListener("mouseenter", function( event ) {
        setImg(event.target.src, main);
    }, false);
    /*img.addEventListener("mouseleave", function( event ) {
        setImg("assets/img/" + folder + "/1.jpg", main);
    }, false);*/
}

function setImg(src, main){
    main.setAttribute("src", src);
}

//hacer zoom imagen main