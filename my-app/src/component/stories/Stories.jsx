import React, { useContext } from 'react'
import "./stories.scss"
import PHS2 from '../../assets/PHS2.jpg'
import {AuthContext} from '../../context/authContext'

const Stories = () => {
    const {currentUser} = useContext(AuthContext)

    // dummy data
    const stories = [
    {
      id: 1,
      name: "park hyungsik",
      img: PHS2,
    },
    {
      id: 2,
      name: "park hyungsik",
      img: PHS2,
    },
    {
      id: 3,
      name: "park hyungsik",
      img: PHS2,
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt=''/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map((story)=>{
        return(
            <div className="story" key={story.id}>
                <img src={story.img} alt=''/>
                <span>{story.name}</span>
            </div>
        )
      })}

      
    </div>
  )
}

export default Stories
