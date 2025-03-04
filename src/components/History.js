import React from 'react';
import '../styles/History.css';

function History() {
  const history = [
    { date: '2020/11', icon: 'pin', text: '北海道札幌市出身' },
    { date: '2020/04', icon: 'cap', text: '北海道大学入学 工学部' },
    { date: '2024/03', icon: 'cap', text: '北海道大学工学部情報工学科 バッチェラー取得' },
    { date: '2024/04', icon: 'cap', text: '北海道大学大学院情報科学研究科 博士課程進学' },
  ];

  return (
    <section id="history" className="history-section">
      <h2>History</h2>
      <div className="timeline">
        {history.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className={`icon ${item.icon}`}></span>
            <div>
              <strong>{item.date}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;