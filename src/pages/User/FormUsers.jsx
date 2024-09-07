import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function FormUsers({ users, updateUser, deleteUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const foundUser = users.find((user) => user.id === parseInt(id));
    if (foundUser) {
      setUser(foundUser);
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
    navigate('/user');
  };

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/user');
  };

  return (
    <>
    <h2>Editar Usuario</h2>
    <div className='view-form'>
      <form onSubmit={handleSubmit}>
        <div className="header">
        <button className='btn btn-primary' type="submit">Guardar</button>
        <button className='btn btn-danger' type="button" onClick={handleDelete}>
          Eliminar
        </button>
        </div>
        <div className='content-main-form'>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        </div>
      </form>
    </div>
    </>
  );
}
