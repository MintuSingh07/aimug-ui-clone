import React from 'react'
import AccordionComp from '../components/AccordionComp';
import "../style/Accordion.css"

const Accordion = () => {
    return (
        <div id='AccContainer'>
            <div id="AccDetails">
                <p>Frequently Asked Questions</p>
                <h1>Questions About our AIMug? We have Answers!</h1>
            </div>
            <AccordionComp />
        </div>
    )
}

export default Accordion