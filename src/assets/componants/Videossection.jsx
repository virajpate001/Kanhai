import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Videossection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/video-img.jpg')] bg-cover bg-center bg-no-repeat py-32 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-black before:opacity-50 before:before:content-['']">
      <div className="mx-auto w-5/6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font2 text-4xl font-bold text-white">
            <span className="font1 text-7xl">Incredible! </span> Are you coming today
          </h2>
          <p className="mb-8 text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sed obcaecati, magni excepturi, temporibus vero, inventore tenetur assumenda natus sequi labore. Voluptates eligendi dolores quod temporibus aperiam adipisci, quasi reprehenderit. Voluptates eligendi dolores quod temporibus.</p>
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
