const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls){
        this.CarouselContainer = container;
        this.CarouselControls = controls;
        this.CarouselArrray = [...items];
    }

    updateGallery(){
        this.CarouselArrray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
            el.classList.remove('gallery-item-7');
            el.classList.remove('gallery-item-8');
            el.classList.remove('gallery-item-9');
            el.classList.remove('gallery-item-10');
            el.classList.remove('gallery-item-11');
            el.classList.remove('gallery-item-12');
            el.classList.remove('gallery-item-13');
            el.classList.remove('gallery-item-14');
            el.classList.remove('gallery-item-15');
            el.classList.remove('gallery-item-16');
            el.classList.remove('gallery-item-17');
            el.classList.remove('gallery-item-18');
            el.classList.remove('gallery-item-19');
            el.classList.remove('gallery-item-20');
            el.classList.remove('gallery-item-21');
            el.classList.remove('gallery-item-22');
            el.classList.remove('gallery-item-23');
            el.classList.remove('gallery-item-24');
            el.classList.remove('gallery-item-25');
            el.classList.remove('gallery-item-26');
            el.classList.remove('gallery-item-27');
            el.classList.remove('gallery-item-28');
            el.classList.remove('gallery-item-29');
            el.classList.remove('gallery-item-30');
            el.classList.remove('gallery-item-31');
            el.classList.remove('gallery-item-32');
            el.classList.remove('gallery-item-33');
            el.classList.remove('gallery-item-34');
            el.classList.remove('gallery-item-35');
            el.classList.remove('gallery-item-36');
            el.classList.remove('gallery-item-37');
            el.classList.remove('gallery-item-38');
            el.classList.remove('gallery-item-39');
            el.classList.remove('gallery-item-40');
            el.classList.remove('gallery-item-41');
            el.classList.remove('gallery-item-22');
            el.classList.remove('gallery-item-33');
            el.classList.remove('gallery-item-44');
            el.classList.remove('gallery-item-45');
            el.classList.remove('gallery-item-46');
            el.classList.remove('gallery-item-47');
            el.classList.remove('gallery-item-48');
        });

        this.CarouselArrray.slice(0, 48).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        })
    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.CarouselArrray.unshift(this.CarouselArrray.pop());
        }else{
            this.CarouselArrray.push(this.CarouselArrray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.CarouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }



}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();