import React, { useRef } from "react";
import Slider from "react-slick";

const galleryData = [
  {
    img: "https://uniquecraftss.in/wp-content/uploads/2024/10/banner.webp",
  },
  {
    img: "https://uniquecraftss.in/wp-content/uploads/2024/10/banner.webp",
  },
  {
    img: "https://uniquecraftss.in/wp-content/uploads/2024/10/banner.webp",
  },
  {
    img: "https://uniquecraftss.in/wp-content/uploads/2024/10/banner.webp",
  },
  {
    img: "https://uniquecraftss.in/wp-content/uploads/2024/10/banner.webp",
  },
];

const Galleryslider = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: slider2.current,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    dots: true,
    infinite: true,
    focusOnSelect: true,
  };

  return (
    <section id="gallery" className="py-12 overflow-hidden">
      <div className="mx-auto">
        <Slider {...settingsMain} ref={slider1}>
          {galleryData.map((galimg, index) => (
            <div className="w-full" key={index}>
              <img src={galimg.img} alt="Images" />
            </div>
          ))}
        </Slider>
        <Slider {...settingsNav} ref={slider2}>
          {galleryData.map((galimg2, index2) => (
            <div className="w-30" key={index2}>
              <img src={galimg2.img} alt="Thumbnail" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Galleryslider;
