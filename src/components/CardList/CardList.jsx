import  { useState, useEffect } from "react";
import MediaCard from "../Card/MediaCard";
import "./CardList.css";

const CardList = () => {
  const [users, setUsers] = useState([]);

  console.log("USERS", users);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <MediaCard data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
