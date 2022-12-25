import React from "react";
import moment from "moment/moment";


function NameListItem(props){
    return(
        <li>
            <p><img src={props.avatar} />name:{props.name}</p>
            <p>location:{props.location}</p>
            <p>email:{props.email}</p>
            <p>birthday:{" "}{moment(props.birthday).format("DD-MM-YYYY")}</p> 
        </li>
    )
}


export default NameListItem;