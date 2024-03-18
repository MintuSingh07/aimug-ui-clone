import React from 'react'
import "../style/ToolCard.css"
import {motion, stagger } from "framer-motion"

const ToolCard = ({heading, desc,src}) => {
  return (
    <motion.div
      initial= {{y: 50}}
      whileInView={{y: -100}}
      transition={{duration: 0.8}}
      viewport={{once: true}}
      id='toolContainer'>
        <img src={src} alt="" />
        <div className="desc-div">
            <h1><a href="/">{heading}</a></h1>
            <p>{desc}</p>
        </div>
    </motion.div>
  )
}

export default ToolCard