import { useState, useEffect } from "react";  

export default function UseEffect() {
  const [click, setClick] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
    { id: 1, name: "Rahul", email: "rahul@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 },
  ]);

  return (
    <><br></br>
      <table border={7} width={"100%"} cellPadding={0} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
 