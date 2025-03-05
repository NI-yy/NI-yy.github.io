import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <section id="about" className="header-section">
      <div class="text-block-1">Hey there 👋</div>
      <div class="text-block-2">I'm Nozomu Iwai</div>
      <div class="text-block-3">Game Developer Engineer</div>
      <div class="text-block-4">
        <text class="text-lg">
        I am a master student in the HCI Lab at Hokkaido University, 
        where I am advised by Prof. Daisuke Sakamoto.
        </text>
      </div>
    </section>
  );
}

export default Header;