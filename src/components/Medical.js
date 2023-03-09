import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'

const Medical = () => {
  const [ searchTerm, setSearchTerm ] = useState([])
  const [ inputValue, setInputValue ] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://dictionaryapi.com/api/v3/references/medical/json/doctor?key=d54e4407-3851-411b-bd92-f875ef2ecdd7')
        data.filter()
        setSearchTerm(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <>
      {(searchTerm.length > 0) && (searchTerm) &&
      <>
        <main>
          <section className='search-section'>
            <div className="searchbar">
              <label htmlFor="search"></label>
              <input type="text" name="search" placeholder="Type here" onChange={handleChange} value={inputValue} />
            </div>
          </section>
        </main>
        <Dictionary 
          relatedWords={'check'}
          word={searchTerm[0].meta.stems[0]} 
          audio={searchTerm[0].hwi.prs[0].sound.audio} 
          pronunciation={searchTerm[0].hwi.hw} 
          wordClass={searchTerm[0].fl} 
          definition={searchTerm[0].shortdef[0]}
          // image={'http://placekitten.com/200/300'}
        />
      </>
      }
    </>
  )
}

export default Medical