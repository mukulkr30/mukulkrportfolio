import React from 'react'

function CoreCard({subject,index}) {
    return (
        <div className="skill-card" key={index}>
            <div className="skill-icon">{subject.icon}</div>
            <h3>{subject.title}</h3>
            <h6>{subject.abbr}</h6>
            <p>{subject.desc}</p>
        </div>
    )
}

export default CoreCard
