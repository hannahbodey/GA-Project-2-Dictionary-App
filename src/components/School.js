import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'
import WordNotFound from './WordNotFound'

const School = () => {

  const [ result, setResult ] = useState(null)
  const [ inputValue, setInputValue ] = useState('')
  const [ entry, setEntry ] = useState('apple')
  const [ schoolName, setSchoolName ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEntry(inputValue)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${entry}?key=${process.env.REACT_APP_SCHOOL_KEY}`)
        setResult(data.filter(item => item.fl !== 'abbreviation')[0])
        setSchoolName(data[0].meta.stems[0])
      } catch (err) {
        console.log(err)
      }
    }
    getData() 
  }, [entry])

  return (
    <>
      { (result || result === undefined) &&
      <>
        <div className='school-center'>
          <section className='search-section'>
            <h1 style={{ textAlign: 'center' }}>School dictionary</h1>
            <form className="searchbar" onSubmit={handleSubmit}>
              <label htmlFor="search"></label>
              <input type="text" name="search" placeholder="Type word..." onChange={(e) => handleChange(e) } value={inputValue} />
            </form>
          </section>
          {result === undefined ?
            <WordNotFound /> :
            <Dictionary result={result} name={schoolName}/>
          }
        </div>
      </>
      }
    </>
  )
}

export default School