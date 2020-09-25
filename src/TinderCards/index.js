import React, { useState } from "react"
import './TinderCards.css'

import TinderCard from 'react-tinder-card'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg'
    },
    {
      name: 'Mark Zuckerberg',
      url: 'https://exame.com/wp-content/uploads/2020/09/size_960_16_9_mark-zuckerberg1.jpg?quality=70&strip=info'
    }
  ])

  return (
    <div>
      <h1>Tinder Cards</h1>

      {
        people.map(person => (
          <TinderCard >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))
      }
    </div>
  )
}

export default TinderCards
