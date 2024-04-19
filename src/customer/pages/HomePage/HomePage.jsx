import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import HeroFirst from '../../components/HeroFirst/HeroFirst'
import { mens_kurta } from '../../../data/kurta'

import Footer from '../../components/footer/footer.jsx'
import HomeParallex from '../../components/HomePage2/HomeParallex.jsx'
const HomePage = () => {
  return (
    <div className=''>
      {/* <HomeParallex/> */}
      <HeroFirst />
      <MainCarousel />
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
