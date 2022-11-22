import { useState, useEffect } from 'react';
import React from 'react';
import Post from '../Post'
import '../../styles/Dashboard.css';



export default function Dashboard() {
const [allPosts, setAllPosts] = useState([]);

  async function getPosts() {
    const response = await fetch('/api/posts');
    const allPosts = await response.json();

    setAllPosts(allPosts);
  };
useEffect(() => {
  getPosts();
}, []);

return (
  <Post allPosts={allPosts} />
)
};
