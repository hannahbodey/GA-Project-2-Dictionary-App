import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'

const Medical = () => {

  const [ result, setResult ] = useState(null)
  const [ inputValue, setInputValue ] = useState('')
  const [ entry, setEntry ] = useState('artery')
  const [ medicalName, setMedicalName ] = useState('')

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
        const { data } = await axios.get(`https://dictionaryapi.com/api/v3/references/medical/json/${entry}?key=d54e4407-3851-411b-bd92-f875ef2ecdd7`)
        setResult(data.filter(item => item.fl !== 'abbreviation')[0])
        setMedicalName(data[0].meta.id.split(':1'))
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
          <h1 style={{ textAlign: 'center' }}>Medical dictionary</h1>
          <form className="searchbar" onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" placeholder="Type word..." onChange={(e) => handleChange(e) } value={inputValue} />
          </form>
        </section>
        <Dictionary result={result} name={medicalName}
        />
      </>
      }
    </>
  )
}

export default Medical