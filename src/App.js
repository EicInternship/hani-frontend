import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nevbar from './Component/Nevbar';
import * as React from 'react';
import { UserContextProvider } from './contex/Usercontext';

function App() {
  return (
    <div className="App">
     <UserContextProvider>
     <Nevbar/>
     </UserContextProvider>
   
    </div>
  );
}

export default App;
