import React from 'react'
import "../style/ToolCard.css"
const ToolCard = ({heading, desc,src}) => {
  return (
    <div id='toolContainer'>
        <img src={src} alt="" />
        <div className="desc-div">
            <h1><a href="/">{heading}</a></h1>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ToolCard