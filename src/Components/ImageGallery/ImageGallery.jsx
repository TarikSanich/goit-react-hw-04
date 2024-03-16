import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.galleryContainer}>
      {images.map(image => (
        <li
          className={css.galleryItem}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard src={image.urls.small} alt={image.slug} />
        </li>
      ))}
    </ul>
  );
}