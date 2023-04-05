import { useEffect } from "react";
import './Orders.css'
function Orders()
{
    useEffect(() => {
    
        window.scrollTo(0, 0);
      
      
      }, []);
    
    return(<><div className="container bootdey">
    <div className="panel panel-default panel-order">
      <div className="panel-heading">
        <strong>Order history</strong>
        <div className="btn-group pull-right">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-default btn-xs dropdown-toggle"
              data-toggle="dropdown"
            >
              Filter history <i className="fa fa-filter" />
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li>
                <a href="#">Approved orders</a>
              </li>
              <li>
                <a href="#">Pending orders</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://bootdey.com/img/Content/user_3.jpg"
              className="media-object img-thumbnail"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right">
                  <label className="label label-danger">rejected</label>
                </div>
                <span>
                  <strong>Order name</strong>
                </span>{" "}
                <span className="label label-info">group name</span>
                <br />
                Quantity : 2, cost: $323.13 <br />
                <a
                  data-placement="top"
                  className="btn btn-success btn-xs glyphicon glyphicon-ok"
                  href="#"
                  title="View"
                />
                <a
                  data-placement="top"
                  className="btn btn-danger btn-xs glyphicon glyphicon-trash"
                  href="#"
                  title="Danger"
                />
                <a
                  data-placement="top"
                  className="btn btn-info btn-xs glyphicon glyphicon-usd"
                  href="#"
                  title="Danger"
                />
              </div>
              <div className="col-md-12">
                order made on: 05/31/2014 by <a href="#">Jane Doe </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://bootdey.com/img/Content/user_1.jpg"
              className="media-object img-thumbnail"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right">
                  <label className="label label-info">pending</label>
                </div>
                <span>
                  <strong>Order name</strong>
                </span>{" "}
                <span className="label label-info">group name</span>
                <br />
                Quantity : 12, cost: $12623.13
                <br />
                <a
                  data-placement="top"
                  className="btn btn-success btn-xs glyphicon glyphicon-ok"
                  href="#"
                  title="View"
                />
                <a
                  data-placement="top"
                  className="btn btn-danger btn-xs glyphicon glyphicon-trash"
                  href="#"
                  title="Danger"
                />
                <a
                  data-placement="top"
                  className="btn btn-info btn-xs glyphicon glyphicon-usd"
                  href="#"
                  title="Danger"
                />
              </div>
              <div className="col-md-12">
                order made on: 06/12/2014 by <a href="#">Jane Doe </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://bootdey.com/img/Content/user_3.jpg"
              className="media-object img-thumbnail"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right">
                  <label className="label label-success">Approved</label>
                </div>
                <span>
                  <strong>Order name</strong>
                </span>{" "}
                <span className="label label-info">group name</span>
                <br />
                Quantity : 4, cost: $523.13
                <br />
                <a
                  data-placement="top"
                  className="btn btn-success btn-xs glyphicon glyphicon-ok"
                  href="#"
                  title="View"
                />
                <a
                  data-placement="top"
                  className="btn btn-danger btn-xs glyphicon glyphicon-trash"
                  href="#"
                  title="Danger"
                />
                <a
                  data-placement="top"
                  className="btn btn-info btn-xs glyphicon glyphicon-usd"
                  href="#"
                  title="Danger"
                />
              </div>
              <div className="col-md-12">
                order made on: 06/20/2014 by <a href="#">Jane Doe</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://bootdey.com/img/Content/user_2.jpg"
              className="media-object img-thumbnail"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right">
                  <label className="label label-info">pending</label>
                </div>
                <span>
                  <strong>Order name</strong>
                </span>{" "}
                <span className="label label-info">group name</span>
                <br />
                Quantity : 4, cost: $523.13
                <br />
                <a
                  data-placement="top"
                  className="btn btn-success btn-xs glyphicon glyphicon-ok"
                  href="#"
                  title="View"
                />
                <a
                  data-placement="top"
                  className="btn btn-danger btn-xs glyphicon glyphicon-trash"
                  href="#"
                  title="Danger"
                />
                <a
                  data-placement="top"
                  className="btn btn-info btn-xs glyphicon glyphicon-usd"
                  href="#"
                  title="Danger"
                />
              </div>
              <div className="col-md-12">
                order made on: 06/20/2014 by <a href="#">Jane Doe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-footer">
        Put here some note for example: bootdey si a gallery of free bootstrap
        snippets bootdeys
      </div>
    </div>
  </div>
  </>);
}

export default Orders;