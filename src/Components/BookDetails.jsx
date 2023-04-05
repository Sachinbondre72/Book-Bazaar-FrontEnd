import "./BookDe.css"
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from "react";
import { ReactSession } from 'react-client-session';
function BookDetails()

{
  
  useEffect(() => {
    
    
    const getdata = async () => {
      ReactSession.set("onebook", (await axios.get("http://localhost:8080/Books/"+ReactSession.get("search"))).data);
      console.log(ReactSession.get("onebook"));
      
    };
  
    getdata();
  
  
  }, []);
 
    return (<>
    <div className="container">
    <div className="card">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img src={ReactSession.get("onebook").bookimg} style={{ maxHeight: 700, minHeight: 300, maxWidth: 300, minWidth: 250 }} />
              </div>
              
            </div>
           
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{ReactSession.get("onebook").booktitle}</h3>
            <div className="rating">
              
            </div>
            <p className="product-description">
            {ReactSession.get("onebook").bookdesc
}
            </p>
            <h4 className="price">
              current price: <span>₹ {ReactSession.get("onebook").bookprice}</span>
            </h4>
         
           
            <div className="action">
              <button className="add-to-cart btn btn-default" type="button">
                add to cart
              </button>
              <Link to="/Checkout"><button className="add-to-cart btn btn-default" type="button">
                Buy Now
              </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>);
}
export default BookDetails;