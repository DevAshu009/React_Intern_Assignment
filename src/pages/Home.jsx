import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; // Items per page

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Filtered posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setCurrentPage(1); // Reset to the first page when search term changes
        }}
        className="w-full p-2 mb-4 border rounded"
      />

      {/* Display the current posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentPosts.map(post => (
          <div key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body.slice(0, 50)}...</p>
            <Link to={`/item/${post.id}`} className="text-blue-500 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
