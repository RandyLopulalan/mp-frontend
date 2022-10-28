import './App.css';
import { Detail, Footer, Header } from './Component/index.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, List } from './Page';

function App() {

  return (
    <>
      <Router>
        <div className='app'>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/list" element={<List />}/>
              <Route path="/detail" element={<Detail />}/>
            </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
