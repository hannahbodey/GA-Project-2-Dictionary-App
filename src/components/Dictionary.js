const Dictionary = ({ result }) => {

  const definition = result.shortdef
  const definitionSetter = () => {
    return definition.map(def => {
      return <p key={def}>{def}</p>
    })
  }

  
  let subdirectory
  let audio
  const audioSetter = () => {
    const audioEndpoint = result.hwi.prs[0].sound.audio
    console.log(audioEndpoint)
    if (audioEndpoint.slice(0,3) === 'bix'){
      console.log('bix')
      subdirectory = 'bix'
    } else if (audioEndpoint.slice(0,2) === 'gg'){
      console.log('gg')
      subdirectory = 'gg'
    } else if (audioEndpoint.slice[0,1] === 'number' || audioEndpoint.slice(0,1) === RegExp('^W', '')){
      console.log('number')
      subdirectory = 'number'
    } else {
      console.log(audioEndpoint.slice(0,1))
      subdirectory = audioEndpoint.slice(0,1)
    }
    audio = new Audio()
    audio.src = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${result.hwi.prs[0].sound.audio}.mp3`
    return (
      <div className='icons'>▶️</div>
    )
  }

  const handleClick = () => {
    audio.play()
  }

  return (
    <main>
      {/* SIDEBAR */}
      <div className="sidebar">
        <h4>Similar entries</h4>
        {result.meta.stems.map(item => {
          return <p key={item}>{item}</p>
        })}
      </div>

      {/* MAIN */}
      <section className="dictionary-section">
        {/* ENTRY */}
        <div className="wrapper">

          <div className="word-container">

            <div className="word-and-audio">
              <img className="icons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Merriam-Webster_logo.svg/1200px-Merriam-Webster_logo.svg.png' alt='img' />
              <div className="title">
                <h2>{result.meta.stems[0]}</h2>
              </div>
              <div onClick={handleClick}>
                {result.hwi.prs[0].sound && 
                audioSetter()}
                
              </div>
            </div>

            <div className="pronunciation-and-class">
              {result.hwi.prs[0].mw && <h4>{result.hwi.prs[0].mw}</h4>}
              {result.fl && <h4>{result.fl}</h4>}
            </div>

            <div className="definition">
              <h4>Definition</h4>
              {result.shortdef && 
                definitionSetter()}
            </div>
          </div>
        </div>

        {/* ILLUSTRATION */}
        {/* {result.art && <img src={`https://www.merriam-webster.com/assets/mw/static/art/dict/${result.art.artid}.gif`} alt="img" />} */}
        {result.art && 
        <div className="image-container">
          <div 
            className="illustration" 
            style={{ backgroundImage: `url('https://www.merriam-webster.com/assets/mw/static/art/dict/${result.art.artid}.gif')` }} 
            alt="img">
          </div>
        </div>}
      </section>
    </main>
  )
}

export default Dictionary