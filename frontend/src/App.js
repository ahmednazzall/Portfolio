import './App.css';
import Ahmad from './components/ahmadPage/Ahmad';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Ahmad/>}/>
      </Routes>

    </div>
  );
}

export default App;
