import React from 'react';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Goggle Apps</h1>

      {/* Home page with the search bar*/}
      <Home />
      {/* Search Page with search results */}
    </div>
  );
}

export default App;
