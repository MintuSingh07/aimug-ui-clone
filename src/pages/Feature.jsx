import React from 'react';
import "../style/Features.css"
import FeatureDiv from '../components/FeatureDiv';
import featuresData from "../feature.json"

const Feature = () => {
    return (
        <div id='featureContainer'>
            <div id="FeatureDetails">
                <p>Core Features</p>
                <h1>Generative AI Designed for creators. Make your Life Easier with <span>AIMug</span></h1>
            </div>
            <div id="FeatureCards">
                {featuresData.map((feature, index) => (
                    <div key={index} id='featureDiv'>
                        <FeatureDiv feature={feature} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature