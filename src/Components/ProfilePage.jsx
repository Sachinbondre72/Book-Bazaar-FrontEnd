import {Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';

function ProfilePage() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);


  
    return (
<>

      <section  style={{ backgroundColor: "#f4f5f7" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
          <div className="row g-0">
            <div
              className="col-md-4 gradient-custom text-center text-white"
              style={{
                borderTopLeftRadius: ".5rem",
                borderBottomLeftRadius: ".5rem"
              }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar"
                className="img-fluid my-5"
                style={{ width: 80 }}
              />
              <h5>{ReactSession.get("fname")+" "+ReactSession.get("lname")}</h5>
              <p>{ReactSession.get("role")}</p>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>My Profile</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                    <p className="text-muted" id='email'>{ReactSession.get("email")}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{ReactSession.get("mobno")}</p>
                  </div>
                </div>
                <label className="form-label" htmlFor="Address">
                    Address
                  </label>
                  <p className="text-muted" id='Address'>{ReactSession.get("Address")}</p>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>State</h6>
                    <p className="text-muted">{ReactSession.get("state")}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>City</h6>
                    <p className="text-muted">{ReactSession.get("city")}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 text-center"><Link to="/Update"><button className="btn btn-primary profile-button" type="button">Update Profile</button></Link></div>

  </div>
</section>
 
   </> );
  }
export default ProfilePage;