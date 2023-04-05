import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';
import { useEffect } from "react";
import { ReactSession } from 'react-client-session';
function Famous()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  let url="https://docs.openaq.org/india";
  const getdata=async() =>{
    var res=await axios.get(url);
    console.log(res.data);
  }
useEffect(() =>{

  const getdata = async () => {
    ReactSession.set("books", (await axios.get("http://localhost:8080/getallbook")).data);
    
  };

  getdata(); 
  // axios.get("http://localhost:8080/chatListAll").then((response) =>{
    
  //   setChat(response.data);
  //   console.log(chat);
    
    
  //   ;});

  },[])
  
   const addToFictionCard =ReactSession.get("books").map((card) =>(card.bookgenre=="Fiction" && card.booktype=="new")?(<div className="col-sm-3">
   <div
     className="card shadow-lg p-3 mb-5 bg-white rounded "
     style={{ width: "18rem" }}
   >
     <Link onClick={()=>{
    ReactSession.set("search",card.book_Id);
    window.location.replace("/Details");
    
   }} >
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
 </div>):(<></>)
   

 )
 

 const addToFinanceCard =ReactSession.get("books").map((card) =>(card.bookgenre=="Finance")?(<div className="col-sm-3">
 <div
   className="card shadow-lg p-3 mb-5 bg-white rounded "
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
</div>):(<></>)

 )
    return(<> <hr class="hr hr-blurry" />
    <div className="m-2 d-flex justify-content-between">
      <h3>Fiction</h3>
      <Link onClick={()=>{
        ReactSession.set("genresearch","Fiction");
        
      }} to="/Genre">
      <button className="card-link btn btn-primary">
      View More
    </button></Link>
    </div>
    <div className="container-fluid">
    <div className="d-flex flex-row flex-nowrap overflow-auto" id="crudromance">
      {addToFictionCard}
</div>
</div>

<hr class="hr hr-blurry" />
    <div className="m-2 d-flex justify-content-between">
      <h3>Finance</h3>
      <Link to="/Genre">
      <button className="card-link btn btn-primary">
      View More
    </button></Link>
    </div>
    <div className="container-fluid">
    <div className="d-flex flex-row flex-nowrap overflow-auto">
   {addToFinanceCard}

</div>
</div></>);
}
export default Famous;
