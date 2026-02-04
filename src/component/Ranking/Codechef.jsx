import React from 'react'

function Codechef() {
    return (
        <div className="ranking-card">
          <h3 className="platform-name">CodeChef</h3>

          <div className="ranking-info">
            <span className="rank-label">Rating</span>
            <span className="rank-value">1000+</span>
          </div>

          <div className="ranking-info">
            <span className="rank-label">Star Rating</span>
            <span className="rank-value">★</span>
          </div>

          <a
            href="https://www.codechef.com/users/mukulkr30"
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-link"
          >
            View Profile →
          </a>
        </div>
    )
}

export default Codechef
