import React, { useState } from 'react';

const edit = () => {
  // Initial list of users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 32 },
  ]);

  // Function to handle editing a user
  const handleEdit = (id) => {
    // Find the user to edit
    const userToEdit = users.find((user) => user.id === id);
    const newName = prompt('Enter new name:', userToEdit.name);
    const newAge = prompt('Enter new age:', userToEdit.age);

    // Update user list with the new data
    if (newName && newAge) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, name: newName, age: Number(newAge) } : user
        )
      );
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}
            <button onClick={() => handleEdit(user.id)} style={{ marginLeft: '10px' }}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default edit;
