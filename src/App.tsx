import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const navbarLinks = [
  { href: '#home', title: 'One'},
  { href: '#gains', title: 'Two'},
  { href: '#things', title: 'Three'},
]

function App() {
  return (
    <div className="App">
      <Navbar links={navbarLinks}/>
    </div>
  );
}

export default App;
