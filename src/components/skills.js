import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
	<section className="ftco-section bg-light" id="skills-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <span className="subheading">Skills</span>
                <h2 className="mb-4">My Skills</h2>
                <p>Here are a few skills I've picked up through courses, co-op, and personal projects:</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Java</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>C++</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>JavaScript</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                      <span>Basic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Python</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                      <span>Basic</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Communication</h3>
                  <div className="progress">
                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box">
                <div className="progress-wrap ftco-animate">
                  <h3>Leadership</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <span className="subheading">What I Do</span>
                <h2 className="mb-4">My Background</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center d-flex ftco-animate">
                <div className="services-1">
                  <div className="desc">
                    <h3 className="mb-5">PASS Inc. - Research and Development (May-Aug 2020)</h3>
                    <h4>- Redesigned website to improve readability</h4>
                    <h4>- Conducted market research and thematic analysis to guide future product development</h4>
                    <h4>- Increased social media following by 10%</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <div className="services-1">
                  <div className="desc">
                    <h3 className="mb-5">St. Paul's University College - Women in Engineering Peer Mentor (Sept 2020-Present)</h3>
                    <h4>- Provide guidance to first-year students to support university transition</h4>
                    <h4>- Organize events to support academics, career development, and wellbeing</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <div className="services-1">
                  <div className="desc">
                    <h3 className="mb-5">City of Guelph - Swim Instructor and Lifeguard (Sept 2017-Aug 2019)</h3>
                    <h4>- Developed lesson plans for classes of up to 10 participants, leading to improved swimming and water safety</h4>
                    <h4>- Communicated with other lifeguards to supervise three separate pools, ensuring all patrons always remain safe</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)
}
}