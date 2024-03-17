import React, { useRef, useEffect, useState } from 'react';
import "../style/CaseCard.css";

const CaseCard = ({ cases }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (event) => {
      const offsetX = card.getBoundingClientRect().left + card.offsetWidth / 1.5;
      const offsetY = card.getBoundingClientRect().top + card.offsetHeight / 1.8;

      const dx = event.clientX - offsetX;
      const dy = event.clientY - offsetY;

      setTimeout(() => {
        setMousePosition({ x: dx, y: dy });
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id='caseCard' ref={cardRef}>
      <div id="innerCardcase">
        <img src={cases.img} alt="" />
        <div id="caseDetails">
          <h1>{cases.title}</h1>
          <p>{cases.desc}</p>
        </div>
        <div id="caseBtn">
          <a href="/">Get Started</a>
          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0,0,256,256"
            style={{ fill: "#000000" }}>
            <g fill="#ffffff" fill-rule="nonzero">
              <path d="M49.01172,20.87695c-0.37035,-0.00673 -0.7141,0.19179 -0.89336,0.51593c-0.17926,0.32415 -0.16468,0.72083 0.03789,1.03094c0,0 1.1544,1.82178 3.01758,3.88672c1.5513,1.71928 3.68453,3.48962 6.08594,4.7168c-3.81454,3.02611 -6.50153,5.46337 -8.76758,8.06836c0.66508,-3.31935 2.24111,-5.454 4.16406,-7.37695c0.28583,-0.28603 0.37129,-0.71604 0.21656,-1.08963c-0.15474,-0.37359 -0.51922,-0.61724 -0.92359,-0.6174h-47c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44.78711c-1.95536,2.40811 -3.49822,5.48736 -3.59961,10.07813c-0.00974,0.43961 0.2688,0.83402 0.68635,0.97186c0.41756,0.13784 0.87616,-0.01323 1.13005,-0.37225c2.87193,-4.05472 5.8413,-6.40884 11.66797,-11.01758c0.28431,-0.22555 0.42412,-0.58743 0.36531,-0.94555c-0.05881,-0.35812 -0.307,-0.65628 -0.64852,-0.77906c-2.50767,-0.89937 -4.93212,-3.03975 -6.67969,-4.97656c-1.74757,-1.93681 -2.81445,-3.61914 -2.81445,-3.61914c-0.17862,-0.28937 -0.49204,-0.46815 -0.83203,-0.47461z" />
            </g>
          </svg> */}
        </div>
      </div>
      <div id="before" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
    </div>
  );
};

export default CaseCard;
