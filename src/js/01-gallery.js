// Add imports above this line
import '../css/01-gallery.css'
import '../css/common.css'
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

let openOriginalImage;

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.addEventListener('keydown', onPressEscToCloseImage);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

console.log(createGalleryCardMarkup(galleryItems));

function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
              </a>`
    }).join('');
}


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    scrollZoom: false,
});


function onPressEscToCloseImage(event) {
    if (event.code !== 'Escape') {
        return;
    }
    openOriginalImage.close();
}