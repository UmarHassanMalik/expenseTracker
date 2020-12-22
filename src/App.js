import React from 'react';
import './App.css';
import Child from './child.js';
import {Transaction_Provider} from "./transactionContext";

function App() {
  return (
    <div>
      <Transaction_Provider>
      <Child/>
      </Transaction_Provider>
    </div>
  );
}

export default App;
