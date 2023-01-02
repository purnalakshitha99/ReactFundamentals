import React from "react";
import moment from "moment/moment";
import "./NameListitem.css";

function NameListItem(props) {
  return (
    <li className="lsit-group-item">
      <div className="row container text-center">
        <div className="col-2">
          <img
            src={props.avatar}
            alt={props.name}
            className="border border-dark rounded-circle shadow-sm"
          />
        </div>
        <div className="col-10">
          <h4 style={{ color: "green" }}> name:{props.name}</h4>
          <p>
            {" "}
            email:{props.email} | location:{props.location}
          </p>

          <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
        </div>
      </div>
    </li>
  );
}

export default NameListItem;
