import $ from 'jquery';
function AddAuther()
{
    function changToAddBook()
    {
        window.location.replace("http://localhost:3000/addBook");
    }
    function sendData()
    {
        var Auther={};
    Auther["autherName"]= $("#Name").val();
    Auther["country"] = $("#Country").val();

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/addauther",
      data: JSON.stringify(Auther),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

        alert("Auther Added now you can add your book");
        

      },
      error: function (e) {

          
      }
  });
  alert("Auther Added now you can add your book");
  window.location.reload();
    }
    return(
    <><div >
    <div className="row gutters d-flex align-item-center justify-content-center">
      
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 text-primary">Add Auther</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="title">Auther Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
              
                
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="desc">Auther Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Country"
                    placeholder="Auther Country"
                  />
                </div>
              </div>
            </div>
            
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              
                <div className="text-right d-flex align-item-center justify-content-around">
                <button
                    type="button"
                    id="submit"
                    name="submit"
                    onClick={changToAddBook}
                    className="btn btn-primary"
                  >
                    Upload Book 
                  </button>
                  
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    onClick={sendData}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></>);
}

export default AddAuther;