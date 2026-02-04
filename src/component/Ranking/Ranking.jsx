import React from "react";
import "./Ranking.css";
import Codechef from "./Codechef";
import LeetCode from "./Leetcode";
import CodingNinja from "./CodingNinja";

export default function Ranking() {
  return (
    <section className="ranking-section" id="ranking">
      <h2 className="ranking-title">Competitive Programming</h2>

      <div className="ranking-grid">
        <LeetCode/>
        <Codechef/>
        <CodingNinja/>
      </div>
    </section>
  );
}
