import { Link } from "react-router-dom";
import Famous from './Famous';
import axios from 'axios';
import { useEffect } from "react";
function Homecontent()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
 
    return(<>
 <>
  {/* Carousel wrapper */}
  <div>
  <div
    id="carouselMaterialStyle"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner rounded-5 shadow-4-strong">
      <div className="carousel-item active">
        <img
          src="https://www.booksmeridian.com/assets/images/banners/1050923103.png"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Sunset Over the City"
        />
       
      </div>
      <div className="carousel-item">
        <img
          src="https://www.booksmeridian.com/assets/images/banners/216719612.jpg"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Canyon at Nigh"
        />
       
      </div>
      <div className="carousel-item">
        <img
          src="https://www.booksmeridian.com/assets/images/banners/1350268823.jpg"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Cliff Above a Stormy Sea"
        />
       
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  Carousel wrapper
</>

{/* <Famous/> */}




   
    <hr class="hr hr-blurry" />
    
    <div>
    <div className="row row-cols-1 row-cols-md-6 g-4">
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838604.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Link to="Genre" ><img src="https://www.booksmeridian.com/assets/images/category/1621838653.jpg" className="card-img-top" alt="..." /></Link>
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838767.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838975.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838904.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1622109420.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838750.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621839005.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838820.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838841.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838952.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838927.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838801.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838879.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1622109343.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1622109377.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838720.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838670.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1622111387.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838698.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.booksmeridian.com/assets/images/category/1621838685.jpg" className="card-img-top" alt="..." />
      
    </div>
  </div>
  
</div>

    </div>
  
  

      </>);
}
export default Homecontent;