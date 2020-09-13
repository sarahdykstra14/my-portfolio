import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
	<section className="ftco-section ftco-project" id="projects-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <span className="subheading">Accomplishments</span>
                <h2 className="mb-4">My Projects</h2>
                <p>Mouse over each image to read about some projects I've done in the past</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="project img ftco-animate img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/data.jpg)'}}>
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>C++ Data Structures Project</h3>
                    <span>- Created functions to implement binary search trees and priority queues from scratch</span><br />
                    <span>- Utilized stacks and queues</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/money.jpg)'}}>
                      <div className="overlay" />
                      <div className="text text-center p-4">
                        <h3>Arthro-Pouch Design Project</h3>
                        <span>- Designed and tested a wallet intended for people with arthritis, utilizing iterative engineering design process</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/pool.jpg)'}}>
                      <div className="overlay" />
                      <div className="text text-center p-4">
                        <h3>Java Pool Application</h3>
                        <span>- Developed an application to run a game of pool using a physics engine</span><br />
                        <span>- Implemented leaderboard using file I/O</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/website.png)'}}>
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>Portfolio Website Project</h3>
                    <span>-Designed and published a website using React and GitHub Pages</span>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/matrix.jpg)'}}>
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>Python EMG Signals</h3>
                    <span>- Utilized pandas and numpy packages to process and display EMG data gathered by a wristband</span><br />
                    <span>- Analyzed features and created functions to identify hand motions with 98% accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)
}
}