import React from 'react';
import "../style/price.css"
import PriceCard from '../components/PriceCard';
import Pricing from "../price.json"

const Price = () => {
    return (
        <div id='priceContainer'>
            <h1>Flexible Pricing Plans That Your Needs</h1>
            <div id="priceCards">
                {Pricing.map((priceData, index) => (
                    <PriceCard key={index} type={priceData.type} price={priceData.price} benefits={priceData.benefits} />
                ))}
            </div>
            <div class="copywriting-tool-shape-1 float-bob-x"></div>
            <div class="copywriting-tool-shape-2 float-bob-x"></div>
            <div class="copywriting-tool-shape-3 float-bob-x"></div>
        </div>
    )
}

export default Price