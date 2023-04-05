import "./Cart.css";
import { useEffect } from "react";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { Link } from "react-router-dom";

function Cart(){
  useEffect(() => {
    
    
    const getdata = async () => {
      ReactSession.set("cartbooks", (await axios.get("http://localhost:8080/cartList")).data);
      console.log(ReactSession.get("userId"));
      
    };
  
    getdata();
    
  
  
  }, []);
var price=0;
ReactSession.get("cartbooks").forEach((myFunction));
function myFunction(item, index) {
  if(item.user.id===ReactSession.get("userId")) 
  {
    price+=item.book.bookprice;
    ReactSession.set("totalPrice",price);
  }
}

const addToFictionCard =ReactSession.get("cartbooks").map((card) =>(card.user.id===ReactSession.get("userId"))?(<><div className="row">
<div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
  {/* Image */}
  
  <div
    className="bg-image hover-overlay hover-zoom ripple rounded"
    data-mdb-ripple-color="light"
  >
    <img
      src={card.book.bookimg}
      className="w-100"
      alt="Blue Jeans Jacket"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
      />
    </a>
  </div>
  {/* Image */}
</div>
<div className="col-lg-5 mb-4 mb-lg-0">
  {/* Data */}
  <p>
    <strong>{card.book.booktitle}</strong>
  </p>
  <p>{card.book.auther.autherName}</p>
  <p>{card.book.user.fname}</p>
  <button
    type="button"
    className="btn btn-primary btn-sm me-1 mb-2"
    data-mdb-toggle="tooltip"
    onClick={()=>{
      fetch('http://localhost:8080/deletecartbyidList/' +card.id, {
             method: 'DELETE',
           });
           window.location.reload();

    }}
    title="Remove item"
  >
    <i className="fas fa-trash" />
  </button>
</div>
<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
  {/* Quantity */}
  
  {/* Quantity */}
  {/* Price */}
  <p className="text-start text-md-center">
    <strong>Rs.{card.book.bookprice}</strong>
  </p>
  {/* Price */}
</div>
</div>
{/* Single item */}
<hr className="my-4" /></>):(<></>)


)
  
    return(<>
    
    <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          {addToFictionCard}
          <div className="card mb-4">
            <div className="card-body">
              <p>
                <strong>Select Delivery Address</strong>
              </p>
              <div className="a-row address-row list-address-selected">
                <span
                  className="a-declarative"
                  data-action="select-address-in-list"
                  data-select-address-in-list="{}"
                >
                  <div data-a-input-name="submissionURL" className="a-radio">
                    <label>
                      <input
                        type="radio"
                        name="submissionURL"
                        defaultValue="/gp/buy/addressselect/handlers/continue.html/ref=chk_addr_select_1_mru?ie=UTF8&action=select-shipping&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken="
                        defaultChecked=""
                      />
                      <i className="a-icon a-icon-radio" />
                      <span className="a-label a-radio-label">
                        <span className="a-text-bold">
                          <span className="break-word">sachin bondre</span>
                        </span>
                        <span className="break-word">
                          Flat 701, Block No12, B Wing, Mansarovar Complex,
                          Sec-34, Plot No 1 To 26, 34, Manas Complex Rd, Kamothe,
                          Panvel NAVI MUMBAI, MAHARASHTRA, 410209, India, Phone
                          number: 9561397820
                        </span>
                        <span className="address-edit-link">
                          <span
                            className="a-declarative"
                            data-action="trigger-modal-dialog"
                            data-trigger-modal-dialog="{}"
                          >
                            <a
                              data-testid=""
                              aria-label="Edit address 
        
        sachin bondre, Flat 701, Block No12, B Wing, Mansarovar Complex, Sec-34, Plot No 1 To 26, 34,  Manas Complex Rd, Kamothe, Panvel NAVI MUMBAI, MAHARASHTRA, 410209 India
        
        "
                              className="a-link-normal"
                              href="/gp/buy/addressselect/handlers/popover/edit.html/ref=chk_addr_edit_pri_1?ie=UTF8&action=edit&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&isDefault=1&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken=&skipHeader=0"
                            >
                              Edit address
                            </a>
                            <span
                              className="a-declarative"
                              data-action="a-modal"
                              data-a-modal='{"popoverLabel":"Update your shipping address","name":"edit-address","url":"/gp/buy/addressselect/handlers/popover/edit.html/ref=chk_addr_edit_pri_1?ie=UTF8&action=edit&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&isDefault=1&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken=&skipHeader=0&cachebuster=1678014532","header":"Update your shipping address"}'
                            />
                          </span>
                        </span>
                        |
                        <span
                          className="a-declarative"
                          data-action="a-modal"
                          data-csa-c-type="widget"
                          data-csa-c-func-deps="aui-da-a-modal"
                          data-a-modal='{"name":"cdpViewId-1678014529955-N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2","header":"Add delivery instructions","cache":"false","popoverLabel":"Edit delivery instructions","url":"/ma/deliveryProfile?addressId=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&cdpViewId=cdpViewId-1678014529955-N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&ingressPointType=TSPCEP&popoverType=a-modal"}'
                        >
                          <a className="a-link-normal" href="#">
                            Add New Address
                          </a>
                        </span>
                      </span>
                    </label>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <p>
                <strong>Expected shipping delivery</strong>
              </p>
              <p className="mb-0">12.10.2020 - 14.10.2020</p>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body">
              <p>
                <strong>We accept</strong>
              </p>
              <img
                className="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                className="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                className="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                className="me-2"
                width="45px"
                src="/images/rupay-logo-icon.svg"
                alt="Rupay acceptance mark"
              />
              <img
                className="me-2"
                width="45px"
                src="/images/upi-icon.svg"
                alt="UPI Payment acceptance mark"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>Rs.{price}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping Cost
                  <span>Rs.{(price==0)?(0):(40)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including Taxes)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>Rs.{(price==0)?(0):(price+40)}</strong>
                  </span>
                </li>
              </ul>
              <Link to="/Checkout">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>);
}
export default Cart;