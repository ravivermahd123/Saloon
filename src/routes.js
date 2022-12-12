import React from 'react'
import {  Routes, Route } from "react-router-dom";
import About from './Component/Main/About';
import Contact from './Component/Main/Contact';
import Home from './Component/Main/Home';
import Service from './Component/Main/Service';
import Pricing from './Component/Pricing';
import Team from './Component/Team';
import WoringTime from './Component/WoringTime';
import Page_404 from './Component/Page_404';
import Testimonial from './Component/Testimonial';


export default function RoutesFolder() {
  return (
    <div>
       
        <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/contact" element={<Contact/>} />

                 {/* Pricing */}
                 <Route path="/pricing" element={<Pricing/>} />
                 <Route path="/team" element={<Team/>} />
                 <Route path="/woringtime" element={<WoringTime/>} />
                 {/* <Route path="/page_404" element={<Page_404/>} /> */}
                 <Route path="/testimonial" element={<Testimonial/>} />
                 

        </Routes>
    </div>
  )
}
