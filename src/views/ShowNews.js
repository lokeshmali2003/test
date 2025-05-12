import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function ShowNews() {
  const [newsList, setNewsList] = useState([]);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [formData, setFormData] = useState({
    ncid: '',
    ndes: '',
    nStatus: '',
    nDate: '',
    nImage: null
  });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get('http://localhost:4001/newsList');
      setNewsList(res.data.news || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news?")) return;
    try {
      const res = await axios.delete(`http://localhost:4001/news/${id}`);
      alert(res.data.message);
      fetchNews(); // refresh list
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed.");
    }
  };

  const handleEditClick = (item) => {
    setEditingNewsId(item._id);
    setFormData({
      ncid: item.ncid,
      ndes: item.ndes,
      nStatus: item.nStatus,
      nDate: item.nDate?.substr(0, 10) || '',
      nImage: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'nImage') {
      setFormData({ ...formData, nImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('ncid', formData.ncid);
      data.append('ndes', formData.ndes);
      data.append('nStatus', formData.nStatus);
      data.append('nDate', formData.nDate);
      if (formData.nImage) {
        data.append('nImage', formData.nImage);
      }

      const res = await axios.put(`http://localhost:4001/updateNew/${editingNewsId}`, data);
      alert(res.data.message);
      setEditingNewsId(null);
      fetchNews();
    } catch (err) {
      console.error("Update error:", err);
      alert("Update failed.");
    }
  };

  return (
    <div className="container mt-4">
      <Header />
      <div className="card p-4 shadow">
        <h4 className="mb-4 text-center">Show News</h4>

        {editingNewsId && (
          <form onSubmit={handleUpdate} className="mb-4 border p-3">
            <h5>Edit News</h5>
            <div className="form-group">
              <label>Category ID</label>
              <input type="text" name="ncid" className="form-control" value={formData.ncid} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea name="ndes" className="form-control" value={formData.ndes} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Status</label>
              <input type="text" name="nStatus" className="form-control" value={formData.nStatus} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="nDate" className="form-control" value={formData.nDate} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>New Image (optional)</label>
              <input type="file" name="nImage" className="form-control" onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-success mt-2">Update</button>
            <button type="button" className="btn btn-secondary mt-2 ml-2" onClick={() => setEditingNewsId(null)}>Cancel</button>
          </form>
        )}

        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Category ID</th>
              <th>Image</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((item) => (
              <tr key={item._id}>
                <td>{item.ncid}</td>
                <td>
                  <img
                    src={`http://localhost:4001/${item.nImagePath}`}
                    alt="News"
                    width="80"
                    height="50"
                    style={{ objectFit: 'cover' }}
                  />
                </td>
                <td>{item.nStatus}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => handleEditClick(item)}>Edit</button>
                </td>
              </tr>
            ))}
            {newsList.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">No news found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowNews;
