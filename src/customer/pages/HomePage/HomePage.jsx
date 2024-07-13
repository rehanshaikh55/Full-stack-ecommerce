import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import HeroFirst from '../../components/HeroFirst/HeroFirst'
import { mens_kurta } from '../../../data/kurta'

import Footer from '../../components/footer/footer.jsx'
import HomeParallex from '../../components/HomePage2/HomeParallex.jsx'
import Header from '../../components/header/header.jsx'
import Model from '../../components/threeDmodel/Model.jsx'
import { Analytics } from "@vercel/analytics/react"

const HomePage = () => {
  return (
    <div className=''>
      <Analytics />
      <Header  />
      {/* <HomeParallex/> */}
      <HeroFirst />
     <Model />
      {/* <MainCarousel /> */}
      <div className=' py-10 space-y-10 flex flex-col px-3'>
       <HomeSectionCarousel data={mens_kurta} sectionName="Mens Wear" />
       <HomeSectionCarousel  data={mens_kurta} sectionName="xyz" />
       <HomeSectionCarousel  data={mens_kurta}sectionName="xyz" />
       <HomeSectionCarousel  data={mens_kurta} sectionName="xyz"/>
       <HomeSectionCarousel  data={mens_kurta}sectionName="xyz" />
      </div>
      
           </div>
  )
}

export default HomePage
