import React from "react";
import { Link } from "react-router-dom";
import { FaAccusoft } from "react-icons/fa";
import { CiGlass } from "react-icons/ci";

const Facilities = () => {
  return (
    <section id="facilities" className="py-12">
      <div className="mx-auto w-5/6">
        <div className="heading mb-10 text-center">
          <span className="tracking-10 mb-2 block text-sm font-normal uppercase text-orange-600">
            FACILITIES
          </span>

          <h2 className="font2 text-4xl font-bold tracking-wide text-font-blue">
            Giving entirely awesome
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="m-2">
            <div className="group border rounded-lg maxgin-x relative z-10 h-full bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/facilities-card-bg.png')] bg-cover bg-center bg-no-repeat px-6 py-8 text-center transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-orange-400 before:opacity-80 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-white after:placeholder-opacity-100 after:shadow-lg after:transition-all after:content-[''] hover:-translate-y-2 hover:text-white hover:after:opacity-0">
              <span className="text-center mx-auto text-4xl mb-2 inline-block">
                <CiGlass className=" text-orange-400 group-hover:text-white" />
              </span>

              <h3 className="mb-2 text-base font-bold">Welcome Water</h3>
              <p className="mb-2  text-base font-normal leading-6 text-gray-500 group-hover:text-white">
                parkn ipsum dolor sit amet, consectetur adiing elit sed do eiu
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="group border rounded-lg maxgin-x relative z-10 h-full bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/facilities-card-bg.png')] bg-cover bg-center bg-no-repeat px-6 py-8 text-center transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-orange-400 before:opacity-80 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-white after:placeholder-opacity-100 after:shadow-lg after:transition-all after:content-[''] hover:-translate-y-2 hover:text-white hover:after:opacity-0">
              <span className="text-center mx-auto text-4xl mb-2 inline-block">
                <CiGlass className=" text-orange-400 group-hover:text-white" />
              </span>

              <h3 className="mb-2 text-base font-bold">Welcome Water</h3>
              <p className="mb-2  text-base font-normal leading-6 text-gray-500 group-hover:text-white">
                parkn ipsum dolor sit amet, consectetur adiing elit sed do eiu
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="group border rounded-lg maxgin-x relative z-10 h-full bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/facilities-card-bg.png')] bg-cover bg-center bg-no-repeat px-6 py-8 text-center transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-orange-400 before:opacity-80 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-white after:placeholder-opacity-100 after:shadow-lg after:transition-all after:content-[''] hover:-translate-y-2 hover:text-white hover:after:opacity-0">
              <span className="text-center mx-auto text-4xl mb-2 inline-block">
                <CiGlass className=" text-orange-400 group-hover:text-white" />
              </span>

              <h3 className="mb-2 text-base font-bold">Welcome Water</h3>
              <p className="mb-2  text-base font-normal leading-6 text-gray-500 group-hover:text-white">
                parkn ipsum dolor sit amet, consectetur adiing elit sed do eiu
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="group border rounded-lg maxgin-x relative z-10 h-full bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/facilities-card-bg.png')] bg-cover bg-center bg-no-repeat px-6 py-8 text-center transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-orange-400 before:opacity-80 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-white after:placeholder-opacity-100 after:shadow-lg after:transition-all after:content-[''] hover:-translate-y-2 hover:text-white hover:after:opacity-0">
              <span className="text-center mx-auto text-4xl mb-2 inline-block">
                <CiGlass className=" text-orange-400 group-hover:text-white" />
              </span>

              <h3 className="mb-2 text-base font-bold">Welcome Water</h3>
              <p className="mb-2  text-base font-normal leading-6 text-gray-500 group-hover:text-white">
                parkn ipsum dolor sit amet, consectetur adiing elit sed do eiu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
