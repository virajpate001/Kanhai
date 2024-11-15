import React from "react";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";

const Aboutresort = () => {
  return (
    <section id="about" className="py-12">
      <div className="mx-auto w-5/6">
        <div className="heading mb-10 text-center">
          <span className="tracking-10 mb-2 block text-sm font-normal uppercase text-orange-400">
            Explore
          </span>
          <h2 className="font2 text-4xl font-bold tracking-wide text-font-blue">
            We are cool to give you pleasure
          </h2>
        </div>

        <div className="flex flex-wrap items-start justify-center">
          <div className="mb-4 w-full md:mb-0 md:w-1/2">
            <img
              className="w-full rounded-md"
              src="https://templates.envytheme.com/ecorik/default/assets/img/explore-img.png"
              alt="kanahi Homestay"
            />
          </div>
          <div className="w-full pl-0 text-center md:text-left md:w-1/2 md:pl-12">
            <span className="mb-2 block text-sm font-normal uppercase tracking-widest text-orange-400">
              About us
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-wide text-font-blue font2">
            Kanhai Homestay & Restaurant
            </h2>

            <p className="mb-3 text-base text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet reprehenderit ratione ad perspiciatis repudiandae iste ipsam temporibus sit quo! Incidunt, necessitatibus fugiat ut dignissimos pariatur odit natus ipsum! Obcaecati iste ipsam temporibus sit quo! Incidunt, necessitatibus Obcaecati iste ipsam temporibus Lorem ipsum dolor sit amet consectetur.</p>
            <p className="mb-3 text-base text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet reprehenderit ratione ad perspiciatis repudiandae iste ipsam temporibus sit quo! Incidunt, necessitatibus fugiat ut dignissimos pariatur odit natus ipsum! Obcaecati iste ipsam temporibus sit quo! Incidunt, necessitatibus Obcaecati iste ipsam temporibus Lorem ipsum dolor sit amet consectetur.</p>
            <p className="mb-3 text-base text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet reprehenderit ratione ad perspiciatis repudiandae iste ipsam temporibus sit quo! Incidunt, necessitatibus fugiat ut dignissimos pariatur odit natus ipsum! Obcaecati iste ipsam temporibus sit quo! Incidunt, necessitatibus Obcaecati iste ipsam temporibus Lorem ipsum dolor sit amet consectetur.</p>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mt-2 inline-block cursor-pointer rounded-full bg-orange-400 px-4 py-2 text-base capitalize text-white"
            >
              View Reviews
              <span className="ml-2">
                <FaLongArrowAltRight className="jello-horizontal text-2xl inline-block p-1 rounded-full bg-white text-orange-400" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutresort;
