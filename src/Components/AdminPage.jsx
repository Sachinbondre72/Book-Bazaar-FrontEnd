import "./AdminPage.css";
import axios from "axios";
import { useState,useEffect } from "react";
import { ReactSession } from 'react-client-session';
import $ from 'jquery';
import { Link, useNavigate } from "react-router-dom";
function AdminPage()
{
    useEffect(() => {
    
        window.scrollTo(0, 0);
      
      
      }, []);

    function deletePro(){

	
        fetch('http://localhost:8080/DeleteUser/' +id11, {
             method: 'DELETE',
           });
           
           
    

   
}
    var srno=1;
   
     const [users,setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/Alluser').then((response) => {
        setUsers(response.data);
        console.log(response.data);
  });
    },[]);
     var id11;
     var Addid
     var invokeId= (id,event)=>{
        id11=id;
        console.log(id11+"invoke");
        
        $.getJSON("http://localhost:8080/user/"+id11, function(result){
            document.getElementById("fname").value=result.fname;
            document.getElementById("lname").value=result.lname;
            document.getElementById("form3Example1m11").value=result.email;
            document.getElementById("form3Example1n11").value=result.mobno;
            document.getElementById("state1").value=result.address.address_state;
            document.getElementById("city1").value=result.address.address_city;
            document.getElementById("form3Example901").value=result.address.address_pin;
            document.getElementById("form3Example991").value=result.password;
            document.getElementById("Address1").value=result.address.address_line;
            document.getElementById("role1").value=result.role.role_id;
            Addid=result.address.address_id;
           
        });}
        function updatePro(event){

            var user = {}
    console.log($("#Address").val());
    user["userId"] =id11;
    user["fname"] = document.getElementById("fname").value;
    user["lname"] = document.getElementById("lname").value;
    user["email"] = document.getElementById("form3Example1m11").value;
    user["mobno"] =document.getElementById("form3Example1n11").value;
    user["address"]={};
    user["address"]["address_line"] =document.getElementById("Address1").value;
    user["address"]["address_id"] =Addid;
    user["address"]["address_state"] =document.getElementById("state1").value;
    user["address"]["address_city"] =document.getElementById("city1").value;
    user["address"]["address_pin"] = document.getElementById("form3Example901").value;
    user["password"] = document.getElementById("form3Example991").value;
    user["role"]={};
    user["role"]["role_id"] = document.getElementById("role1").value;

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/updateUser",
      data: JSON.stringify(user),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

        
        

      },
      error: function (e) {
          
      }
  });
                    
                
            
            
        }
        function invokeId1(id,event){
            id11=id;
            console.log(id11);
            }
    
  var state;
  var city;
  var flag=false;
  const initialstate = {
    isSubmit: false,
    FirstName: "",
    LastName: "",
    EmailId: "",
    MobileNo: "",
    Address: "",
    Pincode: "",
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
        setFormDataErr(error);
        setFormData({
          ...formdata,
          isSubmit: false,
        });
        return;
      } else {
        var user = {}
        user["address"]={};
        user["role"]={};
    user["fname"] = $("#form3Example1m").val();
    user["lname"] = $("#form3Example1n").val();
    user["email"] = $("#form3Example1m1").val();
    user["mobno"] = $("#form3Example1n1").val();
    user["address"]["address_line"] = $("#Address").val();
    user["address"]["address_state"] = $("#state").val();
    user["address"]["address_city"] =$("#city").val();
    user["address"]["address_pin"] = $("#form3Example90").val();
    user["password"] = $("#form3Example99").val();
    user["role"]["role_id"] = $("#role").val();
    console.log(user);

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
        alert("User has been Added!");
        window.location.reload();
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          
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
  const onChangePincode1 = (e) => {
   
   
    let url = "https://api.postalpincode.in/pincode/"+e.target.value;
    const getdata2 = async () => {
      var res = await axios.get(url);
      console.log(res.data[0].PostOffice[0]);
      document.getElementById("city1").value = res.data[0].PostOffice[0].Block;
      city=res.data[0].PostOffice[0].Block;
      document.getElementById("state1").value=res.data[0].PostOffice[0].State;
      state=res.data[0].PostOffice[0].State;
    };
    getdata2();
  
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
    if (
      Password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        Password
      )
    ) {
      error = {
        field_id: "Password",
        message:
          "Password contains atleast 8 character includes 1 Uppercase, 1 Number and 1 Special character",
      };
      return error;
    }
    if (ConfirmPassword === "" || !(Password === ConfirmPassword)) {
      error = {
        field_id: "ConfirmPassword",
        message: "Password not match",
      };
      return error;
    }
   
  };
    return(<>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Users</b>
                    </h2>
                  </div>
                  <div className="col-sm-4">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>{" "}
                      <span>Add New User</span>
                    </a>
                  </div>
                  
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Pincode</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="productsJson">
                {
            users.map((value)=>((ReactSession.get("userId")!=value.userId)?(
                <tr>
        			<td>
        			{(srno++)}
        		</td>
        		<td>{value.fname}</td>
        		<td>{value.lname}</td>
        		<td>{value.email}</td>
        		<td>{value.mobno}</td>
                <td>{value.address.address_pin}</td>
                <td>{value.address.address_line}</td>
                <td>{value.role.role_name}</td>
        		<td>
        		<button onClick={()=>{invokeId(value.id)}} style={{border:"none"}}><a href="#editEmployeeModal"  className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a></button>
        		<button onClick={()=>{invokeId1(value.id)}} style={{border:"none"}}><a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></button>
        		</td>
        		</tr>):(<></>)
                  ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
            <form action="" onSubmit={onSubmit}>
          
                    
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">
                          Register
                        </h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m"
                                name="FirstName"
                                value={FirstName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                First name
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "FirstName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n"
                                name="LastName"
                                value={LastName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1n"
                              >
                                Last Name
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "LastName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m1"
                                name="EmailId"
                                value={EmailId}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m1"
                              >
                                Email Id
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "EmailId" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n1"
                                name="MobileNo"
                                value={MobileNo}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1n1"
                              >
                                Mobile Number
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "MobileNo" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="Address"
                            name="Address"
                            value={Address}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                            required
                          />
                          <label className="form-label" htmlFor="form3Example8">
                            Address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example90"
                            name="Pincode"
                            value={Pincode}
                            onChange={onChangePincode}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example90"
                          >
                            Pincode
                          </label>
                        </div>
                        <div>
                          {formdataErr && formdataErr.field_id === "Address" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <lable htmlFor="state">State</lable>
                            <input
                            type="text"
                            id="state"
                           
                            className="form-control form-control-lg border border-success"
                          />

                            
                          </div>
                          <div className="col-md-6 mb-4">
                            <lable htmlFor="city">City</lable>
                            <input
                            type="text"
                            id="city"
                           
                            className="form-control form-control-lg border border-success"
                          />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <label
                            className="form-label text-dark"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <select
                            className="select border border-success w-100"
                            id="role"
                          >
                            <option value="3">Customer</option>
                            <option value="2">Seller</option>
                            <option value="1">Admin</option>
                          </select>
                        </div>
                        
                        <div>
                          {formdataErr && formdataErr.field_id === "Pincode" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="Password"
                            id="form3Example99"
                            name="Password"
                            value={Password}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example99"
                          >
                            Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "Password" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example97"
                            name="ConfirmPassword"
                            value={ConfirmPassword}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            re-enter the Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "ConfirmPassword" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="d-flex justify-content-start pt-3">
                          <button
                            type="button"
                            onClick={reset}
                            className="btn btn-danger btn-lg"
                          >
                            Reset
                          </button>
                          <div className="w-50 justify-content-start"></div>
                          <button
                            type="submit"
                            className="btn btn-success btn-lg ms-2"
                             
                          >
                            Add
                          </button>
                        </div>
                      </div>
                     
                    
               
        </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
            <form action="" >
          
                    
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase text-center">
              Edit User
            </h3>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="fname"
                    name="FirstName"
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="fname"
                  >
                    First name
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "FirstName" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="lname"
                    name="LastName"
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="lname"
                  >
                    Last Name
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "LastName" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1m11"
                    name="EmailId"
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="form3Example1m11"
                  >
                    Email Id
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "EmailId" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1n11"
                    name="MobileNo"
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="form3Example1n11"
                  >
                    Mobile Number
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "MobileNo" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="Address1"
                name="Address"
                className="form-control form-control-lg border border-success"
                required
              />
              <label  htmlFor="Address1">
                Address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example901"
                name="Pincode"
                onChange={onChangePincode1}
                className="form-control form-control-lg border border-success"
              />
              <label
                htmlFor="form3Example901"
              >
                Pincode
              </label>
            </div>
            <div>
              {formdataErr && formdataErr.field_id === "Address" ? (
                <p style={{ color: "red" }}>
                  {formdataErr.message}
                </p>
              ) : null}
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <lable htmlFor="state1">State</lable>
                <input
                type="text"
                id="state1"
               
                className="form-control form-control-lg border border-success"
              />

                
              </div>
              <div className="col-md-6 mb-4">
                <lable htmlFor="city1">City</lable>
                <input
                type="text"
                id="city1"
               
                className="form-control form-control-lg border border-success"
              />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <label
                htmlFor="role1"
              >
                Role
              </label>
              <select
                className="select border border-success w-100"
                id="role1"
              >
                <option value="3">Customer</option>
                <option value="2">Seller</option>
                <option value="1">Admin</option>
              </select>
            </div>
            
            <div>
              {formdataErr && formdataErr.field_id === "Pincode" ? (
                <p style={{ color: "red" }}>
                  {formdataErr.message}
                </p>
              ) : null}
            </div>
            <div className="form-outline mb-4">
              <input
                type="Password"
                id="form3Example991"
                name="Password"
                className="form-control form-control-lg border border-success"
              />
              <label
                htmlFor="form3Example991"
              >
                Password
              </label>
            </div>
            <div>
              {formdataErr &&
              formdataErr.field_id === "Password" ? (
                <p style={{ color: "red" }}>
                  {formdataErr.message}
                </p>
              ) : null}
            </div>
            <div>
              {formdataErr &&
              formdataErr.field_id === "ConfirmPassword" ? (
                <p style={{ color: "red" }}>
                  {formdataErr.message}
                </p>
              ) : null}
            </div>
            <div className="d-flex justify-content-start pt-3">
              
              
              <button
                type="submit"
                onClick={updatePro}
                className="btn btn-success btn-lg ms-2"
                 
              >
                Update
              </button>
            </div>
          </div>
         
        
   
</form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onsubmit="deletePro()">
                <div className="modal-header">
                  <h4 className="modal-title">Delete User</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    
                    onClick={deletePro}
                    className="btn btn-danger"
                    defaultValue="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </>
      );
}
export default AdminPage;

