import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-12">
    <div className="mx-auto w-5/6">
        <div className="heading mb-10 text-center">
            <span className="tracking-10 mb-2 block text-sm font-normal uppercase text-orange-400">
                Reviews
            </span>
            <h2 className="font2 text-font-blue text-4xl font-bold tracking-wide">
                We are cool to give you pleasure
            </h2>
        </div>
        <div className="flex flex-wrap items-start justify-center">
            <div className="mb-4 w-full overflow-hidden rounded-md md:mb-0 md:w-1/2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72128.94540794073!2d72.9592978899981!3d18.172631007399293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84fca24d22e33%3A0x81a6717e7a0df401!2sKanhai%20homestay%20and%20restaurant!5e0!3m2!1sen!2sin!4v1717404990816!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-full relative pl-0 text-center md:w-1/2 md:pl-12 md:text-left">
                <iframe
                    src="https://7aa26f9a09d64c5aaa375fcc0c902d1c.elf.site"
                    width="100%"
                    height="500px"
                ></iframe>
                <div className="bg-white w-full h-12 bottom-4 md:bottom-3 absolute"></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact
