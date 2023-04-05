import {useEffect} from 'react'
import "./About.css";
function About() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
  return (
    
    <>
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="text-center">
          <p className="text-center text-success">
            <h3>
              <i>
                <b>A book is dream you hold in your hand</b>
              </i>
            </h3>
          </p>
        </div>
        <br></br>
        <div className="text-center">
          <h2 className="text-warning">About</h2>
          <br></br>
          <p className="text-center">
            <div className="">
              <h5>
                The <i>BookBazaar</i> website is a platform designed to provide
                customers with a wide selection of books, including new books,
                used
                <br></br>
                books for resale, and a rental service for books. sellers can
                add their books for sell/rent which customers can buy/rent and
                <br></br>
                can negotiate with the seller. Customers can create an account,
                manage their rental and purchase history, <br></br>and use
                contact form to ask questions and provide feedback.
              </h5>
            </div>
          </p>
        </div>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              {/* Section Heading*/}
              <div
                className="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <br></br>
                <h3 className="text-bg-danger">
                  Our Creative <span> Team</span>
                </h3>
                <br></br>
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="row pe-lg-5">
            {/* Single Advisor*/}
            <div className="col-12 col-sm-6 col-lg-1"></div>
            <div className="col-12 col-sm-6 col-lg-2">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="advisor_thumb">
                  <img src="/images/Prasad.jpg" alt="" />

                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* Team Details*/}
                <div className="single_advisor_details_info">
                  <h6>Prasad Kunte</h6>
                  <p className="designation">Developer</p>
                </div>
              </div>
            </div>
            {/* Single Advisor*/}
            <div className="col-12 col-sm-6 col-lg-2">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Team Thumb*/}
                <div className="advisor_thumb">
                  <img src="/images/Ashish.jpg" alt="" />
                  {/* Social Info*/}
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* Team Details*/}
                <div className="single_advisor_details_info">
                  <h6>Ashish Nipane</h6>
                  <p className="designation">Developer</p>
                </div>
              </div>
            </div>
            {/* Single Advisor*/}
            <div className="col-12 col-sm-6 col-lg-2">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Team Thumb*/}
                <div className="advisor_thumb">
                  <img src="/images/Sachin.jpg" alt="" />
                  {/* Social Info*/}
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* Team Details*/}
                <div className="single_advisor_details_info">
                  <h6>Sachin Bondre</h6>
                  <p className="designation">Developer</p>
                </div>
              </div>
            </div>
            {/* Single Advisor*/}
            <div className="col-12 col-sm-6 col-lg-2">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Team Thumb*/}
                <div className="advisor_thumb">
                  <img src="/images/Pratik.jpg" alt="" />
                  {/* Social Info*/}
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* Team Details*/}
                <div className="single_advisor_details_info">
                  <h6>Pratik Raut</h6>
                  <p className="designation">Developer</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-2">
              <div
                className="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Team Thumb*/}
                <div className="advisor_thumb">
                  <img src="/images/Prashant.jpg" alt="" />
                  {/* Social Info*/}
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* Team Details*/}
                <div className="single_advisor_details_info">
                  <h6>Prashant Dhole</h6>
                  <p className="designation">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;