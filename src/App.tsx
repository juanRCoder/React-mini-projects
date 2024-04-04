import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './Principal/Principal';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          {/* //Ejemplo */}
          {/* <Route path="/rimberio" element={<Rimberio />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
