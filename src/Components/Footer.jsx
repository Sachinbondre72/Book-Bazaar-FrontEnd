import { Link } from "react-router-dom";
import { useEffect } from "react";
function Footer() {
  
 
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-white text-muted mt-5">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us On Social Networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a
              href="https://www.facebook.com/cdacmumbai/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/cdacmumbai"
              className="me-4 link-secondary"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/cdac_mumbai/?hl=en"
              className="me-4 link-secondary"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/deep-learning-course-at-cdac-mumbai/"
              className="me-4 link-secondary"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/Prasad-Kunte/Book-Bazaar.git"
              className="me-4 link-secondary"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                  BOOK BAZAAR
                </h6>
                <p>
                  The Book Bazaar website is a platform designed to provide
                  customers with a wide selection of books, including new books,
                  used books for resale, and a rental service for books.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
                <p>
                  <Link to="/Aboutus" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/ContactUs" className="text-reset">
                    Contact Us
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Raintree
                  Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi
                  Mumbai, Maharashtra 400614
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  faculty-kharghar@cdac.in
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> + 91 976
                  429 1977
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> + 91 951
                  184 9516
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
       
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
export default Footer;
