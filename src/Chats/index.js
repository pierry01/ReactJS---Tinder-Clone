import React from 'react'
import './Chats.css'
import Chat from '../Chat'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name = "Natasha"
        message = "I love you too"
        timestamp = "30 minutes ago"
        profilePic = "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
      />
      
      <Chat
        name = "Mark"
        message = "Yo whats up!"
        timestamp = "55 minutes ago"
        profilePic = "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
      />
      
      <Chat
        name = "Sarah"
        message = "Hey!!"
        timestamp = "3 days ago"
        profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWhzBr1cgYhOtxQTo6GvXzX6JIq39qYilUyQ&usqp=CAU"
      />
      
      <Chat
        name = "Ellen"
        message = "How are you?"
        timestamp = "1 week ago"
        profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHj9dWR0-p1oTrDkBj6jjaz6ejROWiwmm5bg&usqp=CAU"
      />
    </div>
  )
}

export default Chats