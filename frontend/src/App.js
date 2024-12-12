import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './pages/Main';
import DiaryContinue from './pages/DiaryContinue';
import Diary from './pages/Diary';
import Analysis from './pages/Analysis';
import AnalysisGraph from './pages/AnalysisGraph';
import AboutUs from './pages/AboutUs';


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path={"/"} element={<Main />}></Route>
                <Route path={"/diaryContinue"} element={<DiaryContinue />}></Route>
                <Route path={"/analysis"} element={<Analysis />}></Route>
                <Route path={"/analysisgraph"} element={<AnalysisGraph />}></Route>
                <Route path={"/aboutus"} element={<AboutUs />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;