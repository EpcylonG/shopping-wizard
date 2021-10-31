const current_page = document.querySelector('.pages .page.is-active');
const sectionPages = document.querySelector(".pages");

const numImages = [5,5,6,6];
const folderImages = ["animal-kingdom-bottle", "magnetic-bottle", "portable-cup-bottle", "smooth-bottle"];
let price;

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
    sectionPages.innerHTML = "";
    if(page_id != 1) createPage(page_id, numImages[page_id-2]);
}

function createPage(id, numImages){

    const divElement = document.createElement("div");
    divElement.setAttribute("class", "page is-active");

    const sectionElement = document.createElement("section");
    sectionElement.setAttribute("id", "all-product-page");

    const sectionTypeImgElement = document.createElement("section");
    sectionTypeImgElement.setAttribute("class", "type-img");
    const sectionBigImgElement = document.createElement("section");
    sectionBigImgElement.setAttribute("class", "big-img");
    createImage(folderImages[id-2], id, sectionBigImgElement, sectionTypeImgElement);

    //product-info
    const sectionProductInfoElement = document.createElement("section");
    sectionProductInfoElement.setAttribute("id", "product-info");

    const h1Element = document.createElement("h1");
    h1Element.textContent = folderImages[id-2];

    const pElement = document.createElement("p");
    pElement.textContent = "Characteristics:";
    const pElement2 = document.createElement("p");
    pElement2.textContent = "Portable and durable. Ideal for travel, outdoor activities, car, office, home, school, picnic, hot yoga, hiking, camping, etc."
    const pElement3 = document.createElement("p");
    pElement3.textContent = "Made of 304 stainless steel, vacuum double-layer design, safe, BPA-free and eco-friendly, odorless and easy to clean. It can keep hot or cold water for 12 hours."
    const pElement4 = document.createElement("p");
    pElement4.setAttribute("id", "last-p");
    pElement4.textContent = "This vacuum water bottle is also a good container for coffee, juicer, milk, beer, drinks, and daily hydration. The best gift for relatives and friends."

    pElement.appendChild(pElement2);
    pElement.appendChild(pElement3);
    pElement.appendChild(pElement4);

    const h2ColorsElement = document.createElement("h2");
    h2ColorsElement.textContent = "Colors";

    const sectionColorsImgElement = document.createElement("section");
    sectionColorsImgElement.setAttribute("class", "colors-img");
    createColors(folderImages[id-2], id, sectionColorsImgElement, sectionBigImgElement);
    
    const h2SizesElement = document.createElement("h2");
    h2SizesElement.textContent = "Sizes";

    const divPrizeElement = document.createElement("div");
    divPrizeElement.setAttribute("id", "prize-button");

    const buttonSizeElement1 = document.createElement("button");
    buttonSizeElement1.setAttribute("class", "prize-button");
    buttonSizeElement1.textContent = "330mL";
    const buttonSizeElement2 = document.createElement("button");
    buttonSizeElement2.setAttribute("class", "prize-button");
    buttonSizeElement2.textContent = "500mL";
    const buttonSizeElement3 = document.createElement("button");
    buttonSizeElement3.setAttribute("class", "prize-button");
    buttonSizeElement3.textContent = "1L";

    divPrizeElement.appendChild(buttonSizeElement1);
    divPrizeElement.appendChild(buttonSizeElement2);
    divPrizeElement.appendChild(buttonSizeElement3);

    const pPriceElement = document.createElement("p");
    pElement4.setAttribute("class", "product-page");

    const buttonPriceElement = document.createElement("button");
    buttonPriceElement.setAttribute("id", "first-buy-botton");
    buttonPriceElement.textContent = "Buy";

    pPriceElement.appendChild(buttonPriceElement);

    //product info
    sectionProductInfoElement.appendChild(h1Element);
    sectionProductInfoElement.appendChild(pElement);
    sectionProductInfoElement.appendChild(h2ColorsElement);
    sectionProductInfoElement.appendChild(sectionColorsImgElement);
    sectionProductInfoElement.appendChild(h2SizesElement);
    sectionProductInfoElement.appendChild(divPrizeElement);
    sectionProductInfoElement.appendChild(pPriceElement);
    //

    sectionElement.appendChild(sectionTypeImgElement);
    sectionElement.appendChild(sectionBigImgElement);
    sectionElement.appendChild(sectionProductInfoElement);

    divElement.appendChild(sectionElement);

    sectionPages.appendChild(divElement);

}

function createImage(folder, id, main, lineal){
    const img = document.createElement("img");
    img.setAttribute("src","assets/img/" + folder + "/1.jpg");
    main.appendChild(img);
    for(let i = 0; i < numImages[id-2]; i++){
        const linealImg = document.createElement("img");
        linealImg.setAttribute("class","lineal-img");
        linealImg.setAttribute("width","100px");
        linealImg.setAttribute("height","100px");
        linealImg.setAttribute("src","assets/img/" + folder + "/" + (i+1) + ".jpg");
        addHoverListener(linealImg, img);
        lineal.appendChild(linealImg); 
    }
}

function addHoverListener(img, main){
    img.addEventListener("mouseenter", function( event ) {
        setImg(event.target.src, main);
    }, false);
}

function setImg(src, main){
    main.setAttribute("src", src);
}

function createColors(folder, id, select, main){
    for(let i = 1; i < numImages[id-2]; i++){
        const img = document.createElement("img");
        img.setAttribute("src","assets/img/" + folder + "/" + (i+1) + ".jpg");
        addClickListener(img, main.children[0]);
        select.appendChild(img);
    }
}

function addClickListener(img, main){
    img.addEventListener("click", function( event ) {
        setImg(event.target.src, main);
    }, false);
}

//hacer zoom imagen main