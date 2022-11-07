import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Map, Detail, Cctv} from './Page';

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Map />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path="/liveCamera" element={<Cctv />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
