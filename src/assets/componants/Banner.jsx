import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../img/banner1.webp'
import {
	FaEnvelope,
	FaMobile,
	FaMapMarkedAlt,
	FaFacebookF,
	FaInstagram,
	FaTwitter
} from 'react-icons/fa'

const Banner = () => {
  return (
    <section id="banner">
    <div
        style={{ backgroundImage: `url(${banner1})` }}
        className="relative m-auto w-full bg-cover bg-center bg-no-repeat text-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-70"
    >
        <div className="relative py-20 md:py-40">
            <h2 className="mb-6 text-3xl text-orange-300 font2">
                Welcome To
            </h2>
            <h1 className="font1 mb-6 text-5xl font-bold text-white md:text-9xl tracking-in-expand">
            Kanhai Homestay
            </h1>
            <div className="font2 m-auto mb-6 flex max-w-max flex-col flex-wrap items-start gap-4 py-3 text-white md:flex-row md:justify-center">
                <div>
                    <FaEnvelope className="inline-block text-3xl rounded-lg bg-orange-400 p-2 jello-horizontal" />
                    <Link
                        to="mailto:kanhaiholiday@gmail.com"
                        className="ml-2 text-xl text-white"
                    >
                     kanhaiholiday@gmail.com
                    </Link>
                </div>
                <div>
                    <FaMobile className="inline-block text-3xl rounded-lg bg-orange-400 p-2 jello-horizontal" />

                    <Link
                        to="tel:+918983534184"
                        className="ml-2 text-xl text-white"
                    >
                        +918983534184
                    </Link>
                </div>
                <div>
                    <FaMapMarkedAlt className="inline-block text-3xl rounded-lg bg-orange-400 p-2 jello-horizontal" />

                    <Link
                        to="https://maps.app.goo.gl/ZV7zbX8y6XiCjtKE6"
                        target="blank"
                        className="ml-2 text-xl text-white"
                    >
                       Diveagar, Maharashtra, India
                    </Link>
                </div>
            </div>

            <ul className="flex justify-center gap-2">
                <li>
                    <Link to="https://facebook.com/" target="blank">
                        <FaFacebookF className="text-3xl rounded-full bg-black p-2 text-white jello-horizontal hover:bg-white hover:text-black" />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/kanhai_homestay_diveagar/" target='_blank'>
                        <FaInstagram className="text-3xl rounded-full bg-black p-2 text-white jello-horizontal hover:bg-white hover:text-black" />
                    </Link>
                </li>
                <li>
                    <Link to="https://twitter.com/">
                        <FaTwitter className="text-3xl rounded-full bg-black p-2 text-white jello-horizontal hover:bg-white hover:text-black" />
                    </Link>
                </li>
            </ul>

            <div className="white-shape absolute bottom-0 left-0 z-10">
                <img
                    src="https://templates.envytheme.com/ecorik/default/assets/img/home-one/slider/white-shape.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner
