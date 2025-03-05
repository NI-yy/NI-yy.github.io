import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Awards from './components/Awards';
import History from './components/History';
import Footer from './components/Footer';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about'); // デフォルトでAboutをアクティブ
  const sectionRefs = useRef({
    about: null,
    works: null,
    skills: null,
    publications: null,
    awards: null,
    history: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 少し余裕を持たせる（ヘッダー分や視覚的調整）

      for (const [section, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetBottom = offsetTop + ref.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // クリーンアップ
  }, []);

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} />
      <div className="main-content">
        <section id="about" ref={(el) => (sectionRefs.current.about = el)}>
          <Header />
        </section>
        <main>
          <section id="works" ref={(el) => (sectionRefs.current.works = el)}>
            <Works />
          </section>
          <section id="skills" ref={(el) => (sectionRefs.current.skills = el)}>
            <Skills />
          </section>
          <section id="publications" ref={(el) => (sectionRefs.current.publications = el)}>
            <Publications />
          </section>
          <section id="awards" ref={(el) => (sectionRefs.current.awards = el)}>
            <Awards />
          </section>
          <section id="history" ref={(el) => (sectionRefs.current.history = el)}>
            <History />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;