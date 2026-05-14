

import React from "react";
import "./App.css";

let App = () => {
  return (
    <div className="container">

      
      <div className="sidebar">
        <h2>My Dashboard</h2>

        <ul>
          <li>Overview</li>
          <li>Tasks</li>
          <li>Statistics</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </div>

    
      <div className="main">

        
        <div className="cards">

          <div className="card">
            <h3>Total Tasks</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p>18</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p>7</p>
          </div>

          <div className="card">
            <h3>Today's Tasks</h3>
            <p>5</p>
          </div>

        </div>

        
        <div className="tasks">
          <h2>Tasks</h2>

          <div className="task-input">
            <input type="text" placeholder="Add a new task" />
            <button>Add</button>
          </div>

          <ul>
            <li>Learn UI Hooks</li>
            <li>Build Dashboard UI</li>
            <li>Practice useState</li>
            <li>Read React Docs</li>
            <li>Deploy to Netlify</li>
          </ul>
        </div>

    
        <div className="completion">
          <h2>Task Completion</h2>

          <div className="status">
            <p>✅ Completed : 18</p>
            <p>⏳ Pending : 7</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;