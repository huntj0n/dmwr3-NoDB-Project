import React from 'react';
import './reset.css'
import './App.css';
import Songs from './Components/Songs'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <content className="content-main">
        <Songs/>
      </content>
      <Footer/>
    </div>
  );   
}

export default App; 