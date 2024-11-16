import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import banner2 from "../img/banner2.webp";

const Videossection = () => {
  return (
    <section  style={{ backgroundImage: `url(${banner2})` }} className="relative z-10 overflow-hidden  bg-cover bg-center bg-no-repeat py-32 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-black before:opacity-50 before:before:content-['']">
      <div className="mx-auto w-5/6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font2 text-4xl font-bold text-white">
            <span className="font1 text-7xl">Breathtaking!  </span>  Have You Seen It Yet?
          </h2>
          <p className="mb-8 text-gray-200">Diveagar Beach invites you to experience its pristine six-kilometer shoreline, white sands, and calming waves. Perfect for a peaceful retreat or a fun family getaway, this coastal gem is a must-visit!</p>
          <Link
            to="tel:9765994234"
            className="mt-2 inline-block cursor-pointer rounded-full bg-orange-400 px-4 py-2 text-base capitalize text-white"
          >
            Call Now
            <span className="ml-2">
              <FaLongArrowAltRight className="jello-horizontal text-2xl inline-block p-1 rounded-full bg-white text-orange-400" />
            </span>
          </Link>
        </div>
      </div>

      <div>
        <img
          className="absolute bottom-0 left-0 right-0 m-auto"
          src="https://templates.envytheme.com/ecorik/default/assets/img/shape/white-shape-top.png"
          alt=""
        />
        <img
          className="absolute left-0 right-0 top-0 m-auto"
          src="https://templates.envytheme.com/ecorik/default/assets/img/shape/white-shape-bottom.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Videossection;
