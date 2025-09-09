import React, { useEffect, useState } from 'react'

const App = () => {
  const [users,setUsers] = useState([]);
  const [newname,setNewname] = useState("");
  const [newemail,setNewemail] = useState("");
  const [newwebsite,setNewwebsite] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

const handleChange = (id, field, value) => {
  setUsers((users) =>
    users.map((user) =>
      user.id === id ? { ...user, [field]: value } : user
    )
  );
};

const updateUser = (id) => {
  const user = users.find((user) => user.id === id);  
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      alert(`User with id ${id} updated successfully!`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(`Error updating user with id ${id}`);
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <input type="text" value={user.email} onChange={(e) => handleChange(user.id,'email',e.target.value)} />
                
              </td>
              <td>
              <input type="text" value={user.website} onChange={(e) => handleChange(user.id,'website',e.target.value)} />
                
              </td>
              <td>
                <button onClick={() => {updateUser(user.id)}}>Update</button>
                <button onClick={() => {deleteUser(user.id)}}>Delete</button>
              </td>
              </tr>
       
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default App