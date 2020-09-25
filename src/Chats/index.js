import { Chat } from '@material-ui/icons'
import React from 'react'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name = "Mark"
        message = "Yo whats up!"
        timestamp = "40 seconds ago"
        profilePic = "..."
      />
    </div>
  )
}

export default Chats