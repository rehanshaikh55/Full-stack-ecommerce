import React from 'react'
import { Parallax } from 'react-parallax'
import cloth1 from '../../../assets/cloth1.jpg'
import cloth2 from '../../../assets/cloth2.jpg'
import cloth3 from '../../../assets/cloth3.png'
const HomeParallex = () => {
  return (
    <div>
       <Parallax strength={600} bgImage={cloth3}>
        <div className="content sm:h-full">
          <div className=" absolute top-[23%] left-[50%] py-[5px] px-[15px] translate-x-[-50%] translate-y-[-50%] text-base font-semibold text-center lg:text-3xl"> Welcome to Glintglam - Where Elegance Meets Contemporary
                  Confidence!</div>
        </div>
      </Parallax>
       <Parallax strength={600} bgImage={cloth2}>
        <div className="content">
          <div className="text2 absolute top-[50%] left-[50%] rounded-xl py-6 px-6 translate-x-[-50%] translate-y-[-50%] lg:text-3xl text-base text-center font-semibold backdrop-blur-lg"> Step into the world of refined style and unmatched
                  sophistication with Glintglam</div>
        </div>
      </Parallax>
       <Parallax strength={600} bgImage={cloth1}>
        <div className="content">
          <div className="absolute top-[50%] left-[50%] py-[5px] px-[15px] translate-x-[-50%] translate-y-[-50%]">Blur</div>
        </div>
      </Parallax>
    </div>
  )
}

export default HomeParallex
