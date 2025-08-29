import React from 'react'
import './home.scss';
import Stories from '../../component/stories/Stories';
import Posts from '../../component/posts/Posts';

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home
