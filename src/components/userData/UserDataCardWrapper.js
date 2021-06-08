import { useState, useEffect } from "react";
import UserDataCard from "./UserDataCard";
import "./UserDataCardWrapper.css";
import React from "react";
const axios = require("axios");
const UserDataCardWrapper = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios("https://reqres.in/api/users?page=1");

      setData(response.data.data);
    };
    getUserData();
  }, []);
  if (data.length) {
    return (
      <div className="dataCardWrapperclass">
        {data.map((user) => (
          <UserDataCard user={user} key={user.id} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default UserDataCardWrapper;
