import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogView() {
     const { id } = useParams(); // Get :id from the URL
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/singlenews/${id}`);
        setNews(response.data.news);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;


  return (
    <div>
          <div>
      <h2>{news?.ncid || 'No Title Found'}</h2>
      <p>{news?.ndes || 'No Content Found'}</p>
      {/* Add more fields as needed: image, date, author, etc. */}
    </div>
    </div>
  )
}

export default BlogView