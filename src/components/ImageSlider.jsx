import {useEffect, useState} from "react";

export default function ImageSlider () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageModules = import.meta.glob('../assets/photo-gallery/*.webp', {eager: true});
      const importedImages = Object.values(imageModules).map((module) => module.default);
      setImages(importedImages);
    };

    importImages();
  }, []);

  const [imageIndex, setImageIndex] = useState(0); // current index
  const imagesLenght = images.length - 1;

  function showNextImage() {
    setImageIndex(index => {
      if (index === imagesLenght) return 0 // loop images, get first image
      return index + 1;
    })
  }

  function showPreviousImage() {
    setImageIndex(index => {
      if (index === 0) return imagesLenght // loop images, get last image
      return index - 1;
    })
  }

  return (
    <>
      <button onClick={toggleModal} className="btn">Pokreni galeriju</button>

      {modal && (
        <div className="modal padding-image-gallery">
          <div className="image-slider">
            <img className="image-slider__img" src={images[imageIndex]} alt=""/>
            <button onClick={showPreviousImage} className="image-slider__btn image-slider__btn--left"><i className="icon-arrow_left"></i></button>
            <button onClick={showNextImage} className="image-slider__btn image-slider__btn--right"><i className="icon-arrow_left flip-x"></i></button>
          </div>
        </div>
      )}
    </>
  )
}