import React from "react";
import DisplayUsers from "../displayUsers/DisplayUsers";
import axios from "axios";

function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>welcome to the Home Page!!</h1>
      <DisplayUsers users={users} />
    </div>
  );
}

export default Home;
