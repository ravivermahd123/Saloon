import React from 'react'

export default function Contact_Us() {
  return (
    <div>
         <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-content p-5">
                        <p class="d-inline-block bg-dark text-primary py-1 px-4">Contact Us</p>
                        <h1 class="text-uppercase mb-4">Have Any Query? Please Contact Us!</h1>
                        <p class="mb-4">Get in touch with us & send us message today!</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-transparent" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-transparent" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-transparent" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control bg-transparent" placeholder="Leave a message here" id="message" style={{height: '100px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="h-100" style={{minHeight: '400px'}}>
                        <iframe class="google-map w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3673.9107667611065!2d76.0450298!3d22.9535132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317c2d3c744a7%3A0xe6c7ff9d02b98149!2sPrem%20nagar%20part%202%20dewas!5e0!3m2!1sen!2sin!4v1670325607757!5m2!1sen!2sin"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style={{filter: 'grayscale(100%) invert(92%) contrast(83%)', border: '0'}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
