
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;