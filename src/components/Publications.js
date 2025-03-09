import React from 'react';
import '../styles/Publications.css';

function Publications() {
  return (
    <section id="publications" className="publications-section">
      <h2>Publications</h2>
      <div className="publication-category">
        <h3>Demonstrations and Poster</h3>
        <p>1. <span className="underline-name">Nozomu Iwai</span>, Title(undisclosed), Extended Abstract on CHI 2025 Late Breaking Work <a href="https://chi2025.acm.org/"><span className="url-text">[DOI]</span></a></p>
      </div>
      <div className="publication-category">
        <h3>Refereed Domestic Conference</h3>
        <p>1. <span className="underline-name">岩井 望</span>, 崔 明根, 坂本 大介, 小野哲夫. AR入力デバイスとしての身体装着型トラックボールの検討. インタラクション2024 情報処理学会.
        </p>
      </div>
    </section>
  );
}

export default Publications;