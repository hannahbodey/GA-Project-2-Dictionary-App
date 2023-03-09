import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'

const Medical = () => {

  const [ result, setResult ] = useState(null)
  const [ inputValue, setInputValue ] = useState('')
  const [ entry, setEntry ] = useState('artery')

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
        const { data } = await axios.get(`https://dictionaryapi.com/api/v3/references/medical/json/${entry}?key=d54e4407-3851-411b-bd92-f875ef2ecdd7`)
        setResult(data.filter(item => item.fl !== 'abbreviation')[0])
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [entry])

  return (
    <>
      { result &&
      <>
        <section className='search-section'>
          <form className="searchbar" onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" placeholder="Type here" onChange={(e) => handleChange(e) } value={inputValue} />
          </form>
        </section>
        <Dictionary result={result} 
          relatedWords={'check'}
        />
      </>
      }
    </>
  )
}

export default Medical