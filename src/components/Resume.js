import React from 'react'
import PropTypes from 'prop-types'

const Resume = props => {
    return (
        <div>
            <section id="resume" class="resume" style={{ marginTop: '-80px' }}>
                <div class="container">

                    <div class="section-title" style={{ marginBottom: '-40px' }}>
                    <h2>Digital Resume</h2>
                    </div>
                    <div class="row">
                    <div class="col-lg-6" data-aos="fade-up">
                        <h3 class="resume-title">Summary</h3>
                        <div class="resume-item pb-0">
                        <h4>Samantha Toll</h4>
                        <p><em>Passionate Computer Science student with a strong foundation in math, programming logic, and development across many platforms. Seeking to leverage my social skills, teamwork experience, competitive nature and creativity in the development world to inspire myself and others to accomplish the impossible.</em></p>
                        <ul>
                            <li>1028 N Hamilton St, Spokane WA, 99202</li>
                            <li>(425) 985-4543</li>
                            <li>samanthatoll.com</li>
                        </ul>
                        </div>

                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                        <h4>Bachelor of Computer Science &amp; Minor in Management Information Systems</h4>
                        <h5>2018 - PRESENT</h5>
                        <p><em>Gonzaga university, Spokane WA</em></p>
                        <p>Currently a Junior pursuing a bachelors in Computer Science. 3.8 GPA Fall 2020.</p>
                        </div>
                        <div class="resume-item">
                        <h4>High School Degree</h4>
                        <h5>2014 - 2018</h5>
                        <p><em>Eastside Catholic High School, Sammamish WA</em></p>
                        <p>Achieved a 3.6 GPA at private school ECHS in Sammamish, WA. Achieved A in AP Computer Science and was a member of coding club. Was a 4-year varsity letter in Women's Soccer and captain of the team senior year. Set school record for number of goals scored in a season.</p>
                        </div>

                        <h3 class="resume-title">Soft Skills</h3>
                        <div class="resume-item pb-0">
                            <div style={{ maxWidth: '50%' }}>
                                <ul>
                                    <li>Stroke work ethic, perserverance</li>
                                    <li>Adaptability</li>
                                    <li>Quick Learner</li>
                                    <li>Time Management</li>
                                </ul>
                            </div>
                            <div style={{ float: 'right', maxWidth: '50%', marginTop: '-150px', marginRight: '80px' }}>
                                <ul>
                                    <li>Creative</li>
                                    <li>Competetive</li>
                                    <li>Versatiliy / Flexibility</li>
                                    <li>Teamwork</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 class="resume-title">Experience</h3>
                        <div class="resume-item">
                        <h4>Division 1 Athlete</h4>
                        <h5>2018 - PRESENT</h5>
                        <p><em>Gonzaga University, Spokane WA </em></p>
                        <ul>
                            <li>Walked onto Gonzaga's D1 Women's Rowing Team my Freshman year of college after having to leave the D1 soccer team due to a career-ending injury.</li>
                            <li>Worked hard to quickly become one of the top contenders. </li>
                            <li>Demonstrated perseverance and adaptability as new member of varsity D1 team in a sport never attempted before</li>
                            <li>Won WCC Championships and went on to race in NCAA championships</li>
                            <li>25+ weekly hour commitment</li>
                        </ul>
                        </div>
                        <div class="resume-item">
                        <h4>Kreative Zings Founder</h4>
                        <h5>2019 - PRESENT</h5>
                        <p><em>Self-Employed Selling Creative Artwork</em></p>
                        <ul>
                            <li>Combined passion for art with technical skills to start kreativezings.com</li>
                            <li>Improved time management and leadership skills</li>
                            <li>Design, produce, run business, and sell stickers online</li>
                        </ul>
                        </div>
                        <div class="resume-item">
                            <h4>Mod Pizza</h4>
                            <h5>2020 - PRESENT</h5>
                            <p><em>Squad Member at Mod Pizza in Spokane, WA </em></p>
                            <ul>
                                <li>Squad member at mod pizza where I work hard to represent our motto of “People before Pizza”</li>
                                <li>Improved my communication and teamwork skills</li>
                                <li>Leveraged my own personal knowledge to continually push to better myself and those around me</li>
                                <li>Learned to work in fast-pace and high-pressure environment</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                </div>
                </section>
                <section id="skills" class="skills section-bg" style={{ marginTop: '-60px' }}>
                <div class="container">

                    <div class="section-title">
                    <h2>Hard Skills</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div class="row skills-content">

                    <div class="col-lg-6" data-aos="fade-up">

                        <div class="progress">
                        <span class="skill">HTML <i class="val">90%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">CSS <i class="val">75%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">JavaScript <i class="val">80%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">React <i class="val">80%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">Full Stack Development with MERN Stack (MongoDB, Express.js, React.js, Node.js) <i class="val">78%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">Windows / PC <i class="val">80%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                        </div>
                        </div>

                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div class="progress">
                        <span class="skill">Java <i class="val">70%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">Python <i class="val">95%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">C++ <i class="val">55%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: '55%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">Swift <i class="val">90%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">x86 Assembly <i class="val">25%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                        </div>
                        </div>

                        <div class="progress">
                        <span class="skill">MacOS / iOS <i class="val">95%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                        </div>
                        </div>

                    </div>

                    </div>
                </div>
            </section>
            <section id="coursework" className="container">
                    <div class="section-title">
                        <h2>Relevent Coursework</h2>
                        <p>Below are my coursework I have deemed relevent and applicable to the industry at this time, along with a slight description!</p>
                    </div>
                    <div>
                        <ul>
                            <li><b>Computer Science 1 &amp; 2: </b> learned fundemental concepts crutial to Computer Science, C++</li>
                            <li><b>Algorithm &amp; Abstract Data Structures: </b> learned crutial algorithms written by hand, C++</li>
                            <li><b>Software Development: </b> Focused on OOP Programming in order to gain fundemental concepts of software development, Java.</li>
                            <li><b>Computer Organization: </b> used assembly language to learn about computers on a low functioning level, x86 Assembly.</li>
                            <li><b>Human Computer Interaction: </b> learned about development from the UX side. Researched and designed products that would improve our community.</li>
                            <li><b>Web Development: </b> used HTML, CSS and Javascript to learn how to develop mature web applications. Used MERN Stack for final project (self-taught).</li>
                            <li><b>iOS App Development: </b> learned how to use XCode and Swift in order to develop iPhone, iPad and MacOS applications, Swift.</li>
                            <li><b>Data Science Algorithms: </b> learned all about algorithms commonly used in data science andwas challenged with coding them from scratch. Used self-written data algorithms to classify large data sets, Python. </li>
                            <li><b>Software Research Development: </b> independent study course with advisor Scott Broder. Spend about 15 hours a week coding and working towards extremely strong MERN Stack Web Development skills.</li>
                            <li><b>Managment Information System's Courses: </b> completed MIS courses relevent to completing minor and learning more about the business side of Computer Science overall.</li>
                        </ul>
                    </div>
                    {/* <section id="skills" class="skills section-bg" style={{ marginTop: '-60px' }}>
                        
                    </section> */}
            </section>
            <section id="coursework" className="container" style={{ marginTop: '-80px', marginBottom: '-80px' }}>
                    <div class="section-title">
                        <h2>Downloadable Resume</h2>
                        <p>Here is a downloadable copy of my resume! </p>
                    </div>
                    <h3><a href="Samantha_Toll_Resume.pdf" target="_blank">Click here to download Resume PDF</a></h3>
                    
            </section>
        </div>
    )
}

Resume.propTypes = {

}

export default Resume
