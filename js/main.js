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

function readElementArray(elementsArray, i, parent){
    for(let j = 0; j < elementsArray[i].length; j++){
        parent.appendChild(elementsArray[0]);
        if(Array.isArray(elementsArray[i][j])){
            for(let k = 0; k < elementsArray[i][j].length; k++){
                if(Array.isArray(elementsArray[i][j][k])){
                    for(let element of elementsArray[i][j][k]){ elementsArray[i][j][k-1].appendChild(element); }
                } else { elementsArray[i][j-1].appendChild(elementsArray[i][j][k]); }
            }
        } else { elementsArray[0].appendChild(elementsArray[i][j]); }
    }
}


function createPage(id){

    const elements = [elem("div", null, "page is-active"), 
                     [elem("section", "all-product-page"),
                        [elem("section", null, "type-img"), 
                         elem("section", null, "big-img"), 
                         elem("section", "product-info"),
                            [elem("h1", "bottle-name"),
                             elem("pre", "last-p"),
                             elem("h2", "color-name"),
                             elem("section", null, "colors-img"),
                             elem("h2", "size-name"),
                             elem("div", "prize-button"),
                                [elem("button", null, "prize-button"),
                                 elem("button", null, "prize-button"),
                                 elem("button", null, "prize-button"),
                                ],
                             elem("p", null, "product-page"),
                                [elem("button", "first-buy-botton")]
                            ]
                        ]
                    ]
                ];
  
   for(let i = 0; i < elements.length; i++){
       if(Array.isArray(elements[i])) {
           readElementArray(elements[i], i, elements[i-1]);
        }
    }
    sectionPages.appendChild(elements[0]);

    const sectionBigImgElement = document.querySelector(".big-img");
    const sectionColorsImgElement = document.querySelector(".colors-img");
    const sectionTypeImgElement = document.querySelector(".type-img");

    createImage(folderImages[id-2], id, sectionBigImgElement, sectionTypeImgElement);
    createColors(folderImages[id-2], id, sectionColorsImgElement, sectionBigImgElement);
    
    const h1Element = document.querySelector("#bottle-name");
    h1Element.textContent = folderImages[id-2];

    const preElement = document.querySelector("#last-p");
    switch(id) {
        case "2":
            preElement.textContent = "Characteristics:\n\nSingle Layer Stainless Steel Insulation Sports Bottle." + 
                                    "\nStainless steel, without fear of collisions." + 
                                    "\nThick base, vacuum process without noise, maximize the use of space." + 
                                    "\nCarefully polished, burr-free, with the small mouth for easy drinking.";
            break;
        case "3":
            preElement.textContent = "Characteristics:\n\nPortable and durable. Ideal for travel, outdoor activities, car, office, home, school, picnic, hot yoga, hiking, camping, etc." +
                                    "\nMade of 304 stainless steel, vacuum double-layer design, safe, BPA-free and eco-friendly, odorless and easy to clean. It can keep hot or cold water for 12 hours." +
                                    "\nThis vacuum water bottle is also a good container for coffee, juicer, milk, beer, drinks, and daily hydration. The best gift for relatives and friends.";
            break;
        case "4":
            preElement.textContent = "Characteristics:\n\nSuitable for cold water, juice, milk, milk tea, cold drinks, etc." +
                                    "\nEasy to carry, the size fits most car cup holders and bicycle bottle holders." +
                                    "\nA great choice as a gift for friends, classmates and family." +
                                    "\nIt is safe to use, tasteless, beautiful and non-toxic. Provides a relaxed and happy atmosphere.";
            break;
        case "5":
            preElement.textContent = "Characteristics:\n\nStainless steel." +
                                    "\nEco-friendly." +
                                    "\nThermal insulation performance: 6-12 hours.";
            break;
    }
    

    const h2Color = document.querySelector("#color-name");
    h2Color.textContent = "Colors";
    const h2Size = document.querySelector("#size-name");
    h2Size.textContent = "Size";
    const bottleSize = ["330mL", "500mL", "1L"];
    const buttonSizeElement = document.querySelectorAll(".prize-button");
    for(let i = 0; i < buttonSizeElement.length; i++) { buttonSizeElement[i].textContent = bottleSize[i]; }

    const buttonPriceElement = document.querySelector("#first-buy-botton");
    buttonPriceElement.textContent = "Buy";
}

function elem(type, elemId, elemClass){
    const element = document.createElement(type);
    if(elemId != null) element.setAttribute("id", elemId);
    if(elemClass != null) element.setAttribute("class", elemClass);
    return element;
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
//precio