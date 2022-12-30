import React from "react";
import moment from "moment/moment";
import "./NameListitem.css";

function NameListItem(props) {
  return (
    <li className="lsit-group-item">
      <div className="row">
        <div className="col-sm">
          <img src={props.avatar} alt={props.name} />
        </div>
        <div className="col-sm">
          <p style={{ color: "green" }}>name:{props.name}</p>
          <p>location:{props.location}</p>
          <p>email:{props.email}</p>
          <p>birthday: {moment(props.birthday).format("DD-MM-YYYY")}</p>
        </div>
      </div>
    </li>
  );
}

export default NameListItem;
