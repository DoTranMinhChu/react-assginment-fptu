import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import DashBoard from './components/DashboardComponent';
import Header from './components/HeaderComponent';
import Main from './components/MainComponents';
import { BATH_SHOWER } from './shared/bath_shower';
import { BEDDING } from './shared/bedding';
import { LIGHTING } from './shared/lighting';

function App() {
  const [bathShower] = useState(BATH_SHOWER);
  const [bedding] = useState(BEDDING);
  const [lighting] = useState(LIGHTING)
  return (
    <>
    <Header/>
    <DashBoard/>
    <Main bathShower={bathShower} bedding={bedding} lighting={lighting}/>

    </>
  );
}

export default App;
