import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
	<section className="ftco-about ftco-counter img ftco-section" id="about-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay" />
                  <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url(images/IMG_2649.jpg)'}}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <span className="subheading">Thanks for checking out my portfolio!</span>
                    <h2 className="mb-4" style={{fontSize: '34px', textTransform: 'capitalize'}}>About Me</h2>
                    <p>I'm a second-year biomedical engineering student at the University of Waterloo. I'm passionate about software development and helping others. I hope to one day work at the intersection of healthcare, design, and technology. In my spare time I love watching hockey, coding, working out!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="media block-6 services d-block ftco-animate">
                      <div className="icon"><span className="flaticon-analysis" /></div>
                      <div className="media-body">
                        <h3 className="heading mb-3">Programming</h3>
                        <p>I have over three years of experience programming, including coursework in object-oriented programming, data structures, and algorithms.</p>
                      </div>
                    </div> 
                  </div>
                  <div className="col-md-6">
                    <div className="media block-6 services d-block ftco-animate">
                      <div className="icon"><span className="flaticon-ideas" /></div>
                      <div className="media-body">
                        <h3 className="heading mb-3">Design</h3>
                        <p>I've completed projects using the iterative design process and am familiar with agile design. I also have experience with prototyping and testing.</p>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                  <div className="text p-4 pr-5 bg-primary">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
  }
}