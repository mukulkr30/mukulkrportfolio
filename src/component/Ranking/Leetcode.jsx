export default function LeetCode(){
    return(
        <>
        <div className="ranking-card">
          <h3 className="platform-name">LeetCode</h3>

          <div className="ranking-info">
            <span className="rank-label">Global Rank</span>
            <span className="rank-value">0.75M</span>
          </div>

          <div className="ranking-info">
            <span className="rank-label">Problems Solved</span>
            <span className="rank-value">190+</span>
          </div>

          <a
            href="https://leetcode.com/u/mukulkr30/"
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-link"
          >
            View Profile →
          </a>
        </div>
        </>
    );
}