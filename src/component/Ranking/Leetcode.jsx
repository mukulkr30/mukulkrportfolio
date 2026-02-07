import { useState,useEffect } from "react";
export default function LeetCode(){
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch("https://leetcode-stats-api.herokuapp.com/mukulkr30")
    .then((res)=>res.json())
    .then((item)=> setData(item))
    .catch(()=>{
      console.log("failed to fetch")
    })
  },[])
  if(!data){
    return(
      <>
        <div className="ranking-card">
          <h3 className="platform-name">LeetCode</h3>

          <div className="ranking-info">
            <span className="rank-label">Global Rank</span>
            <span className="rank-value">0.74M</span>
          </div>

          <div className="ranking-info">
            <span className="rank-label">Problems Solved</span>
            <span className="rank-value">200+</span>
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
    )
  }
    return(
        <>
        <div className="ranking-card">
          <h3 className="platform-name">LeetCode</h3>

          <div className="ranking-info">
            <span className="rank-label">Global Rank</span>
            <span className="rank-value">{data.ranking}</span>
          </div>

          <div className="ranking-info">
            <span className="rank-label">Problems Solved</span>
            <span className="rank-value">{data.totalSolved}</span>
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