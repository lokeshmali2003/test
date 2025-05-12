import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Home = () => {
  const [formData, setFormData] = useState({ user: '', pass: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/myInp', formData);
      alert(response.data.message);
      setFormData({ user: '', pass: '' });
      navigate('/Category');
    } catch (error) {
      console.error('Login failed:', error);
      alert("Error inserting data");
    }
  };

  return (
    <div>
      <Header/>
    <div className="container mt-5">
      
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h3 className="text-center mb-4">User Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="user"
                  className="form-control"
                  placeholder="Enter username"
                  value={formData.user}
                  onChange={handleChange}
                  required
               />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="pass"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.pass}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
