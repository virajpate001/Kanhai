import React from "react";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";
import ab from "../img/ab.webp"

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
              src={ab}
              alt="kanahi Homestay"
            />
          </div>
          <div className="w-full pl-0 text-center md:text-left md:w-1/2 md:pl-12">
            <span className="mb-2 block text-sm font-normal uppercase tracking-widest text-orange-400">
            Welcome to
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-wide text-font-blue font2">
            Kanhai Homestay & Restaurant
            </h2>

            <p className="mb-3 text-base text-slate-600">Kanhai Homestay, your serene retreat in the picturesque village of Diveagar. Nestled in the heart of nature, our homestay offers the perfect blend of comfort and authenticity. We provide both AC and Non-AC rooms, ensuring a cozy stay for all our guests.</p>
            <p className="mb-3 text-base text-slate-600">As an MTDC-registered homestay (Reg. No. 156/2022), we take pride in offering quality services, including delicious home-cooked meals for breakfast, lunch, and dinner. Savor a variety of traditional dishes, including fresh fish and chicken specialties, crafted to make your stay even more memorable.</p>
            <p className="mb-3 text-base text-slate-600">Diveagar, known for its pristine six-kilometer-long beach and the Suvarna Ganesha temple, is a beloved destination for nature and history enthusiasts alike. Explore the nearby attractions such as Roopnarayan Temple, Aravi Beach, and Harihareshwar to immerse yourself in the rich cultural and natural heritage of the region.</p>
            <p className="mb-3 text-base text-slate-600">At Kanhai Homestay, we aim to make your stay relaxing, enjoyable, and unforgettable. Let the tranquil charm of Diveagar and our warm hospitality create memories you’ll cherish forever.</p>

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
