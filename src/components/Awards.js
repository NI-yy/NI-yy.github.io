import React from 'react';
import '../styles/Awards.css';

function Awards() {
  const awards = [
    'SICE Excellent Student Award [URL]',
    'INTERACTION 2024 Excellent Paper Award [URL]',
    'TOMAKOMAI CITY HACK 2022 Excellent Award [URL]',
    'Hokkaido University Nitobe Award [URL]',
  ];

  return (
    <section id="awards" className="awards-section">
      <h2>Awards</h2>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;