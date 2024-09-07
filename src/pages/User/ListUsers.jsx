import React from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

export function ListUsers({ users }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/user/edit/${id}`);
  };

  return (
    <>
      <h2>User</h2>
      <div className="view-tree">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => handleRowClick(user.id)} style={{ cursor: 'pointer' }}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>test</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
