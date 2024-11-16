import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import whtsapp from '../img/whatsap.png'

import { IoMdArrowDropright } from 'react-icons/io'
import { PiMapPinArea } from 'react-icons/pi'
import { IoIosPhonePortrait } from 'react-icons/io'
import { PiEnvelopeThin } from 'react-icons/pi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'



const Footer = () => {
  return (
    <footer smooth={true} className="relative z-10 bg-[url('https://templates.envytheme.com/ecorik/default/assets/img/footer-bg.jpg')] bg-cover bg-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-black before:opacity-70">
			<div className="mx-auto w-5/6 overflow-x-hidden pt-16 md:pt-28">
				<div className="flex flex-col p-4 md:flex-row">
					<div className="widget1 mb-6 w-full pr-10 md:w-1/4">
						<img src="https://templates.envytheme.com/ecorik/default/assets/img/home-one/logo.jpg" alt="" className="mb-4" />
						<p className="text-slate-300">Experience comfort, hospitality, and the charm of coastal Maharashtra with us!</p>
						<ul className="flex mt-2 gap-2">
							<li>
								<Link to="#" target="_blank">
									<FaFacebookF className="text-3xl rounded-full bg-orange-400 p-2 text-black jello-horizontal hover:bg-white hover:text-black" />
								</Link>
							</li>
							<li>
								<Link to="#" target="_blank">
									<FaInstagram className="text-3xl rounded-full bg-orange-400 p-2 text-black jello-horizontal hover:bg-white hover:text-black" />
								</Link>
							</li>
							<li>
								<Link to="#" target="_blank">
									<FaTwitter className="text-3xl rounded-full bg-orange-400 p-2 text-black jello-horizontal hover:bg-white hover:text-black" />
								</Link>
							</li>
						</ul>
					</div>
					<div className="widget2 mb-6 w-full md:w-1/5">
						<h3 className="mb-4 text-xl font-bold text-white">
							Quick Links
						</h3>
						<ul className="text-slate-300">
							<li className="mb-3">
								<span>
									<IoMdArrowDropright className="inline text-2xl" />
								</span>

								<ScrollLink
									to="about"
									smooth={true}
									duration={500}
								>
									About us
								</ScrollLink>
							</li>
							<li className="mb-3">
								<span>
									<IoMdArrowDropright className="inline text-2xl" />
								</span>
								<ScrollLink
									to="facilities"
									smooth={true}
									duration={500}
								>
									Facilities
								</ScrollLink>
							</li>
							<li className="mb-3">
								<span>
									<IoMdArrowDropright className="inline text-2xl" />
								</span>
								<ScrollLink
									to="rooms"
									smooth={true}
									duration={500}
								>
									Rooms & Services
								</ScrollLink>
							</li>
						
							<li className="mb-3">
								<span>
									<IoMdArrowDropright className="inline text-2xl" />
								</span>
								<ScrollLink
									to="gallery"
									smooth={true}
									duration={500}
								>
									Gallery
								</ScrollLink>
							</li>
							<li className="mb-3">
								<span>
									<IoMdArrowDropright className="inline text-2xl" />
								</span>
								<ScrollLink
									to="contact"
									smooth={true}
									duration={500}
								>
									Contact us
								</ScrollLink>
							</li>
						</ul>
					</div>
					<div className="widget3 mb-6 w-full pr-8 md:w-1/4">
						<h3 className="mb-4 text-xl font-bold text-white">
							Contact us
						</h3>
						<ul>
							<li className="relative mb-4 pl-8 text-slate-200">
								<PiMapPinArea className="absolute left-0 size-6" />
								<span className="block text-base font-semibold text-white">
									Address
								</span>

								<Link target="_blank" to="https://maps.app.goo.gl/ZV7zbX8y6XiCjtKE6">
                                Diveagar, Maharashtra, India- 402404
								</Link>
							</li>
							<li className="relative mb-4 pl-8 text-slate-200">
								<IoIosPhonePortrait className="absolute left-0 size-6" />
								<span className="block text-base font-semibold text-white">
									Phone
								</span>
								<Link className="block" to="tel:+918983534184">
                                +918983534184
								</Link>
								<Link className="block" to="tel:+918983534185">
                                +918983534185
								</Link>
							</li>
							<li className="relative pl-8 text-slate-200">
								<PiEnvelopeThin className="absolute left-0 size-6" />
								<span className="block text-base font-semibold text-white">
									Email
								</span>

								<Link to="mailto:kanhaiholiday@gmail.com">kanhaiholiday@gmail.com</Link>
							</li>
						</ul>
					</div>
					<div className="widget4 mb-6 w-full md:w-1/4">
						<h3 className="mb-4 text-xl font-bold text-white">
							Location
						</h3>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72128.94540794073!2d72.9592978899981!3d18.172631007399293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84fca24d22e33%3A0x81a6717e7a0df401!2sKanhai%20homestay%20and%20restaurant!5e0!3m2!1sen!2sin!4v1717404990816!5m2!1sen!2sin"
							width="400"
							height="200"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							className="rounded"
						></iframe>
					</div>
				</div>
				<div className="border-t border-slate-600 py-4 text-white">
					<p className="text-center">
						©2025 <Link to="#" className=' text-orange-400'>Kanhai Homestay</Link> . Developed by <Link className=' text-orange-400' to="#">DIGITALVAP</Link> 
					</p>
				</div>
			</div>

			<div className="footer-shape">
				<img
					src="https://templates.envytheme.com/ecorik/default/assets/img/shape/white-shape-bottom.png"
					alt=""
					className="absolute left-0 top-0"
				/>
			</div>

			<div>
				<a href="https://wa.me/+918983534184?text=Hi" target="_blank">
					<img
						src={whtsapp}
						className="fixed right-0 bottom-0 z-10 w-20 transition-all animate-bounce"
					/>
				</a>
			</div>
		</footer>
  )
}

export default Footer
