import React, { useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const images = [
  {
    src: 'https://images4.alphacoders.com/134/thumb-1920-1347180.png',
    name: 'Sunset Over Mountains',
  },
  {
    src: 'https://img.freepik.com/premium-photo/11h-pink-aesthetic-wallpaper-lockscreen_1097265-93267.jpg',
    name: 'Pink Aesthetic',
  },
  {
    src: 'https://t3.ftcdn.net/jpg/07/92/07/18/360_F_792071873_X4kPTW5DPRQoI27TJAd0edODBEhDSK8K.jpg',
    name: 'Abstract Design',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww',
    name: 'City Lights',
  },
  {
    src: 'https://asset.gecdesigns.com/img/wallpapers/aesthetic-purple-orange-beautiful-nature-desktop-wallpaper-sr10012413-1706503295947-cover.webp',
    name: 'Purple Sunset',
  },
  {
    src: 'https://www.bhmpics.com/downloads/stunning-4k-wallpaper-/24.beeautiful-sunset-illustration-1212023.png.webp',
    name: 'Illustrated Landscape',
  },
  {
    src: 'https://4kwallpapers.com/images/wallpapers/aesthetic-scenery-2560x1440-14711.jpg',
    name: 'Flower Garden',
  },
  {
    src: 'https://img.freepik.com/premium-photo/cat-looking-out-window-sunset_721243-1122.jpg',
    name: 'Cat in Window',
  },
  {
    src: 'https://wallpapers.com/images/hd/purple-and-orange-sunset-aesthetic-mts4vof90tnucfkh.jpg',
    name: 'Pink Night Lights',
  },
  {
    src: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV81M19hX21pbmltYWxfYW5kX2xlc3NfZGV0YWlsX2lsbHVzdHJhdGlvbl9vZl9jYV80MmNlODkyOS00ZGNkLTRhODktYjExMC1kMzRiN2NlODdjYzEuanBn.jpg',
    name: 'Purple Sky',
  },
];

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState({});
  
    const openModal = (img) => {
      setCurrentImage(img);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setCurrentImage({});
    };
  
    const baseSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
      ],
    };
  
    const carouselSettings = [
      { ...baseSettings, autoplay: true, autoplaySpeed: 1000 }, 
      { ...baseSettings, autoplay: true, autoplaySpeed: 3000 },
      { ...baseSettings, autoplay: true, autoplaySpeed: 5000 }, 
    ];
  
    return (
      <div className="gallery">
        <h2>Fast Carousel</h2>
        <Slider {...carouselSettings[0]}>
          {images.map((img, index) => (
            <motion.div
              key={`fast-${index}`}
              className="image-container"
              onClick={() => openModal(img)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img.src} alt={img.name} />
              <p className="image-name">{img.name}</p>
            </motion.div>
          ))}
        </Slider>
  
        <h2>Medium Carousel</h2>
        <Slider {...carouselSettings[1]}>
          {images.map((img, index) => (
            <motion.div
              key={`medium-${index}`}
              className="image-container"
              onClick={() => openModal(img)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img.src} alt={img.name} />
              <p className="image-name">{img.name}</p>
            </motion.div>
          ))}
        </Slider>
  
        <h2>Slow Carousel</h2>
        <Slider {...carouselSettings[2]}>
          {images.map((img, index) => (
            <motion.div
              key={`slow-${index}`}
              className="image-container"
              onClick={() => openModal(img)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img.src} alt={img.name} />
              <p className="image-name">{img.name}</p>
            </motion.div>
          ))}
        </Slider>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <img
            src={currentImage.src}
            alt={currentImage.name}
            className="modal-image"
          />
          <p className="modal-image-name">{currentImage.name}</p>
        </Modal>
      </div>
    );
  };
  
  export default Gallery;
