import React from "react";
import NameListItem from "./NameListItem";


function NameList(){
    const nameList =[
        {
        name :{ first:'purna',last:'ekeanayaka'},
        location:{city:'kandy'},
        email:'purna@gamil.com',
        dob:{date:'1992-03-08T15:13:16.688Z',age : 24},
        picture:{medium: "https://randomuser.me/api/portraits/med/men/75.jpg"},
        },
        {
            name :{ first:'gimahan',last:'rashika'},
            location:{city:'anuradhapura'},
            email:'gimhan@gamil.com',
            dob:{date:'1999-03-08T15:13:16.688Z',age : 24},
            picture:{medium:"https://randomuser.me/api/portraits/med/men/56.jpg"},
        },
        {
            name :{ first:'sandun',last:'sudarshana'},
            location:{city:'kurunegala'},
            email:'amaila@gamil.com',
            dob:{date:'2001-03-08T15:13:16.688Z',age : 24},
            picture:{"medium":"https://randomuser.me/api/portraits/med/men/8.jpg"},
        },
        

    ];


    const nameListComponent = () => {
        return (
            nameList.map(aName => {
                return(
                    <NameListItem 
         name ={`${nameList[0].name.first} ${nameList[0].name.last}`}
         location = {nameList[0].location.city}  
         email = {nameList[0].email} 
         birthday={nameList[0].dob.date} 
         avatar={nameList[0].picture.medium}
         />
                )
            })
            
        )
    }
    return(
        <React.Fragment>
            <h1>Name List</h1>
            
        <ul>
         {nameListComponent()}  
        </ul>

        </React.Fragment>
        
    )
}

export default NameList;

