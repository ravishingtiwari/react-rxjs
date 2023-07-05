import React from 'react';
import './App.css';
import { LoggedinMember, LoginComponent } from './login';

function App() {
  return (
    <div className="App">
      <LoggedinMember/>
      <LoginComponent/>    
    </div>
  );
}

export default App;
