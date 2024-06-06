import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ModelView from './ModelView'

const Model = () => {
    const[color,setcolor]=useState("");
    useGSAP(()=>{
         gsap.to('#heading',{y:0,opacity:1,delay:1})
    },[])
  return (
    <section className='common-padding'>
        <div className=' screen-max-width'>
              <h1 id='heading' className=' section-heading'>
                 Smart view for smart customer:
              </h1>
              <div className=' flex flex-col items-center mt-5 px-48 '>
                <div className=' w-[90vw] md:w-[70vw] h-[500px] relative mb-52 md:mb-14'>
                      <ModelView />        
                </div>
              </div>
              
        </div>

    </section>
  )
}

export default Model