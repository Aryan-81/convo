'use client';

import { useState } from 'react';
import styles from './gallery.module.css';
import ImageModal from './ImageModal';

const images = [
  '/Assets/gallery/1.jpg',
  '/Assets/gallery/2.jpg',
  '/Assets/gallery/3.jpg',
  '/Assets/gallery/4.jpg',
  '/Assets/gallery/5.jpg',
  '/Assets/gallery/6.jpg',
  '/Assets/gallery/7.jpg',
  '/Assets/gallery/8.jpg',
  '/Assets/gallery/9.jpg',
  '/Assets/gallery/10.jpg',
  '/Assets/gallery/11.jpg',
  '/Assets/gallery/12.jpg',
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      <h2 className={styles.galHead}>GALLERY</h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryImage} onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && <ImageModal image={selectedImage} closeModal={closeModal} images={images} />}
    </div>
  );
};

export default Gallery;
