import React from 'react';

function Skills() {
  const skills = [
    { name: 'Unity/C#', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'Arduino', level: 60 },
    { name: 'Blender', level: 50 },
    { name: 'HTML/CSS', level: 40 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;