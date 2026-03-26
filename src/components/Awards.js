import React from 'react';
import '../styles/Awards.css';

function Awards() {
  return (
    <section id="awards" className="awards-section">
      <h2>Awards</h2>
      <div className="award-category">
        <h3>2026/03</h3>
        <p>精密工学会北海道支部学生奨励賞</p>
      </div>
      <div className="award-category">
        <h3>2026/03</h3>
        <p>北大えるむ賞 <a href="https://www.hokudai.ac.jp/gakusei/campus-life/campus/commendation.html"><span className="url-text">[URL]</span></a></p>
      </div>
      <div className="award-category">
        <h3>2025/11</h3>
        <p>JPHACKS 2025 Best Hack Award, Best Audience Award 受賞<a href="https://jphacks.com/information/result-report2025/"><span className="url-text">[URL]</span></a></p>
      </div>
      <div className="award-category">
        <h3>2024/03</h3>
        <p>SICE優秀学生賞 <a href="https://www.sice.jp/act/awards/sice_student_award.html"><span className="url-text">[URL]</span></a></p>
      </div>
      <div className="award-category">
        <h3>2024/03</h3>
        <p>インタラクション 2024 優秀論文賞 <a href="https://www.interaction-ipsj.org/2024/award/"><span className="url-text">[URL]</span></a></p>
      </div>
      <div className="award-category">
        <h3>2021/07</h3>
        <p>北海道大学 新渡戸賞 <a href="https://www.hokudai.ac.jp/gakusei/campus-life/campus/incentive.html"><span className="url-text">[URL]</span></a></p>
      </div>
    </section>
  );
}

export default Awards;