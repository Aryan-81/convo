// components/ImageModal.js
import { useState } from 'react';
import styles from './gallery.module.css';

const ImageModal = ({ image, closeModal, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(images.indexOf(image));

  const handlePrev = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <span className={styles.close} onClick={closeModal}>&times;</span>
      <img src={images[currentImageIndex]} alt="Enlarged" className={styles.modalImage} />

      <div className={styles.modalNav}>
        <button className={styles.prev} onClick={handlePrev}>&#10094;</button>
        <button className={styles.next} onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageModal;
