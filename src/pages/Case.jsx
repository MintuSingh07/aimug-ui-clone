import React from 'react';
import "../style/Case.css";
import CaseCard from '../components/CaseCard';
import cases from "../cases.json";

const Case = () => {
    return (
        <div id='caseContainer'>
            <div id="caseDesc">
                <p>Writing Use Cases</p>
                <h1>Write Better Content ✍️ Faster, A Journey of Discovery & Growth</h1>
            </div>
            {cases.map((item, index) => (
                <CaseCard key={index} cases={item} />
            ))}
        </div>
    );
};

export default Case;
