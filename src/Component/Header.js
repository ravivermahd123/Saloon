import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to ="/ " className="navbar-brand ms-4 ms-lg-0">
            <h1 className="mb-0 text-primary text-uppercase fw-bold"><i className="fa fa-cut me-3"></i>Raj</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to ="/" className="nav-item nav-link active">Home</Link>
                <Link to ="/about" className="nav-item nav-link">About</Link>
                <Link to ="/service" className="nav-item nav-link">Service</Link>
                <div className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                        <Link to ="/pricing" className="dropdown-item">Pricing Plan</Link>
                        <Link to ="/team" className="dropdown-item">Our Barber</Link>
                        <Link to ="/woringtime" className="dropdown-item">Working Hours</Link>
                        <Link to ="/testimonial" className="dropdown-item">Testimonial</Link>
                        <Link to ="/page_404" className="dropdown-item">404 Page</Link>
                    </div>
                </div>
                <Link to ="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to ="/" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
    </div>
  )
}
