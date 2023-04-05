import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import { useEffect } from "react";
import axios from 'axios';
function RentContent()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
  useEffect(() =>{

    const getdata = async () => {
      ReactSession.set("oldbooks", (await axios.get("http://localhost:8080/getallbook")).data);
      
    };
  
    getdata(); 
    // axios.get("http://localhost:8080/chatListAll").then((response) =>{
      
    //   setChat(response.data);
    //   console.log(chat);
      
      
    //   ;});
  
    },[])
    const addToHorrorCard =ReactSession.get("oldbooks").map((card) =>(card.booktype=="rent" || card.booktype == "resale")?(<div className="col-sm-3">
    <div
      className="card shadow-lg p-3 mb-5 bg-white rounded "
      style={{ width: "18rem" }}
    >
      <Link to="Details">
      <img
        src={card.bookimg}
        className="card-img-top img-thumbnail"
        style={{ maxHeight: 250, minHeight: 250, maxWidth: 250, minWidth: 250 }}
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
        <button className="card-link btn btn-primary">
          Make Deal
        </button>
      </div>
    </div>
  </div>):(<></>)
   

 )
    return(<> 
     <div className="container-fluid">
        <div className=" row ">          
                {addToHorrorCard}
        </div>
    </div>
       </>);
}
export default RentContent;