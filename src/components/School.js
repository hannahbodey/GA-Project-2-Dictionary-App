import { useEffect, useState } from 'react'
import axios from 'axios'

const School = () => {

  // ENDPOINTS
  // ids, audio, definition, illustration, word, pronunciation, class

  const [ data, setData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://www.dictionaryapi.com/api/v3/references/sd4/json/school?key=33cbba70-f662-4f2e-9dc8-e2df5cc5ea95')
      setData(data)
      console.log(data)
    }
    getData()
  })

  return (
    <>
      <div>ID: {data[0].meta.id}</div>
      <div>Audio: {data[0].hwi.prs[0].sound.audio}</div>
      <div>Definition: {data[0].def[0].sseq[0][0][1].dt[0][1]}</div>
      <div>Illustration: {}</div>
      <div>Word: {data[0].hwi.hw}</div>
      <div>Pronunciation: {data[0].hwi.prs[0].mw}</div>
      <div>Class: {data[0].fl}</div>
    </>
  )
}

export default School