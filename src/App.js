import React, { useState, useEffect, Component } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
import './App.css';
import NavBar from './components/NavBar';
import data from './components/file.json'
const App = () => {
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(currentPosts)

  function next(){
    setCurrentPage(currentPage+1);
  }  
  function prev(){
    setCurrentPage(currentPage-1);
  }  
  return (
    <div className='container mt-5'>
        <NavBar/>
      <Card Cars={currentPosts} />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        next = {next}
        prev = {prev}
      />
    </div>
  );
};

export default App;