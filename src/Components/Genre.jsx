import { useEffect } from "react";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { Link } from "react-router-dom";
import $ from 'jquery';
function Genre()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  useEffect(() => {
    
    
    const getdata = async () => {
      ReactSession.set("genrebooks", (await axios.get("http://localhost:8080/Booksgenre/"+ReactSession.get("genresearch"))).data);
      console.log(ReactSession.get("genrebooks"));
      
    };
  
    getdata();
    
  
  
  }, []);
  const addToFinanceCard =ReactSession.get("genrebooks").map((card) =><div className="col-sm-6 col-md-4">
 <div
   className="card shadow-lg p-3 m-5 bg-white rounded "
   style={{ width: "18rem" }}
 >
   <Link onClick={()=>{
    ReactSession.set("search",card.book_Id);
    
   }} to="/Details">
   <img
     src={card.bookimg}
     className="card-img-top img-thumbnail"
     style={{ maxHeight: 300, minHeight: 300, maxWidth: 250, minWidth: 250 }}
     alt="..."
   />
   <div className="card-body">
     <h5 className="card-title">
       {card.booktitle}
     </h5>
   </div>
   </Link>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">
       {card.auther.autherName}
     </li>
     <li className="list-group-item">
       {card.bookgenre}
     </li>
   </ul>
   <div className="card-body">
     <a href="#" className="card-link"></a>
     <button className="card-link btn btn-primary" onClick={()=>{
        console.log(card.book_Id);
        var cart = {}
        cart["book"]={}
        cart["book"]["book_Id"] = card.book_Id;
        cart["user"]={}
        cart["user"]["userId"] = ReactSession.get("userId");
        
    
        $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/cart",
          data: JSON.stringify(cart),
          dataType: 'json',
          cache: false,
          timeout: 600000,
          success: function (data) {
    
            console.log("huva");
            
    
          },
          error: function (e) {
            console.log("nahi huva");
          }
      });


       }}>
       Add To Cart<span className="fas fa-shopping-cart"></span>
     </button>
   </div>
 </div>
</div>

 )
  
    return(<> <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div style={{ height: "200px", width: "50%" }}></div>
      <div>
        <div className="container">
          <div className="row">
           
          
            <div className="col-sm-12">
              {/* Filters */}
              <ul className="shop__sorting">
                <li className="">
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Newest</a>
                </li>
                <li>
                  <a href="#">Bestselling</a>
                </li>
                <li>
                  <a href="#">Price (low)</a>
                </li>
                <li>
                  <a href="#">Price (high)</a>
                </li>
              </ul>
              <div className=" row">
    <div className="col-4" id="crudromance">
      {addToFinanceCard}
</div>
</div>
                </div></div></div>
      </div></>);
}
export default Genre;