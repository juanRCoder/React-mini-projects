import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './Principal/Principal';
import ColorPallet from './colorPallet/ColorPallet';
import TipAmount from './tipAmount/TipAmount';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          {/* Proyectos */}
          <Route path="/color-pallet" element={<ColorPallet />} />
          <Route path="/tip-amount" element={<TipAmount />} />
          {/* En proceso */}

        </Routes>
      </Router>
    </>
  )
}

export default App
