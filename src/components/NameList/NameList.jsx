import React, { useEffect, useState } from "react";
import NameListItem from "./NameListItem";

function NameList() {
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: { first: "purna", last: "ekeanayaka" },
      location: { city: "kandy" },
      email: "purna@gamil.com",
      dob: { date: "1992-03-08T15:13:16.688Z", age: 24 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },
    {
      id: 2,
      name: { first: "gimahan", last: "rashika" },
      location: { city: "anuradhapura" },
      email: "gimhan@gamil.com",
      dob: { date: "1999-03-08T15:13:16.688Z", age: 24 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/56.jpg" },
    },
    {
      id: 3,
      name: { first: "sandun", last: "sudarshana" },
      location: { city: "kurunegala" },
      email: "amaila@gamil.com",
      dob: { date: "2001-03-08T15:13:16.688Z", age: 24 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/8.jpg" },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((Response) => {
        return Response.json();
      })
      .then((ResponseData) => {
        setNameList((nameList) => [...nameList, ResponseData.results[0]]);
      });
  }, []);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          location={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    const newUser = {
      id: new Date(),
      name: { first: "Revun", last: "Garashchenko" },
      location: { city: "Kobelyaki" },
      email: "revun@gamil.com",
      dob: { date: "2014-04-13T21:51:47.809Z", age: 24 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/41.jpg" },
    };

    //setNameList((nameList) => nameList.concat(newUser));

    //spread
    setNameList((NameList) => [...nameList, newUser]);
  };

  return (
    <React.Fragment>
      <div className="container mt-4r">
        <button className="btn btn-primary mb-3" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
