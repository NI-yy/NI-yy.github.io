import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Skills.css';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Skills() {

  const skills = [
    { name: 'Unity/C#', level: 80 , explain : '仕事や研究, 個人開発(〜4年)'},
    { name: 'Python', level: 60 , explain : '研究や個人開発, 競プロ(〜3年)'},
    { name: 'Arduino', level: 40 , explain : '研究や個人開発(〜2年)'},
    { name: 'Blender', level: 30 , explain : '趣味(〜2年)'},
    { name: 'HTML/CSS', level: 20 , explain : '個人開発(〜1年)'},
  ];

  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: skills.map((skill) => skill.level),
        backgroundColor: '#1f3555',
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // ツールチップの内容をカスタマイズ
        callbacks: {
          label: (tooltipItem) => {
            return skills[tooltipItem.dataIndex].explain;
          },
          title: (tooltipItems) => {
            return tooltipItems[0].label; // タイトルはそのまま（例: "Unity/C#"）
          },
          // 凡例（正方形）を完全に非表示にする
          labelColor: () => {
            return {
              borderColor: 'transparent',
              backgroundColor: 'transparent',
            };
          },
        },
        // ツールチップのスタイルをカスタマイズ
        titleFont: {
          size: 20,
          weight: 'bold',
        },
        bodyFont: {
          size: 16,
        },
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        backgroundColor: 'rgba(98, 95, 95, 0.8)',
        // 凡例のボックスを非表示にするための追加設定
        usePointStyle: false,
        boxWidth: 0,
        boxHeight: 0,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        display: true,
        border: {
          display: true,
          color: '#FBFBFB',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 20,
            weight: 'bold',
          },
          color: '#1f3555',
        },
        grid: {
          display: false,
        },
        display: true,
        border: {
          display: true,
          color: '#FBFBFB',
        },
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div style={{ height: '300px', width: '100%', position: 'relative' }}>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}

export default Skills;