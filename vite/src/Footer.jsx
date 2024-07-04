import { useState } from 'react';
import ButtonGroup from "./ButtonGroup"

const Footer = ({ settings, search_keyword }) => {
  const [value, setValue] = useState('')
  return(
    <div className="footer">
      <ButtonGroup settings={settings} />
      <input type="text" placeholder="검색어를 입력" value={value} onChange={
        (evt) => {
          setValue(evt.target.value)
        }
      }/><button onClick={
        () => {
          console.log('clicked!:' + value)
          search_keyword[1](value)
        }

      }>검색</button>
      <h4>chroma visualizer 0.0.2</h4>
    </div>
  )
}

export default Footer
