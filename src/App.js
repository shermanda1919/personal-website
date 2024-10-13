import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <p>Hello! I’m Amanda Sherman, a Computer Science major at UMass Amherst.</p>
        <p>Feel free to learn more about me below!</p>
        <a href="#about">About Me</a> | <a href="#contact">Contact</a>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m passionate about web development and improving my coding skills. I have experience in JavaScript, React, and Python, and am always eager to learn more.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: amanda@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/amanda">My LinkedIn</a></p>
      </section>
    </div>
  );
}

export default App;
