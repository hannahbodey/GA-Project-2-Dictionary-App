
//Single word in centre of page, word in bold with pronunciation and class (noun, verb etc. - key fl) underneath - image?
//Audio pronunciation + play button
//Definition underneath (along with example?)
//Sidebar with suggested related searches - these can be from lower down the search data => have ready in CSS but can be put into display:none if necessary
//Link to make another search / search bar that resets the card to be empty
//Pattern on the border that changes for medical v. school
//Neutral background colour 

import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    const getMedical = async () => {
      try {
        const response = await axios.get('/api/v3/references/medical/json/test?key=d54e4407-3851-411b-bd92-f875ef2ecdd7')
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])
  return (
    console.log('x')
  )
}

// object breakdown
//array {meta}.{id} = name
//array {fl} = word class
//array {shortdef} = definition
//Only the name is inside a further object, the others are simply inside the initial array. 
//This is the same for both dictionaries. 
export default Home