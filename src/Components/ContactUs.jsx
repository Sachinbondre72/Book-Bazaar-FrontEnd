import "./ContactUs.css";
import { useEffect } from "react";
function ContactUs() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
  return (
    <>
      <div className="h-50 text-center text-warning">
        <h3>Contact Us</h3>
      </div>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt" />
              <div className="topic">Address</div>
              <div className="text-one">
                Raintree Marg, near Bharati Vidyapeeth,
              </div>
              <div className="text-two">
                Sector 7, CBD Belapur, Navi Mumbai,
              </div>
              <div className="text-three text-muted">Maharashtra 400614</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt" />
              <div className="topic">Phone</div>
              <div className="text-one"> + 91 976 429 1977</div>
              <div className="text-two"> + 91 951 184 9516</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope" />
              <div className="topic">Email</div>
              <div className="text-one">faculty-kharghar@cdac.in</div>
              <div className="text-two">info.team24@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any book related work or any types of quries related
              to this Website, you can contact us from here. It's our pleasure
              to help you.
            </p>
            <form action="#">
              <div className="input-box">
                <label>Name</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="w-50"
                  placeholder="Enter your name"
                />
              </div>
              <div className="input-box">
                <label>Email</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="w-50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-box ">
                <label>Query</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  className="textbox w-75"
                  placeholder="type query here ..."
                  style={{ height: "10vh" }}
                ></input>
              </div>
              <br></br>
              <div></div>
              <div className="button">
                <input type="button" defaultValue="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;