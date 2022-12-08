import React from 'react'
import s1 from "../assest/haircut.png"
import s2 from "../assest/beard-trim.png"
import s3 from "../assest/mans-shave.png"
import s4 from "../assest/hair-dyeing.png"
import s5 from "../assest/mustache.png"
import s6 from "../assest/stacking.png"

export default function ServicesDetail() {
  return (
    <div>
         <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <p class="d-inline-block bg-content text-primary py-1 px-4">Services</p>
                <h1 class="text-uppercase">What We Provide</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height: '60px'}}>
                            <img class="img-fluid" src={s1} alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Haircut</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height:' 60px'}}>
                            <img class="img-fluid" src={s2} alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Beard Trim</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height: '60px'}}>
                            <img class="img-fluid" src={s3} alt="" />
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Mans Shave</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height: '60px'}}>
                            <img class="img-fluid" src={s4} alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Hair Dyeing</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height: '60px'}}>
                            <img class="img-fluid" src= {s5} alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Mustache</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item position-relative overflow-hidden bg-content d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{width:' 60px', height: '60px'}}>
                            <img class="img-fluid" src={s6} alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Stacking</h3>
                            <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            <span class="text-uppercase text-primary">From &#x20B9; 100</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
