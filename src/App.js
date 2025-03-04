import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Awards from './components/Awards';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <Works />
          <Skills />
          <Publications />
          <Awards />
          <History />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;