import React, { useRef } from "react";
import Slider from "react-slick";
import gal6 from "../img/gal6.webp";
import gal1 from "../img/gal1.webp";
import gal2 from "../img/gal2.webp";
import gal3 from "../img/gal3.webp";
import gal4 from "../img/gal4.webp";
import gal5 from "../img/gal5.webp";
import gal7 from "../img/gal7.webp";

const galleryData = [
  {
    img: `${gal6}`,
  },
  {
    img: `${gal1}`,
  },
  {
    img: `${gal3}`,
  },
  {
    img: `${gal4}`,
  },
  {
    img: `${gal2}`,
  },
 
  {
    img: `${gal5}`,
  },
  {
    img: `${gal7}`,
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
