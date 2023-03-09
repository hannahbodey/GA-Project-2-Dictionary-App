import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import axios from 'axios'

const Home = () => {

  const [ randomEntry, setRandomEntry ] = useState(null)
  const randomWordArray = ['chew', 'long', 'truck', 'activity', 'delivery', 'direful', 'hiss', 'tangible', 'big', 'hydrant', 'cheerful', 'outgoing', 'whispering', 'young', 'sleepy', 'mug', 'languid', 'shallow', 'internal', 'sea', 'soak', 'tan', 'steady', 'teaching', 'sulky', 'tricky', 'print', 'fragile', 'scandalous', 'habit', 'destruction', 'overflow', 'scale', 'property', 'fuel', 'satisfying', 'camera', 'observation', 'conversation', 'month', 'spooky', 'nail', 'snakes', 'guiltless', 'girl', 'coat', 'mud', 'place', 'deep', 'pig', 'whine', 'pour', 'thought', 'afraid', 'zesty', 'far-flung', 'insidious', 'dog', 'thumb', 'cactus', 'abrupt', 'stormy', 'whip', 'happy', 'book', 'magic', 'receipt', 'preference', 'chivalrous', 'children', 'enchanted', 'light', 'sun', 'fair', 'program', 'name', 'shampoo', 'x-ray', 'family', 'silk', 'depression', 'airport', 'house', 'vague', 'license', 'tedious', 'apathetic', 'general', 'wheel', 'coal', 'fish', 'tapestry', 'soft', 'powerful', 'behavior', 'rule', 'medical', 'thaw', 'sofa', 'flower', 'provide', 'friendly', 'stimulating', 'design', 'brush', 'rich', 'study', 'spectacular', 'show', 'rightful', 'complete', 'outstanding', 'person', 'grubby', 'acrid', 'jar', 'pleasant', 'enchanting', 'walk', 'jeans', 'follow', 'vacuous', 'toothbrush', 'pretty', 'lively', 'stove', 'cold', 'heal', 'present', 'peel', 'wool', 'compare', 'leg', 'appliance', 'messy', 'amount', 'chance', 'toe', 'condition', 'spiral', 'nifty', 'racism', 'smell', 'station', 'stare', 'cave', 'channel', 'serious', 'stuff', 'vulgar']

  useEffect(() => {
    const getRandomWord = async () => {
      const randomNumber = Math.floor(Math.random() * 150)
      const randomWord = randomWordArray[randomNumber]
      try {
        const { data } = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${randomWord}?key=33cbba70-f662-4f2e-9dc8-e2df5cc5ea95`)
        const newData = data.filter(item => item.fl === 'noun' || item.fl === 'adjective')
        setRandomEntry(newData)
        
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWord()
  }, [])

  return (
    <main className="home">
      <div className="hero">
        <h1>What does that mean?</h1>
        <>
          <h3>Word of the Day!</h3>
          { randomEntry &&
            <div className='wordofday'>
              <p>Every day is a school day...</p>
              <p>word of the day: {randomEntry[0].meta.stems[0]}</p>
              <p>definition: {randomEntry[0].shortdef[0]}</p>
            </div>
          }
        </>
        
        <Button className="homebutton" to="/medical" as={Link}>Medical Dictionary</Button>
        <Button className="homebutton" to="/school" as={Link}>School Dictionary</Button>
      </div>
    </main>
  )
}

export default Home