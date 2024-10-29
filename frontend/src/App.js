
import Nav from './Nav';
import Main from './Main';
import DiaryContinue from './DiaryContinue';
import Diary from './Diary';
import Analysis from './Analysis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path={"/"} element={<Main />}></Route>
                <Route path={"/diaryContinue"} element={<DiaryContinue />}></Route>
                <Route path={"/analysis"} element={<Analysis />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;