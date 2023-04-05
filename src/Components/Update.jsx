import { useEffect } from "react";
import axios from "axios";
import $ from 'jquery';
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactSession } from 'react-client-session';
function Update() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
    $("#form3Example1m").val(ReactSession.get("fname"));
    $("#form3Example1n").val(ReactSession.get("lname"));
    $("#form3Example1m1").val(ReactSession.get("email"));
    $("#form3Example1n1").val(ReactSession.get("mobno"));
    $("#state").val(ReactSession.get("state"));
    $("#city").val(ReactSession.get("city"));
    $("#form3Example90").val(ReactSession.get("pincode"));
    $("#role").val(ReactSession.get("role"));
    $("#Address").val(ReactSession.get("Address"));
  
  
  }, []);
  var state;
  var city;
  var flag=false;
  const initialstate = {
    isSubmit: false,
    FirstName: ReactSession.get("fname"),
    LastName: ReactSession.get("lname"),
    EmailId: ReactSession.get("email"),
    MobileNo: ReactSession.get("mobno"),
    Address: ReactSession.get("Address"),
    Pincode: ReactSession.get("pincode"),
    Password: "",
    ConfirmPassword: "",
  };

  const [formdata, setFormData] = useState(initialstate);
  const {
    FirstName,
    LastName,
    EmailId,
    MobileNo,
    Address,
    Pincode,
    Password,
    ConfirmPassword,
  } = formdata;
  const [formdataErr, setFormDataErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormDataErr(null);
    setFormData({
      ...formdata,
      isSubmit: true,
    });
    setTimeout(() => {
      let error = formValidation();

      if (error) {
        console.log("HANJI");
        setFormDataErr(error);
        setFormData({
          ...formdata,
          isSubmit: false,
        });
        return;
      } else {
        var user = {}
        user["fname"] = $("#form3Example1m").val();
        user["lname"] = $("#form3Example1n").val();
        user["email"] = $("#form3Example1m1").val();
        user["mobno"] = $("#form3Example1n1").val();
        user["address"]={};
        user["address"]["address_line"] = $("#Address").val();
        user["address"]["address_state"] = $("#state").val();
        user["address"]["address_city"] =$("#city").val();
        user["address"]["address_pin"] = $("#form3Example90").val();
        user["password"] = $("#form3Example99").val();
        user["role"]={};
        user["role"]["role_id"] = $("#role").val();

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/userss",
      data: JSON.stringify(user),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

        
        

      },
      error: function (e) {
          
      }
  });
        alert("Profile updated successfully.");
        ReactSession.set("fname",$("#form3Example1m").val());
        ReactSession.set("lname",$("#form3Example1n").val());
        ReactSession.set("email",$("#form3Example1m1").val());
        ReactSession.set("mobno",$("#form3Example1n1").val());
        ReactSession.set("state",$("#state").val());
        ReactSession.set("city",$("#city").val());
        ReactSession.set("pincode",$("#form3Example90").val());
        ReactSession.set("Address",$("#Address").val());
        ReactSession.set("role",$("#role").val());
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          window.location.reload();
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          console.log("got response at backend");
          setFormData({
            ...formdata,
            isSubmit: false,
            FirstName: "",
            LastName: "",
            EmailId: "",
            MobileNo: "",
            Address: "",
            Pincode: "",
            Password: "",
            ConfirmPassword: "",
          });
        }, 500);
      }
    }, 1000);
  };
  const reset = () => {
    setFormData({
      ...formdata,
      isSubmit: false,
      FirstName: "",
      LastName: "",
      EmailId: "",
      MobileNo: "",
      Address: "",
      Pincode: "",
      Password: "",
      ConfirmPassword: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onChangePincode = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
   
    let url = "https://api.postalpincode.in/pincode/"+e.target.value;
    const getdata = async () => {
      var res = await axios.get(url);
      console.log(res.data[0].PostOffice[0]);
      document.getElementById("city").value = res.data[0].PostOffice[0].Block;
      city=res.data[0].PostOffice[0].Block;
      document.getElementById("state").value=res.data[0].PostOffice[0].State;
      state=res.data[0].PostOffice[0].State;
    };
    getdata();
  
  };
  

  const formValidation = () => {
    let error = false;
    if (FirstName === "" || !/^[A-Za-z]{2,}$/.test(FirstName)) {
      //console.log("inside fullname");
      error = {
        field_id: "FirstName",
        message: "Name is required",
      };
      return error;
    }

    if (LastName === "" || !/^[A-Za-z]{2,}$/.test(LastName)) {
      //console.log("inside fullname");
      error = {
        field_id: "LastName",
        message: "Last Name is required",
      };
      return error;
    }

    if (EmailId === "" || !/\S+@\S+\.\S+/.test(EmailId)) {
      //console.log("inside email");
      error = {
        field_id: "EmailId",
        message: "Valid Email required",
      };
      return error;
    }

    if (MobileNo === "" || !/^\+?([6-9]{1})\)?([0-9]{9})$/.test(MobileNo)) {
      //console.log("inside phone");
      error = {
        field_id: "MobileNo",
        message: "Valid Phone no. is required",
      };
      return error;
    }
   

    if (Pincode === "" || Pincode.length < 6 || !/(^\d{6}$)/.test(Pincode)) {
      error = {
        field_id: "Pincode",
        message: "Provide valid Pincode",
      };
      return error;
    }
    
   
  };
  
    return (
     

      <div className="container rounded bg-white ">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" alt="profilephoto" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{ReactSession.get("fname")+" "+ReactSession.get("lname")}</span><span className="text-black-50">{ReactSession.get("email")}</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Update User Profile </h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels" htmlFor="form3Example1m">Name</label><input type="text"
                                id="form3Example1m"
                                name="FirstName"
                                value={FirstName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                                placeholder="First Name" /></div>
                                <div>
                              {formdataErr &&
                              formdataErr.field_id === "FirstName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                <div className="col-md-6"><label className="labels" htmlFor="form3Example1n">Surname</label><input type="text"
                                id="form3Example1n"
                                name="LastName"
                                value={LastName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success" placeholder="surname" /></div>
                                <div>
                              {formdataErr &&
                              formdataErr.field_id === "LastName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
              </div>
              <div className="row mt-3">
               <div className="col-md-12"><label className="labels" htmlFor="form3Example1m1">Email ID</label><input type="text"
                                id="form3Example1m1"
                                name="EmailId"
                                value={EmailId}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success" placeholder="enter email id" /></div>
                                <div>
                              {formdataErr &&
                              formdataErr.field_id === "EmailId" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                <div className="col-md-12"><label className="labels" htmlFor="form3Example1n1">Mobile Number</label><input  type="text"
                                id="form3Example1n1"
                                name="MobileNo"
                                value={MobileNo}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success" placeholder="enter phone number" /></div>
                                <div>
                              {formdataErr &&
                              formdataErr.field_id === "MobileNo" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                <div className="col-md-12"><label className="labels" htmlFor="form3Example8">Address Line 1</label><input type="text"
                            id="Address"
                            name="Address"
                            value={Address}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                            required placeholder="enter address line 1"  /></div>
                            <div>
                          {formdataErr && formdataErr.field_id === "Address" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                <div className="col-md-12"><label className="labels" htmlFor="form3Example90">Pin code</label><input type="text"
                            id="form3Example90"
                            name="Pincode"
                            value={Pincode}
                            onChange={onChangePincode}
                            className="form-control form-control-lg border border-success" placeholder="enter address line 2"  /></div>
                            <div>
                          {formdataErr && formdataErr.field_id === "Pincode" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                <div className="col-md-12"><label className="labels" htmlFor="state">State</label><input type="text"
                            id="state"
                           
                            className="form-control form-control-lg border border-success" placeholder="State"  /></div>
                <div className="col-md-12"><label className="labels" htmlFor="city">City</label><input type="text"
                            id="city"
                           
                            className="form-control form-control-lg border border-success" placeholder="City"  /></div>
                </div>
              <div className="row mt-3">
                <div className="col-md-6"><label
                            className="form-label text-dark"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <select
                            className="select border border-success w-100"
                            id="role"
                          >
                            <option value="Customer">Customer</option>
                            <option value="Seller">Seller</option>
                            {(ReactSession.get("role")== "Admin")?(<option value="Admin">Admin</option>):null}

                            
                          </select></div>
                
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={onSubmit}>save Profile</button></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
export default Update;