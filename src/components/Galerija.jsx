import SectionTitle from "./SectionTitle.jsx";
import galerijaCover from "/src/assets/photo-gallery/image-4.webp"
import {useEffect, useState} from "react";
import ImageSlider from "./ImageSlider.jsx";

export default function Galerija () {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageModules = import.meta.glob('../assets/photo-gallery/*.webp', {eager: true});
      const importedImages = Object.values(imageModules).map((module) => module.default);
      setImages(importedImages);
    };

    importImages();
  }, []);

  return (
    <>
      <section id="galerija">
        <div className="flex-basis-50">
          <SectionTitle title="Galerija" type="fancy"/>
          <p className="margin-bottom-20">
            Naša galerija je mjesto gdje možete pronaći vizualnu inspiraciju za svoj prostor. Slike su pažljivo odabrane
            kako bi prikazale našu stručnost u raznim aspektima uređenja okoliša, od košnje trave i orezivanja voćaka do
            estetskog uređivanja cvjetnih aranžmana.
          </p>
          <p className="margin-bottom-36">
            Pregledajte naše fotografije i otkrijte kako možemo transformirati vašu okućnicu ili vikendicu u oazu mira i
            ljepote.
          </p>
          <ImageSlider/>
        </div>
        <div className="image-container">
          <img src={galerijaCover} alt=""/>
        </div>
      </section>
    </>
  )
}