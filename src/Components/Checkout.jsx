import {  useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';

function Checkout() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  function mydelete() {
    ReactSession.get("cartbooks").forEach((mydelete1));
    function mydelete1(item, index) {
      if(item.user.id===ReactSession.get("userId")) 
      {
        fetch('http://localhost:8080/deletecartbyidList/' +item.id, {
               method: 'DELETE',
             });
      }
    }
  }


  const addToFictionCard =ReactSession.get("cartbooks").map((card) =>(card.user.id===ReactSession.get("userId"))?(<><div className="me-3 position-relative">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
    1
  </span>
  <img
    src={card.book.bookimg}
    style={{ height: "96px", width: "96x" }}
    className="img-sm rounded border"
  />
</div>

<div className>
  <a href="#" className="nav-link">
  {card.book.booktitle} <br />
  {card.book.bookgenre}
  </a>
  <div className="price text-muted">Total: &#8377; {card.book.bookprice}</div>
</div></>):(<></>)


)
 
  return (
    <section className="bg-light py-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-4">
            {/* Checkout */}
            <div className="card shadow-0 border">
              <div className="p-4">
                <h5 className="card-title text-black mb-3">Checkout</h5>
                <hr className="text-danger " />
                <hr className="text-success " />
                <br />
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="mb-0">First name</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        value={ReactSession.get("fname")}
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-0">Last name</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        value={ReactSession.get("lname")}
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Phone</p>
                    <div className="">
                      <input
                        type="tel"
                        id="typePhone"
                        value={ReactSession.get("mobno")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Email</p>
                    <div className="">
                      <input
                        type="email"
                        id="typeEmail"
                        value={ReactSession.get("email")}
                        placeholder="example@gmail.com"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
                <h5 className="card-title mb-3">Shipping info</h5>
               
                  
                <hr className="text-danger " />
                <br></br>
                <div className="row">
                  <div className="col-sm-8 mb-3">
                    <p className="mb-0">Address</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        value={ReactSession.get("Address")}
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                 
                  <div className="col-sm-4 mb-3">
                    <p className="mb-0">City</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        value={ReactSession.get("city")}
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-6 mb-3">
                    <p className="mb-0">Zip</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        value={ReactSession.get("pincode")}
                        placeholder="123456"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Save this address
                  </label>
                </div>

                <div className="float-start">
                  <button className="btn btn-info border">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
            {/* Checkout */}
          </div>

          <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: "320px" }}>
              <h6 className="mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2">&#8377; {ReactSession.get("totalPrice")}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Discount:</p>
                <p className="mb-2 text-success">- &#8377; 60.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping cost:</p>
                <p className="mb-2">+ &#8377; 40.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2 fw-bold">&#8377; {ReactSession.get("totalPrice")+20}</p>
              </div>
              <div className="input-group mt-3 mb-4">
                <input
                  type="text"
                  className="form-control border"
                  name
                  placeholder="Promo code"
                />
                <button className="btn btn-light text-primary border">
                  Apply
                </button>
              </div>
              <hr />
              <h6 className="text-dark my-4">Items in cart</h6>
              <div className="d-flex align-items-center mb-4">
                
               
              </div>
              <div className=" mb-4">
                {addToFictionCard}
              </div>
              <div className="">
                <Link to="/invoice" onClick={mydelete}
                 className="btn btn-warning border w-100">
                  Make Payment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
