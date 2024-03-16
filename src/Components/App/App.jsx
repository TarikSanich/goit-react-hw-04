import css from './App.module.css';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImages } from '../../image-api';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);


  const handleSearch = newQuery => {
    if (newQuery === searchQuery) {
      return;
    }
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setError(false);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {images.length > 0 && (
            <ImageGallery images={images} onImageClick={openModal} />
          )}
          {isLoading && <Loader />}
          {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
          {selectedImage !== null && (
            <ImageModal
              isOpen={true}
              onRequestClose={closeModal}
              imageUrl={selectedImage.urls.regular}
              imageAlt={selectedImage.alt}
              likes={selectedImage.likes}
              author={selectedImage.user.name}
              description={selectedImage.description}
            />
          )}
        </>
      )}
    </div>
  );
}