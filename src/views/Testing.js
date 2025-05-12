import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herder2 from './Herder2'

export default function Testing() {
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
  return (
    
    <div>
        <Herder2/>
 
      <section class="w3l-blog-sec py-5">
        <div class="container py-md-5 py-4">
            <div class="row justify-content-center">
                 {newsList.map((item) => (
                <div class="col-md-6" key={item._id}>
                    <div class="blog-info">
                        <div class="position-relative">
                            <a href="blog-single.html">
                                  <img
                    src={`http://localhost:4001/${item.nImagePath}`}
                    alt="News"
                    width="100%"
                    height="50%"
                    style={{ objectFit: 'cover' }}
                  />
                            </a>
                           <a href={`/BlogView/${item._id}`} className="category-style">${item.ncid}
</a>
                        </div>
                        <div class="title-wrap title-wrap-2">
                            <h4 class="title"><a href="blog-single.html">{item.ncid}</a></h4>
                            <ul class="admin-list mt-2 mb-4">
                                <li><a href="blog-single.html"><i class="far fa-user"></i>Mob Joe
                                    </a></li>
                                <li><a href="blog-single.html"><i className="fa fa-calendar"></i>{item.nDate}</a></li>
                                <li><a href="blog-single.html"><i class="far fa-heart"></i>12 Likes</a></li>
                                <li><a href="blog-single.html"><i class="far fa-comment-dots"></i>9 Comments</a>
                                </li>
                            </ul>
                            <p>{item.ndes}</p>
                        </div>
                    </div>
                </div>
                 ))}
            {newsList.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">No news found</td>
              </tr>
            )}
            </div>
        </div>
    </section>
    </div>
  )
}
