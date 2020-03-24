import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard.jsx";
import './components/MemoryCard.css';
function App() {
  return (
    <div className="App">
        <header className="App-header">
      <div className="title">Memory Game</div>
      <div className="subtitle">Match cards to win</div>
      </header>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    </div>
  );
}

export default App;
