import { useEffect } from "react";
function Order()
{
    useEffect(() => {
    
        window.scrollTo(0, 0);
      
      
      }, []);
   
    return(<>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div
          className="card border-top border-bottom border-3"
          style={{ borderColor: "#f37a27 !important" }}
        >
          <div className="card-body p-5">
            <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
              Purchase Reciept
            </p>
            <div className="row">
              <div className="col mb-3">
                <p className="small text-muted mb-1">Date</p>
                <p>10 April 2021</p>
              </div>
              <div className="col mb-3">
                <p className="small text-muted mb-1">Order No.</p>
                <p>012j1gvs356c</p>
              </div>
            </div>
            <div
              className="mx-n5 px-5 py-4"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <p>BEATS Solo 3 Wireless Headphones</p>
                </div>
                <div className="col-md-4 col-lg-3">
                  <p>£299.99</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <p className="mb-0">Shipping</p>
                </div>
                <div className="col-md-4 col-lg-3">
                  <p className="mb-0">£33.00</p>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                <p className="lead fw-bold mb-0" style={{ color: "#f37a27" }}>
                  £262.99
                </p>
              </div>
            </div>
            <button
            type="button"
            className="btn btn-primary btn-lg"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal1"
          >
            Track your order
          </button>
          <p className="mt-4 pt-2 mb-0">
              Want any help?{" "}
              <a href="#!" style={{ color: "#f37a27" }}>
                Please contact us
              </a>
            </p>
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div
                className="modal-content text-white"
                style={{ backgroundColor: "#ebcfb0", borderRadius: 10 }}
              >
                <div className="modal-header border-bottom-0">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-start px-4 pt-0 pb-4">
                  <div className="text-center">
                    <h5 className="mb-3">Order Status</h5>
                    <h5 className="mb-5">AWB Number-5335T5S</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-5">
                    <div className="text-center">
                      <i className="fas fa-circle" />
                      <p>Order placed</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-circle" />
                      <p>In Transit</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-circle" />
                      <p className="lead fw-normal">Out of Delivery</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-circle" style={{ color: "#979595" }} />
                      <p style={{ color: "#979595" }}>Delivered</p>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                      <p className="lead fw-normal">Shipped with</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <p className="lead fw-normal">UPS Expedited</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <i className="fas fa-phone fa-lg" />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                      <p className="lead fw-normal">Estimated Delivery</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <p className="lead fw-normal">02/12/2017</p>
                    </div>
                    <div className="col-md-2 text-center">
                      <i className="fas fa-envelope fa-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

    
  </>);
}

export default Order;