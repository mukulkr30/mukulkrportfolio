import React from 'react'

function CodingNinja() {
    return (
        <div className="ranking-card">
          <h3 className="platform-name">Coding360</h3>

          <div className="ranking-info">
            <span className="rank-label">Your League</span>
            <span className="rank-value">Gold</span>
          </div>

          <div className="ranking-info">
            <span className="rank-label">Problem Solved</span>
            <span className="rank-value">50+</span>
          </div>

          <a
            href="https://www.naukri.com/code360/profile/mukulkr"
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-link"
          >
            View Profile →
          </a>
        </div>
    )
}

export default CodingNinja
