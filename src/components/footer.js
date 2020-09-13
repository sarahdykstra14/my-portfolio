import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
	<footer className="ftco-footer ftco-section" id="contact-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Interested in Hiring Me?</h2>
                  <p>I'm currently looking for a co-op position for January-April 2020 in a variety of fields. Please send me an email if you'd like to chat!</p>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Areas of Interest</h2>
                  <ul className="list-unstyled">
                    <li><span className="icon-long-arrow-right mr-2" />Software</li>
                    <li><span className="icon-long-arrow-right mr-2" />Web Development</li>
                    <li><span className="icon-long-arrow-right mr-2" />Design</li>
                    <li><span className="icon-long-arrow-right mr-2" />Data Analysis</li>
                    <li><span className="icon-long-arrow-right mr-2" />Project Management</li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Contact Me</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-phone" /><span className="text">+1 519 362 4796</span></li>
                      <li><span className="icon icon-envelope" /><span className="text">s3dykstr@uwaterloo.ca</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
	)
}
}