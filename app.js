import logo from './logo.svg';
import './App.css';
import ListUsers from "./layout/ListUsers"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <ListUsers users={[{firstName:"D", lastName:"DYO"},{firstName:"K", lastName:"CRO"},{firstName:"A", lastName:"AEO"},{firstName:"B", lastName:"BUO"}]} />
    </div>
  );
}

export default App;
