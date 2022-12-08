import React from 'react'
import About_detail from '../About_detail'
import Footer from '../Footer'
import Header from '../Header'
import Pricing from '../Pricing'
import ServicesDetail from '../ServicesDetail'
import Slider from '../Slider'
import Team from '../Team'
import Testimonial from '../Testimonial'
import WoringTime from '../WoringTime'


export default function Home() {
  return (
    <div>
     
      <Slider />
      <About_detail/>
      <ServicesDetail/>
      <Pricing/>
      <Team/>
      <WoringTime/>
      {/* <Testimonial/> */}
    </div>
  )
}
