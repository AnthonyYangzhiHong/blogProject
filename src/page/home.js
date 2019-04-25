import React from 'react';
import Header from '../components/Header';
import PostsListContainer from '../components/postslist-container';
import Clock from '../components/Clock';

const Home = () => {
  return(
    <div className="homepage-container">
      <Header />
      <PostsListContainer />
      <Clock />
    </div>
  )
}

export default Home;