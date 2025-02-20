import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p className="p-6 text-center">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
        Back to Posts
      </Link>
    </div>
  );
}

export default Details;
