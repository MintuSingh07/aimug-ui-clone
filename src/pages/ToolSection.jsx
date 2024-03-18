import React from 'react';
import "../style/ToolSection.css";
import ToolCard from '../components/ToolCard';
import toolData from "../toolData.json";

const ToolSection = () => {
  return (
    <div id='ToolContainer'>
      <h1 id='title'>How Easily <span style={{color: "#F7672A"}}>AIMug</span> Tool Works</h1>
      <div id='cardSection'>
        {toolData.map((tool, index) => (
          <ToolCard
            key={index}
            heading={tool.heading}
            desc={tool.desc}
            src={tool.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolSection;
