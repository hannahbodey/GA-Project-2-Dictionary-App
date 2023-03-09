import { useEffect, useState } from 'react'
import axios from 'axios'
// import useKeypress from 'react-use-keypress'
import Dictionary from './Dictionary'

const School = () => {

  // ENDPOINTS
  // ids, audio, definition, illustration, word, pronunciation, class

  const [ result, setResult ] = useState(null)
  const [ inputValue, setInputValue ] = useState('')
  const [ entry, setEntry ] = useState('apple')


  // useEffect(() => {
  //   window.addEventListener('keyup', function(e) {
  //     console.log('input value is: ' + inputValue)
  //     if (e.key === 'Enter'){
  //       console.log('Pressed enter')
  //       setEntry(inputValue)
  //       console.log(entries)
  //       entries.forEach(item => {
  //         console.log(item.meta.id)
  //         console.log(entries)
  //         setEntry(inputValue)
  //         console.log(entries)
  //       })
  //       setEntry(inputValue)
  //       console.log(entry)
  //     }
  //   })
  // }, )

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(entry)
    setEntry(inputValue)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
    // console.log(inputValue)
    // console.log(entries[0].meta.id)
    // console.log(entries)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${entry}?key=33cbba70-f662-4f2e-9dc8-e2df5cc5ea95`)
        // console.log(data[0].hwi.prs[0].sound.audio)
        setResult(data.filter(item => item.fl !== 'abbreviation')[0])
        // console.log(inputValue)
        // console.log(data)
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
          // word={result.meta.stems[0]} 

          // audio={result.hwi.prs[0].sound.audio} 
          // pronunciation={entries[0].hwi.prs[0].mw} 
          // wordClass={entries[0].fl} 
          // definition={entries[0].def[0].sseq[0][0][1].dt[0][1]}
          image={'http://placekitten.com/200/300'} 
        />
      </>
      }
    </>
  )
}

export default School