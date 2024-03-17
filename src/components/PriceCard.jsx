import React from 'react';
import "../style/priceCard.css"

const PriceCard = ({type, price, benefits}) => {
    return (
        <div id="priceCard">
            <h3>{type}</h3>
            <h2>{price}</h2>
            <div id="start">
                <button><span>Start For Free</span></button>
                <div id='btn-hover'></div>
            </div>
            <p>*Billed monthly until cancelled</p>
            <div id="serviceBenifits">
                <ul>
                    {benefits.map((ben, i) => (
                        <li key={i}>{ben}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PriceCard;
