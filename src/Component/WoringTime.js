import React from 'react'
import w_1 from '../assest/open.jpg'
export default function WoringTime() {
  return (
    <div>
          <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="h-100">
                        <img class="img-fluid h-100" src={w_1} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="bg-content h-100 d-flex flex-column justify-content-center p-5">
                        <p class="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Working Hours</p>
                        <h1 class="text-uppercase mb-4">Professional Barbers Are Waiting For You</h1>
                        <div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Monday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Tuesday</h6>
                                <span class="text-uppercase text-primary">Closed</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Wednesday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Thursday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Friday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between py-2">
                                <h6 class="text-uppercase mb-0">Sat / Sun</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
