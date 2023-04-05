import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { ReactSession } from 'react-client-session';

function Invoice() {
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Invoice",
    //onAfterPrint: () => alert("pdf"),
  });

  //
  const form1 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_not1xee",
        "template_4kwzedq",
        form1.current,
        "-YnZ7baBkpPL-doJ4"
      )
      .then(
        (result) => {
          //console.log(form.current);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  var sr=1;
  const addToFictionCard =ReactSession.get("cartbooks").map((card) =>(card.user.id===ReactSession.get("userId"))?(<> <tr>
    <td className="center">{sr++}</td>
    <td className="left">{card.book.booktitle}</td>
    
    
    <td className="right">&#8377; {card.book.bookprice}</td>
  </tr></>):(<></>)


)
  
  return (
    <form ref={form1} name="nvoice">
      <div className="container-fluid">
        <div id="ui-view" data-select2-id="ui-view">
          <div ref={componentPDF}>
            <div className="card">
              <div className="card-header">
                Invoice
                <strong>#BBB-10010110101938</strong>
                <a
                  className="btn btn-sm btn-secondary float-right mr-1 d-print-none"
                  href="#"
                  onClick={generatePDF}
                  data-abc="true"
                >
                  <i className="fa fa-print" /> Print
                </a>
                
                <a
                  className="btn btn-sm btn-success float-right mr-1 d-print-none"
                  href="#"
                  data-abc="true"
                >
                  <i className="fa fa-save" /> Save
                </a>
              </div>

              <div className="card-body">
                
                <div className="table-responsive-sm">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="center">Sr. No.</th>
                        <th>Item</th>
                        
                        
                       
                        <th className="right">price</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {addToFictionCard}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-sm-5">
                    <br></br>
                    <br></br>
                    <br></br>
                    <pre>
                      ---------------
                      <br></br>
                    </pre>
                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-center">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <h2>
                            <a
                              className="nav-link active text-primary "
                              aria-current="page"
                              href="#"
                            >
                              <i>BOOKBAZAAR</i>
                            </a>
                          </h2>
                        </li>
                      </ul>
                    </div>
                    <pre>
                      ---------------
                      <br></br>
                    </pre>
                  </div>

                  <div className="col-lg-4"></div>
                  <div className="col-lg-4 col-sm-5 ml-auto">
                    <table className="table table-clear">
                      <tbody>
                        
                        
                        <tr>
                          <td className="left">
                            <strong>Total paid</strong>
                          </td>
                          <td className="right">
                            <strong>&#8377; {ReactSession.get("totalPrice")+20}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center text-warning">
                {" "}
                Thanks for Shopping
              </div>
              <div className="text-center text-success"> Visit Again ...</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Invoice;