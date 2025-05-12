import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Newspage() {
  const [formData, setFormData] = useState({
    ncid: "",
    ndes: "",
    nStatus: "",
    nDate: "",
    nImage: null,
  });
  const selectRef = useRef();

   const navigate = useNavigate();

  const [ctgList, setCtgList] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:4001/ctgList');
      if (Array.isArray(res.data.user)) {
        setCtgList(res.data.user);
      }
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleImageChange = (e) => {
    setFormData({ ...formData, nImage: e.target.files[0] });
  };


  const handleSubmit = async (e) => {

    const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
    const selectedId = selectedOption.value;
    const selectedName = selectedOption.getAttribute("name");

    e.preventDefault();

    const data = new FormData();
    data.append("ncid", selectedId);
    data.append("ndes", formData.ndes);
    data.append("nStatus", "1");
    data.append("nDate", formData.nDate);
    data.append("nImage", formData.nImage);

    try {
      const res = await axios.post("http://localhost:4001/newSubmit", data);
      alert("Form submitted successfully!");
      navigate('/ShowNews');
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  return (
    <div>
      <Header />
      <div class="container mt-4 login-container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="login-card">
              <h3 class="text-center mb-4">News Page</h3>
              <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">

                <div class="form-group pt-2 m-0">
                  <label class="label-title">Category ID</label>
                  <select ref={selectRef} onChange={handleChange} className="form-control" name="ncid">
                    <option value="">-- Select Category --</option>
                    {ctgList.map((item) => (
                      <option key={item._id} value={item.Ctgname} name={item.Ctgname}>
                        {item.Ctgname}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="form-group pt-2 m-0">
                  <label class="label-title">Category Image</label>
                  <input type="file" onChange={handleImageChange} accept="image/*" class="form-control" />
                </div>
                <div class="form-group pt-2 m-0">
                  <label class="label-title">description</label>
                  <input type="text" onChange={handleChange} class="form-control" name="ndes" />
                </div>

                <div class="form-group pt-2 m-0">
                  <label class="label-title">Status</label>
                  <input type="text" onChange={handleChange} value="1" class="form-control" name="nStatus" />
                </div>
                <div class="form-group pt-2 m-0">
                  <label class="label-title">Date</label>
                  <input type="date" onChange={handleChange} class="form-control" name="nDate" />
                </div>
                <button type="submit" class="btn btn-primary mt-5 ">submit</button>
              </form>
            </div>
          </div>
          </div>
          </div>
          <div className="col-lg-12 mb-4">
          <a href='/Category' class="next m-5">Back</a>
          </div>
          <div className="col-lg-12 mb-4">
          <a href='/ShowNews' class="next m-5">Next</a>
          </div>

    </div>
  )
}

export default Newspage