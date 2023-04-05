import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import axios from "axios";
ReactSession.setStoreType("localStorage");
function Login() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
  const [user,setUser]=useState([]);
  const [pass,setPass]=useState("");
  const initialstate = {
    isSubmit: false,
    EmailId: "",
    Password: "",
  };

  const [formdata, setFormData] = useState(initialstate);
  const { EmailId, Password } = formdata;
  const [formdataErr, setFormDataErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {

    e.preventDefault();
    getdatafromserver();
    setFormDataErr(null);
    
    setTimeout(() => {
      let error = formValidation();
      if (error) {
        setFormDataErr(error);
        
        return;
      } else {
        //backend api
        //handleContactDetails();
        //check with database if true then logged in
        console.log(store.Address);
        ReactSession.set("userId",store.userId);
        ReactSession.set("fname",store.fname);
        ReactSession.set("lname",store.lname);
        ReactSession.set("email",store.email);
        ReactSession.set("mobno",store.mobno);
        ReactSession.set("state",store.address.address_state);
        ReactSession.set("city",store.address.address_city);
        ReactSession.set("pincode",store.address.address_pin);
        ReactSession.set("password",store.password);
        ReactSession.set("Address",store.address.address_line);
        ReactSession.set("role",store.role.role_name);
        alert("Login successfully");
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          if(ReactSession.get("location")=== "rent"){
            window.location.replace("http://localhost:3000/");
          }
          else{
          window.location.replace("http://localhost:3000/Home");
        }
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          //console.log("got response at backend");
          setFormData({
            ...formdata,
            isSubmit: false,
            EmailId: "",
            Password: "",
          });
        }, 500);
      }
    }, 1000);
  };
  const reset = () => {
    setFormData({
      ...formdata,
      isSubmit: false,
      EmailId: "",
      Password: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const formValidation = () => {
    let error = false;

   
    
 
  if(email==null){
  
    console.log("problem in email1"+user);
    if(email==null){
      console.log("problem in email2");
      error = {
        field_id: "Password",
        message:
          "email id or password is wrong",
      };
      return error;
    }
  }
  if(password!=document.getElementById("form3Example4").value){
    console.log("problem in password"+password);
    error = {
      field_id: "Password",
      message:
        "email id or password is wrong",
    };
    return error;
    }



  };
  var email=null;
  var password;
  var store;
function getdatafromserver()
{
  let url="http://localhost:8080/userEmail/"+document.getElementById("form3Example3").value;
  var res;
    
  const getdata=async() =>{
      res=await axios.get(url).then((res) =>{
        email=res.data.email;
        console.log(email);
        password=res.data.password;
        store=res.data;
        console.log(password);
        ;});
    
  }
let url1="http://localhost:8080/userMob/"+document.getElementById("form3Example3").value;

const getdata1=async() =>{
  res=await axios.get(url1).then((res) =>{
    email=res.data.mobno;
    console.log(email);
    password=res.data.password;
    store=res.data;
    console.log(password);
    ;});
  }
getdata();
if(email==null){
  getdata1();
  
}

}


  return (
    <>
    
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={onSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    name="EmailId"
                    value={EmailId}
                    onChange={onChange}
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter email id"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                <div>
                  {formdataErr && formdataErr.field_id === "EmailId" ? (
                    <p style={{ color: "red" }}>{formdataErr.message}</p>
                  ) : null}
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    name="Password"
                    value={Password}
                    onChange={onChange}
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div>
                  {formdataErr && formdataErr.field_id === "Password" ? (
                    <p style={{ color: "red" }}>{formdataErr.message}</p>
                  ) : null}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                 
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
