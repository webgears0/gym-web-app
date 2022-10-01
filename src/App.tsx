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
      <div className='grid grid-rows-2 h-full w-full'>
        <div className='grid grid-cols-2 h-8'>
          <div className={'h-96 bg-amber-400'}></div>
          <div className={'h-96 bg-green-400'}></div>
        </div>
        <div className='grid grid-cols-2'>
          <div className={'h-96 bg-cyan-400'}></div>
          <div className={'h-96 bg-purple-400'}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
