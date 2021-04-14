import React from 'react'
import PropTypes from 'prop-types'

const Projects = props => {
    return (
        <div style={{ marginTop: '-80px', marginLeft: '50px' }}>
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h2>Projects</h2>
              <p>Hi everyone! My name is Sam Toll and I am a computer science student at Gonzaga University.</p>
            </div>
            <button style={{ backgroundImage: 'url(DeveloperConnect2.png)', backgroundSize: '100% 100%', borderRadius: '30px', width: '90%', height: '600px' }} className='project-button'>
                {/* <img src="DeveloperConnect.png" style={{ width: '800px', borderRadius: '30px'}}></img> */}
            </button>
            <button style={{ backgroundImage: 'url(KreativeZings.png)', backgroundSize: '100% 100%', borderRadius: '30px', width: '90%', height: '600px', marginTop: '50px', outlineStyle: 'none' }} className='project-button'>
                {/* <img src="DeveloperConnect.png" style={{ width: '800px', borderRadius: '30px'}}></img> */}
            </button>
            <button style={{ backgroundImage: 'url(RowEasy.png)', backgroundSize: '100% 100%', borderRadius: '30px', width: '90%', height: '600px', marginTop: '50px', outlineStyle: 'none' }} className='project-button'>
                {/* <img src="DeveloperConnect.png" style={{ width: '800px', borderRadius: '30px'}}></img> */}
            </button>
          </div>
        </section>
        </div>
    )
}

Projects.propTypes = {

}

export default Projects
