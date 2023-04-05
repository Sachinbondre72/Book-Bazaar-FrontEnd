import React from 'react'
import $ from 'jquery';
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import { useEffect, useState } from 'react';
import axios from "axios";
import './Chat.css'


const Chat = () => {
  const [chat,setChat]=useState([]);

  function sendChat()
  {
    if($("#body").val()!=""){
      var chat = {}
      chat["sender_id"]=ReactSession.get("userId");
      chat["recipient_id"]=2;
      chat["body"]=$("#body").val();
      chat["conversation_id"]=ReactSession.get("userId")+"chat"+2;
 

  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/chat",
    data: JSON.stringify(chat),
    dataType: 'json',
    cache: false,
    success: function (data) {

      
      

    },
    error: function (e) {
        
    }
});
 
}
  }
  var chatting;
  useEffect(() =>{

    const getdata = async () => {
      ReactSession.set("chat", (await axios.get("http://localhost:8080/chatListAll")).data);
      console.log(ReactSession.get("chat"));
    };
  
    getdata(); 
    // axios.get("http://localhost:8080/chatListAll").then((response) =>{
      
    //   setChat(response.data);
    //   console.log(chat);
      
      
    //   ;});
  
  },[])

const autherPrint=ReactSession.get("chat").map((ch) =>(ch.conversation_id==ReactSession.get("userId")+"chat"+2)?(
<li className="clearfix">
                      <div className="message-data text-right">
                        <span className="message-data-time">
                          {ch.timeStamp}
                        </span>
                      </div>
                      <div className="message other-message float-right">
                        {" "}
                        {ch.body}{" "}
                      </div>
                    </li>):((ch.conversation_id==2+"chat"+ReactSession.get("userId"))?(<li className="clearfix">
                          <div className="message-data">
                                        <span className="message-data-time">
                                        {ch.timeStamp}
                                                        </span>
                                            </div>
                                      <div className="message my-message">
                                      {ch.body}
                                        </div>
                                                  </li>):(<></>))

                                                                 )




  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <div id="plist" className="people-list">
                <div className="input-group">
                  <div className="input-group-prepend">
                    
                  </div>
                  
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0">
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Vincent Porter</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle offline" /> left 7 mins ago{" "}
                      </div>
                    </div>
                  </li>
                  <li className="clearfix active">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Aiden Chavez</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle online" /> online{" "}
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Mike Thomas</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle online" /> online{" "}
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Christian Kelly</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle offline" /> left 10 hours ago{" "}
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Monica Ward</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle online" /> online{" "}
                      </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    />
                    <div className="about">
                      <div className="name">Dean Henry</div>
                      <div className="status">
                        {" "}
                        <i className="fa fa-circle offline" /> offline since Oct
                        28{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat">
                
                <div className="chat-history "  >
                  <ul className="" style={{ margin:"0px", maxWidth: "100%", maxHeight: "500px", height: "5000px",overflowY: "scroll"}}>
                    
                    {autherPrint}
                    
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group mb-0">
                    <div className="input-group-prepend">
                      <button className="input-group-text" onClick={sendChat}><span className="input-group-text">
                        <i className="fa fa-send" />
                      </span></button>
                    </div>
                    <input
                      type="text"
                      id="body"
                      className="form-control"
                      placeholder="Enter text here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Chat;
