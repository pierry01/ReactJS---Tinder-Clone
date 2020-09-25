import React, { useState } from 'react';
import './ChatScreen.css';

import Avatar from '@material-ui/core/Avatar'

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHj9dWR0-p1oTrDkBj6jjaz6ejROWiwmm5bg&usqp=CAU',
      message: 'Whats up...'
    },
    {
      name: 'Ellen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHj9dWR0-p1oTrDkBj6jjaz6ejROWiwmm5bg&usqp=CAU',
      message: 'Hows it going!'
    },
    {
      message: 'Hi! How are you Ellen!'
    }
  ])

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/2020</p>
      
      {
        messages.map((message) => (
          message.name ? 
          (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
            
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) :
          (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        ))
      }
    </div>
  )
}

export default ChatScreen
