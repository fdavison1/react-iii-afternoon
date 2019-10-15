import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav>
       <span>Home</span>
      </nav>
      <div className="card">
        <div className="numbers">
          <div>1</div>
          <div>/25</div>
        </div>
      </div>
     <footer>
       <div className="previous">{'<'} Previous</div>
       <div className="buttons">
         <button>Edit</button>
         <button>Delete</button>
         <button>New</button>
       </div>
       <div className="next">Next ></div>
     </footer>
    </div>
  );
}

export default App;
