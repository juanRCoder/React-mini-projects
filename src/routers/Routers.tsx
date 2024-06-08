import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from '../Principal/Principal';
// projects
import ColorPallet from '../colorPallet/ColorPallet';
import TipAmount from '../tipAmount/TipAmount';
import PwsdGenerator from '../PswdGenerator/PwsdGenerator';
import Calculator from '../Calculator/Calculator';
// web pages-sities
import Rimberio from '../Pages/Rimberio/Rimberio';

function Routers() {
  return (
<>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          {/* projects */}
          <Route path="/color-pallet" element={<ColorPallet />} />
          <Route path="/tip-amount" element={<TipAmount />} />
          <Route path="/pswd-generator" element={<PwsdGenerator />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* web pages-sities */}
          <Route path="/rimberio" element={<Rimberio />} />
        </Routes>
      </Router>
    </>
  )
}

export default Routers