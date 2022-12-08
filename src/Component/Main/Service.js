import React from 'react'
import ServicesDetail from '../ServicesDetail'
import Testimonial from '../Testimonial'

export default function Service() {
  return (
    <div>
                    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">SERVICE</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">SERVICE</li>
                </ol>
            </nav>
        </div>
    </div>

    <ServicesDetail/>
    {/* <Testimonial/> */}
    </div>
  )
}
