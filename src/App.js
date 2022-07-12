import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { useState } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import { BATH_SHOWER } from './shared/bath_shower';
import { BEDDING } from './shared/bedding';
import { LIGHTING } from './shared/lighting';

function App() {
  const [bathShower] = useState(BATH_SHOWER);
  const [bedding] = useState(BEDDING);
  const [lighting] = useState(LIGHTING)
  return (
    <>
      <Home bathShower={bathShower} bedding={bedding} lighting={lighting}></Home>
    </>
  );
}

export default App;
