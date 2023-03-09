import { useState } from 'react'
// import { handleChange } from './helpers/functions'

const Dictionary = ({ result, relatedWords, image }) => {

  // const [ inputValue, setInputValue ] = useState('')

  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  //   const searchValue = inputValue
  //   console.log(inputValue)
  //   return searchValue
  // }

  const definition = result.shortdef

  const definitionSetter = () => {
    return definition.map(def => {
      return <p key={def}>{def}</p>
    })
  }

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
              <img className="icons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Merriam-Webster_logo.svg/1200px-Merriam-Webster_logo.svg.png' alt='img' />
              <div className="title">
                <h2>{result.meta.stems[0]}</h2>
              </div>
              <div className="icons" >▶️
                {result.hwi.prs[0].sound && <audio src={result.hwi.prs[0].sound.audio}></audio>}
                {/* <audio src={result.hwi.prs[0].sound.audio}></audio> */}
              </div>
            </div>

            <div className="pronunciation-and-class">
              {result.hwi.prs[0].mw && <h4>{result.hwi.prs[0].mw}</h4>}
              {/* <h4>{result.hwi.prs[0].mw}</h4> */}
              {result.fl && <h4>{result.fl}</h4>}
              {/* <h4>{result.fl}</h4> */}
            </div>

            <div className="definition">
              <h4>Definition</h4>
              {result.shortdef && 
                definitionSetter()}
              {/* <p>{result.def[0].sseq[0][0][1].dt[0][1]}</p> */}
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