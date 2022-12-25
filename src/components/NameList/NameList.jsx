import React from "react";
import NameListItem from "./NameListItem";


function NameList(){
    return(
        <React.Fragment>
            <h1>Name List</h1>
            
        <ul>
         <NameListItem name = "purna lakshitha" course = "A course"/>
         <NameListItem name = "sahan tharindu" course = "b course"/>
         <NameListItem name = "nuwan Dhanushka" course = "c course"/>
         <NameListItem name = "amali sandunika" course = "d course"/>
        </ul>
        </React.Fragment>
        
    )
}

export default NameList;

