import React , {useState , useEffect} from 'react';
import Iframe       from 'react-iframe';
import Eyebrow      from "../../assets/img/1.png";
import Face         from "../../assets/img/2.png";
import Henna        from "../../assets/img/3.png";
import Eyelash      from "../../assets/img/4.png";
import Microblading from "../../assets/img/5.png";
import Hyaluron     from "../../assets/img/6.png";
import Airplane     from "../../assets/img/airplaine.jpg";
import AgencyBorn   from "../../assets/img/agencyBorn.jpg";
import Transition   from "../../assets/img/transition.jpg";
import Expansion    from "../../assets/img/expansion.jpg";
import Sudi         from "../../assets/img/sudi.jpg";
import ProfileIcon  from "../../assets/img/profileIcon.jpg";
import './App.css';

function App() {

  return (
    <div className="App">

      {/* NAV */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{background: "rgb(65, 65, 65)" , height:"60px"}}>
        <div className="container">
          <a className="navbarBrand" id="navLogo" href="#page-top">Brow Brow</a>
          <button 
              className ="navbar-toggler navbar-toggler-right" 
              type ="button" 
              data-toggle ="collapse" 
              data-target ="#navbarResponsive" 
              aria-controls ="navbarResponsive" 
              aria-expanded ="false" 
              aria-label ="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact / Hours</a>
              </li>
            </ul>
          </div>
        </div>
  </nav>

{/* HEADER */}
  <header className="masthead" id="page-top">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Threading Salon!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

{/* SERVICES */}
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          {/* made it empty for now h3 */}
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Eyebrow} alt=""/>
          </span>
          <h4 className="service-heading">Eyebrow</h4>
          <p className="text-muted">Our most popular service, The Brow Shape is intended for those with an established eyebrow-care regimen. The service includes a brief consultation, shaping, and finishing, and takes 5-10 minutes to complete.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Face} alt=""/>
          </span>
          <h4 className="service-heading">Face Threading</h4>
          <p className="text-muted">Full face threading completely removes unwanted facial hair (peach fuzz), leaving your skin mildly exfoliated and ready for clean makeup application. Areas included: eyebrows, forehead, sides, cheeks, nose, upper and lower lip as well as chin.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Henna} alt=""/>
          </span>
          <h4 className="service-heading">Henna Tatoo</h4>
          <p className="text-muted">A henna paste is applied to the skin in the desired design. When the past dries, the reddish brown dye will last up to a month -- depending on your skin, the location of the design, and how frequently the area is washed.  </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Eyelash} alt=""/>
          </span>
          <h4 className="service-heading">Eyelash Extention</h4>
          <p className="text-muted">These aren’t your run-of-the-mill, drugstore eyelashes. Our lash extensions are 100% lush and 100% safe. They’re made of a premium synthetic material and undergo a double heat-roll process to ensure a long-lasting, beautiful curl.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Microblading} alt=""/>
          </span>
          <h4 className="service-heading">Microblading</h4>
          <p className="text-muted">The delicate, super-fine hair strokes look natural and realistic in a way that the first-gen versions never did. Microblading's recent popularity has spawned microshading and microfeathering.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <img className="rounded-circle img-fluid fa-stack-1x" src={Hyaluron} alt=""/>
          </span>
          <h4 className="service-heading">Hyaluron Pen</h4>
          <p className="text-muted">If you’re looking for plump lips or to fill in wrinkles in the naseolabial folds and marionette lines naturally, the no-needle, hyaluron pen fillers is the treatment for you. It’s a more painless and natural option.</p>
        </div>
      </div>
    </div>
  </section>

{/* ABOUT */}
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          {/* made it empty for now h3 */}
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={Airplane} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">In my family, the art of threading has been passed on from one to another for decades, and by moving to United States I wanted to follow my passion, so I started my job as of a full-time Facial Threader in one of the knows beauty salons in Las Vegas.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={AgencyBorn} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">In the early 2012, my family and I decided to open my our own threading family business.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={Transition} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">We added full facial services to our salon which helped our customers to get all they need in one place at once.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={Expansion} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Brow Brow is a full facial threading, Henna Tatoo, Eyelash Extention, Microblading and Hyaluron Pen salon, backed up with a stronger than ever team of stylists to guarantee your beauty which previously was named Magic Brow.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* TEAM INFO */}
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          {/* made it empty for now h3 */}
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Sudi} alt=""/>
            <h4>Sudi</h4>
            <p className="text-muted">Lead Stylist / Manager</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={ProfileIcon} alt=""/>
            <h4>Ruhi</h4>
            <p className="text-muted">Stylist</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={ProfileIcon} alt=""/>
            <h4>Nilo</h4>
            <p className="text-muted">Stylist</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">A perfect blend of creativity and art wizardry. The best people formula for great eyebrows.</p>
        </div>
      </div>
    </div>
  </section>

  {/* CONTACT INFO */}
    <div className="contactAndMap col-lg-12 text-center" id="contact">
      <div>
        <h3 className="section-heading text-uppercase">Contact Us</h3>
        <div className="contactDivInfo_Div">
          <p className="section-subheading text-muted">TELL: </p><span> (702) 416-3494</span>
        </div>
        <div className="contactDivInfo_Div">
          <p className="section-subheading text-muted">TELL: </p><span> (702) 500-1010</span>
        </div>
        <div className="contactDivInfo_Div">
        <i class="fa fa-instagram"></i><a className="section-subheading text-muted" href="https://www.instagram.com/magicbrowbrow/"> magicbrowbrow</a>
        </div>
      </div>
      <div>
        <h3 className="section-heading text-uppercase">Hours</h3>
        <div className="contactDivInfo_Div">
          <p className="section-subheading text-muted">Mon-Sat </p><span> 10am - 7pm</span>
        </div>
        <div className="contactDivInfo_Div">
          <p className="section-subheading text-muted">Sun </p><span> 10am - 6pm</span>
        </div>
        <div className="contactDivInfo_Div">
          
        </div>
      </div>
      <div className="mapDiv">
          <Iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.17542155435513!2d-115.25063687010936!3d36.21989195129898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa43620288c21d0d8!2sMagic%20Brows!5e0!3m2!1sen!2sus!4v1593559168356!5m2!1sen!2sus" 
            width="300" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
            <a href="https://goo.gl/maps/dnKDRWeGY2aTYRuw6"><p style={{color:"black"}}>3250 N Tenaya Way #102, Las Vegas, NV 89129</p></a>
      </div>
    </div>

  {/* MESSAGE CONTACT */}
  {/* <section className="page-section" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">HI</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section> */}

  {/* FOOTER */}
  <footer className="footer bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Brow Brow 2020</span>
        </div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;