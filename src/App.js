import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import { Fragment } from 'react';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        {/* <Landing /> */}
        <Route exact path="/" component={Landing} />
        <section id="main">
          <Switch>
            <Route exact path ="/about" component={About} />
            <Route exact path ="/resume" component={Resume} />
            <Route exact path ="/contact" component={Contact} />
            <Route exact path ="/projects" component={Projects} />
          </Switch>
        </section>
      </Fragment>
    </Router>
    // <div className="App">
    //   {/* <Landing /> */}
      

    //   <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    //     <div class="hero-container" data-aos="fade-in">
    //       <h1>Alex Smith</h1>
    //       <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    //     </div>
    //   </section>

    //   <main id="main">
    //     <About />
    //   </main>
    //   {/* <Router>
    //     <NavBar />
    //   </Router>
    //   <Landing /> */}
    //   {/* <header className="App-header" style={{ backgroundImage: 'url(TechBackground.jpg)', maxWidth: '100vw', maxHeight: "100vh" }} >
    //     <h1>Samantha Toll</h1>
    //     <h2>Thank you for visiting my site!</h2>
    //   </header> */}
    // </div>
  );
}

export default App;
