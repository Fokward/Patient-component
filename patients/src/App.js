
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Patients from './components/Patients';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Name from './components/rows/Name';
import Registration from './components/rows/Registration';
import GuarantorName from './components/rows/GuarantorName';
import Dob from './components/rows/Dob';
import Region from './components/rows/Region';
import Ward from './components/rows/Ward';


function App() {
  return (
    <div className="App">
      <Patients/>
      <BrowserRouter>
      <Routes>
        <Route path='/patientName' element={<Name/>}></Route>
        <Route path='/regNo' element={<Registration/>}></Route>
        <Route path='/guarantorName' element={<GuarantorName/>}></Route>
        <Route path='/dob' element={<Dob/>}></Route>
        <Route path='/region' element={<Region/>}></Route>
        <Route path='/ward' element={<Ward/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
