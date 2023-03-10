import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'

const School = () => {

  const [ result, setResult ] = useState(null)
  const [ inputValue, setInputValue ] = useState('')
  const [ entry, setEntry ] = useState('apple')

  const handleSubmit = (e) => { //! i think we need to catch the error here. if dictionary contains inputValue, setEntry(inputValue). if no entry, return 'word not found'
    e.preventDefault()
    setEntry(inputValue)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${entry}?key=33cbba70-f662-4f2e-9dc8-e2df5cc5ea95`)
        setResult(data.filter(item => item.fl !== 'abbreviation')[0])
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [entry])

  return (
    <>
      {/* <h1 style={{ textAlign: 'center' }}>Medical dictionary</h1> */}
      { result &&
      <div className='school-center'>
        <section className='search-section'>
          <h1 style={{ textAlign: 'center' }}>School dictionary</h1>
          <form className="searchbar" onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" placeholder="Type word..." onChange={(e) => handleChange(e) } value={inputValue} />
          </form>
        </section>
        <Dictionary result={result} name={result.meta.stems[0]}
        />
      </div>
      }
    </>
  )
}

export default School