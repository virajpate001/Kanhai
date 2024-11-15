import React from 'react'
import Banner from '../componants/Banner'
import Aboutresort from '../componants/Aboutresort'
import Facilities from '../componants/Facilities'
import Videossection from '../componants/Videossection'
import Roomslider from '../componants/Roomslider'
import Galleryslider from '../componants/Galleryslider'
import Contact from '../componants/Contact'
import Footer from '../componants/Footer'

const Home = () => {
  return (
    <div >
     <Banner/>
     <Aboutresort/>
     <Facilities/>
     <Videossection/>
     <Roomslider/>
     <Galleryslider/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
