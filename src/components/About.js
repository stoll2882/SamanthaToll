import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div style={{ marginTop: '-80px' }}>
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>Info</h2>
              <p>Hi everyone! My name is Sam Toll and I am a computer science student at Gonzaga University.</p>
            </div>

            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <img src="assets/img/me.JPG" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Computer Science Student &amp; Web Developer.</h3>
                <p class="fst-italic">
                  Hi everyone! My name is Sam Toll and I am a computer science student at Gonzaga University.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 October 1999</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors of Computer Science</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>samanthatoll.com</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(425) 985-4543</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Spokane WA, USA --- Oakville ON, CA</span></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Minor:</strong> <span>Management Information Systems</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sam.x.toll@gmail.com</span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>University:</strong> <span>Gonzaga University</span></li>
                    </ul>
                  </div>
                </div>
                {/* <p>
                  Always looking for new opportunities!
                </p> */}
              </div>
            </div>

          </div>
        </section>
        <section id="facts" class="facts" style={{ marginTop: '-50px' }}>
        <div class="container">
  
          <div class="section-title">
            <h2>Facts</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div class="row no-gutters">
  
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Athlete</strong> division 1 athlete on Gonzaga Women's Rowing Team.</p>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Artwork</strong> a self-employed artist who maintains my own business selling self-made designs.</p>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Music</strong> a music enthusiast who plays guitar, piano and loves to explore and mix music.</p>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                <p><strong>Teamwork / Projects</strong> constantly working on new projects and ideas in teams as well as individually.</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
      </div>
    )
}

About.propTypes = {

}

export default About
