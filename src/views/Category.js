import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './Header';

function Category() {
  const [formData, setFormData] = useState({
    Ctgname: '',
    status: ''
  });
  const [CtgImage, setCtgImage] = useState(null);
  const [ctgList, setCtgList] = useState([]);
  const [editId, setEditId] = useState(null); // Add editId state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCtgImage(e.target.files[0]);
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:4001/ctgList');
      if (Array.isArray(res.data.user)) {
        setCtgList(res.data.user);
      } else {
        console.error('Unexpected response format:', res.data);
        setCtgList([]);
      }
    } catch (err) {
      console.error(err);
      alert('Error fetching categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  
  const handleSubmit = async (e) => {
  e.preventDefault(); // ✅ यह जरूरी है
    try {
      const data = new FormData();
      data.append('Ctgname', formData.Ctgname);
      data.append('status', formData.status);
      if (CtgImage) {
        data.append('CtgImage', CtgImage);
      }
  
      const res = await axios.post('http://localhost:4001/ctgInp', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert(res.data.message);
      fetchCategories(); // Refresh list
    } catch (err) {
      console.error(err);
      alert('Error inserting data');
    }
  };
  

  const handleUpdate = async () => {
    try {
      const data = new FormData();
      data.append('Ctgname', formData.Ctgname);
      data.append('status', formData.status);
      if (CtgImage) {
        data.append('CtgImage', CtgImage);
      }
  
      const res = await axios.put(`http://localhost:4001/update/${editId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // alert(res.data.message);
      fetchCategories(); // Refresh list
    } catch (err) {
      console.error(err);
      alert('Error updating data');
    }
  };
  


  
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      const res = await axios.get(`http://localhost:4001/delete/${id}`);
      // alert(res.data.message);
      fetchCategories();
    } catch (err) {
      alert("Error deleting category");
    }
  };

  const handleEdit = (item) => {
    setFormData({
      Ctgname: item.Ctgname,
      status: item.status,
      CtgImage: item.CtgImage  // ✅ Add this
    });
    setEditId(item._id);
  };

  
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card p-4">
              <h4 className="mb-3">Enter Your Info</h4>
              <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                  <label className="form-label">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Ctgname"
                    value={formData.Ctgname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="CtgImage"
                    onChange={handleFileChange}
                    required={!editId}
                  />
                  {editId && (
                    <img
                      src={`http://localhost:4001/uploads/${formData.CtgImage}`}
                      width="100"
                      alt="Current Category"
                    />
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <input
                    type="number"
                    className="form-control"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-sm mt-2 w-100"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
  
          <div className="col-lg-8">
            <div className="card p-4">
              <h4 className="mb-3">Category List</h4>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {ctgList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Ctgname}</td>
                      <td>
                        <img
                          src={`http://localhost:4001/uploads/${item.CtgImage}`}
                          width="80"
                          alt="Category"
                        />
                      </td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-12 mb-4">
          <a href='/Newspage' class="next m-5">Next</a>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Category;
