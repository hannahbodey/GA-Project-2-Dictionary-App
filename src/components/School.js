import { useEffect, useState } from 'react'
import axios from 'axios'
import Dictionary from './Dictionary'

const School = () => {

  // ENDPOINTS
  // ids, audio, definition, illustration, word, pronunciation, class

  const [ entry, setEntry ] = useState([])
  const [ inputValue, setInputValue ] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.dictionaryapi.com/api/v3/references/sd4/json/school?key=33cbba70-f662-4f2e-9dc8-e2df5cc5ea95')
        // console.log(data[0].hwi.prs[0].sound.audio)
        setEntry(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <>
      { entry.length > 0 &&
      <>
        <section className='search-section'>
          <div className="searchbar">
            <label htmlFor="search"></label>
            <input type="text" name="search" placeholder="Type here" onChange={handleChange} value={inputValue} />
          </div>
        </section>
        <Dictionary 
          relatedWords={'check'}
          word={entry[0].hwi.hw} 
          audio={entry[0].hwi.prs[0].sound.audio} 
          pronunciation={entry[0].hwi.prs[0].mw} 
          wordClass={entry[0].fl} 
          definition={entry[0].def[0].sseq[0][0][1].dt[0][1]}
          image={'http://placekitten.com/200/300'} 
        />
        {/* <div>ID: {entry[0].meta.id}</div>
        <div>Audio: {entry[0].hwi.prs[0].sound.audio}</div>
        <div>Definition: {entry[0].def[0].sseq[0][0][1].dt[0][1]}</div>
        <div>Illustration: {}</div>
        <div>Word: {entry[0].hwi.hw}</div>
        <div>Pronunciation: {entry[0].hwi.prs[0].mw}</div>
        <div>Class: {entry[0].fl}</div>  */}
      </>
      }
    </>
  )
}

export default School