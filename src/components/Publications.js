import React from 'react';
import '../styles/Publications.css';

function Publications() {
  return (
    <section id="publications" className="publications-section">
      <h2>Publications</h2>
      <div className="publication-category">
        <h3>Demonstrations and Poster</h3>
        <p>1. Nozomu Iwai, Title, Extended Abstract on CHI 2025 Late Breaking Work <a href="https://chi2025.acm.org/">[URL]</a></p>
      </div>
      <div className="publication-category">
        <h3>Demonstration</h3>
        <p>1. 岩井 望, 東藤 康太郎, 坂本 大介, 2024, AR サポート付きの身体操作型 <a href="https://www.interaction-ipsj.org/2024/">[URL]</a></p>
      </div>
    </section>
  );
}

export default Publications;