import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;
