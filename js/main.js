let imageArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const imageListDom = document.querySelector('.image-list');

let sliderContent= "";

for (let i = 0; i < imageArray.length; i++) {
    const imageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imageArray[i]}" />
                            </div>`;

    sliderContent += imageWrapper;
    
    imageListDom.innerHTML =sliderContent
}

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');


nextDom.addEventListener('click', 
    
    function(){

        imagesWrapperDom[activeImage].classList.remove('show')
        activeImage++;
        imagesWrapperDom[activeImage].classList.add('show')
        if (activeImage > imagesWrapperDom.length - 1) {
            imagesWrapperDom[activeImage].classList.remove('show')
            imagesWrapperDom[activeImage] = imagesWrapperDom[1]
            imagesWrapperDom[activeImage].classList.add('show')

        }

    })

    
prevDom.addEventListener('click', 
    
function(){

    imagesWrapperDom[activeImage].classList.remove('show')
    activeImage--;
    imagesWrapperDom[activeImage].classList.add('show')

})