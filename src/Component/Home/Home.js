import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div>
      <center><h1>! Welcome to Social Buddies !</h1></center>
      <h2>Posts:{posts.length}</h2>
      {
        posts.map(post => <Post post={post}></Post>)
      }


    </div>
  );
};

export default Home;