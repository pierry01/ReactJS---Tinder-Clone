import React, { useState, useEffect } from "react"
import database from '../firebase'
import './TinderCards.css'

import TinderCard from 'react-tinder-card'

const TinderCards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {
          people.map(person => (
            <TinderCard
              className="tinderCards__swipe"
              key={person.name}
              preventSwipe={['up, down']}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="tinderCards__card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards
