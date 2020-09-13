import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
	<section id="home-section" className="hero">
          <div className="home-slider  owl-carousel">
            <div className="slider-item ">
              <div className="overlay" />
              <div className="container">
                <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                  <div className="one-third order-md-last img" style={{backgroundImage: 'url(images/IMG_4494-removebg.png)'}}>
                    <div className="overlay" />
                  </div>
                  <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text">
                      <span className="subheading">Hello</span>
                      <h1 className="mb-4 mt-3">I'm <span>Sarah Dykstra</span></h1>
                      <h2 className="mb-4">A Biomedical </h2>
                      <h2 className="mb-4">Engineering Student</h2>
                      <p><a href="#contact-section" className="btn-custom">Contact Me</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)
}
}