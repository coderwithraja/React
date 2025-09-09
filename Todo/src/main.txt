import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [newname, setNewname] = useState("");
  const [newemail, setNewEmail] = useState("");
  const [newwebsite, setNewWebsite] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const adduser = () => {
    const name = newname.trim();
    const email = newemail.trim();
    const website = newwebsite.trim();

    if (name && email && website) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name, email, website }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers([...users, data]);
          alert("User added successfully!");
          setNewname("");
          setNewEmail("");
          setNewWebsite("");
        })
        .catch((error) => console.error("Error adding user:", error));
    } else {
      alert("Please fill in all fields");
    }
  };

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
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers((users) =>
          users.map((user) => (user.id === id ? data : user))
        );
        alert("User updated successfully!");
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers((users) => users.filter((user) => user.id !== id));
        alert("User deleted successfully!");
      })
      .catch((error) => console.error("Error deleting user:", error));
  }

  return (
    <div className="App">
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) =>
                    handleChange(user.id, "email", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={user.website}
                  onChange={(e) =>
                    handleChange(user.id, "website", e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="text"
                value={newname}
                onChange={(e) => setNewname(e.target.value)}
                placeholder="Enter name"
              />
            </td>
            <td>
              <input
                type="email"
                value={newemail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter email"
              />
            </td>
            <td>
              <input
                type="text"
                value={newwebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
                placeholder="Enter website"
              />
            </td>
            <td colSpan="2">
              <button onClick={adduser}>Add user</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
