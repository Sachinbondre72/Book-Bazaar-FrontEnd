import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import { ReactSession } from 'react-client-session';
import "./App.css";
import Navbar from "./Components/Navbar";
import "./sitelocaton";
import Footer from "./Components/Footer";
import Homecontent from "./Components/Homecontent";
import Genre from "./Components/Genre";
import BookDetails from "./Components/BookDetails";
import RentHomePage from "./Components/RentHomePage";
import RentContent from "./Components/RentContent";
import Checkout from "./Components/Checkout";
import Update from "./Components/Update";
import ProfilePage from "./Components/ProfilePage";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import AdminPage from "./Components/AdminPage";
import Order from "./Components/Order";
import Orders from "./Components/Orders";
import { useEffect } from "react";
import Chat from "./Components/Chat";
import UploadAdd from "./Components/UploadAdd";
import AddAuther from "./Components/AddAuther";
import Invoice from "./Components/Invoice";
import Add from "./Components/Add";

function App() {
 
  
  
  if (ReactSession.get("location")=== "rent") {
    return (
      <>
        <BrowserRouter>
          <RentHomePage />
          <Routes>
            <Route path="/" element={<RentContent></RentContent>}></Route>
            <Route
              path="/ProductPage"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/Update" element={<Update />}></Route>
            <Route path="/Genre" element={<Genre></Genre>}></Route>
            <Route path="/ProfilePage" element={<ProfilePage />}></Route>
            <Route path="/Aboutus" element={<About />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/Signin" element={<Login />}></Route>
            <Route path="/Chat" element={<Chat/>}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Details" element={<BookDetails />}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="/addAdd" element={<Add/>}></Route>
            <Route path="/addBook" element={<UploadAdd/>}></Route>
              <Route path="/addAuther" element={<AddAuther/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    );
  }
  else if(ReactSession.get("email")=== "logout"){
    return (
      <>
        <>
          <BrowserRouter>
            <Navbar></Navbar>
            {/* <LoginSignUp/> */}
            <Routes>
              <Route path="/Home" element={<Homecontent />}></Route>
              <Route
                path="/ProductPage"
                element={<ProductPage></ProductPage>}
              ></Route>
              <Route path="/ProfilePage" element={<ProfilePage />}></Route>

              <Route path="/Update" element={<Update />}></Route>
              <Route path="/Admin" element={<AdminPage/>}></Route>
              <Route path="/Genre" element={<Genre></Genre>}></Route>
              <Route path="/Aboutus" element={<About />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
              <Route path="/" element={<Signup/>}></Route>
              <Route path="/OrderHistory" element={<Order/>}></Route>
              <Route path="/OrdersHistory" element={<Orders/>}></Route>
              <Route path="/Signin" element={<Login />}></Route>
              <Route path="/Details" element={<BookDetails />}></Route>
              <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/Cart" element={<Cart/>}></Route>
              <Route path="/invoice" element={<Invoice/>}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
         
        </>
      </>
    );
  }
  else{
    return (
      <>
        <>
          <BrowserRouter>
            <Navbar></Navbar>
            {/* <LoginSignUp/> */}
            <Routes>
              <Route path="/Home" element={<Homecontent />}></Route>
              <Route path="/" element={<Homecontent />}></Route>
              <Route
                path="/ProductPage"
                element={<ProductPage></ProductPage>}
              ></Route>
              <Route path="/ProfilePage" element={<ProfilePage />}></Route>
              <Route path="/addBook" element={<UploadAdd/>}></Route>
              <Route path="/addAuther" element={<AddAuther/>}></Route>
              <Route path="/Update" element={<Update />}></Route>
              <Route path="/Admin" element={<AdminPage/>}></Route>
              <Route path="/Genre" element={<Genre></Genre>}></Route>
              <Route path="/Aboutus" element={<About />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
              <Route path="/OrderHistory" element={<Order/>}></Route>
              <Route path="/OrdersHistory" element={<Orders/>}></Route>
              <Route path="/Signin" element={<Login />}></Route>
              <Route path="/Details" element={<BookDetails />}></Route>
              <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/Cart" element={<Cart/>}></Route>
              <Route path="/addBook" element={<UploadAdd/>}></Route>
              <Route path="/addAuther" element={<AddAuther/>}></Route>
              <Route path="/invoice" element={<Invoice/>}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
         
        </>
      </>
    );
  }
}

export default App;
