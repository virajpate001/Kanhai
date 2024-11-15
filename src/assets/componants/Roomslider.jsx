import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const roomData = [
  {
    img: "https://templates.envytheme.com/ecorik/default/assets/img/exclusive/1.jpg",
    discount: "UP TO 30% OFF",
    title: "Room One",
    price: "₹2500/night",
    description: "Swimming doller dolor sit aet odu tur adiing elitse.",
    features: ["AC", "WIFI"],
  },
  {
    img: "https://templates.envytheme.com/ecorik/default/assets/img/exclusive/1.jpg",
    discount: "UP TO 30% OFF",
    title: "Room Two",
    price: "₹3000/night",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    features: ["AC", "WIFI"],
  },
  // Add more rooms here as needed
];

const Roomslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  return (
    <section id="rooms" className="py-12">
      <div className="mx-auto w-5/6">
        <div className="heading mb-10 text-center">
          <span className="tracking-10 mb-2 block text-sm font-normal uppercase text-orange-400">
            Rooms & Services
          </span>
          <h2 className="font2 text-font-blue text-3xl font-bold tracking-wide">
            We are cool to give you pleasure
          </h2>
        </div>
        <Slider {...settings}>
          {roomData.map((room, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-center justify-center rounded-b-3xl shadow-lg md:flex-row">
                <div className="w-full">
                  <img src={room.img} alt={room.title} className="w-full" />
                </div>
                <div className="w-full py-6 md:py-0 px-6">
                  <span className="tracking-wide block text-sm font-normal uppercase text-orange-400">
                    {room.discount}
                  </span>
                  <h3 className="text-font-blue mb-1 text-lg font-bold">
                    {room.title}
                  </h3>
                  <p className="mb-2 text-sm">
                    Starting From{" "}
                    <span className="text-base font-bold">{room.price}</span>
                  </p>
                  <p className="text-sm">{room.description}</p>
                  <div className="my-2 flex gap-3">
                    {room.features.map((feature, i) => (
                      <span key={i} className="text-sm font-medium">
                        <FeatureIcon />
                        <p className="inline-block align-middle">{feature}</p>
                      </span>
                    ))}
                  </div>
                  <Link
                    to="tel:9765994234"
                    className="mt-2 inline-block cursor-pointer rounded-full bg-orange-400 px-4 py-2 text-base capitalize text-white"
                  >
                    Enquiry Now
                    <span className="ml-2">
                      <FaLongArrowAltRight className="jello-horizontal text-2xl inline-block p-1 rounded-full bg-white text-orange-400" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const FeatureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="mr-1 inline-block size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export default Roomslider;
