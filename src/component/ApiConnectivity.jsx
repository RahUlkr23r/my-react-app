import axios from "axios";
import { useEffect, useState } from "react";

function ApiConnectivity() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("API Response:", res.data); // Debugging log
        setUser(res.data);
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, []);

  return (
    <>
      <h2 className="text-center text-primary">User List</h2>
      <table border={13} width="100%" style={{ textAlign: "center", color: "green" }}>
        <thead>
          <tr border={13} >
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
              <td>{element.username}</td>
              <td>{element.website}</td>
              <td>{element.company.name}</td>
              <td>
                <p>Street: {element.address.street}</p>
                <p>City: {element.address.city}</p>
                <p>Zip Code: {element.address.zipcode}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ApiConnectivity;
