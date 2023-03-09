import { useState } from 'react'
// import { handleChange } from './helpers/functions'

const Dictionary = ({ searchValue, relatedWords, word, audio, pronunciation, wordClass, definition, image }) => {

  // const [ inputValue, setInputValue ] = useState('')

  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  //   const searchValue = inputValue
  //   console.log(inputValue)
  //   return searchValue
  // }


  return (
    <main>
      {/* SIDEBAR */}
      <div className="sidebar">
        {relatedWords}
      </div>

      {/* MAIN */}
      <section>
        {/* ENTRY */}
        <div className="wrapper">
          {/* <div className="searchbar">
            <label htmlFor="search"></label>
            <input type="text" name="search" placeholder="Type here" onChange={handleChange} value={searchValue} />
          </div> */}

          <div className="word-container">

            <div className="word-and-audio">
              <img className="icons" alt='img' />
              <div className="title">
                <h2>{word}</h2>
              </div>
              <div className="icons" >▶️
                <audio src={audio}></audio>
              </div>
            </div>

            <div className="pronunciation-and-class">
              <h4>{pronunciation}</h4>
              <h4>{wordClass}</h4>
            </div>

            <div className="definition">
              <h4>Definition</h4>
              <p>{definition}</p>
            </div>
          </div>
        </div>

        {/* ILLUSTRATION */}
        <div className="illustration">
          <img src={image} alt="img"></img>
        </div>
      </section>
    </main>
  )
}

export default Dictionary