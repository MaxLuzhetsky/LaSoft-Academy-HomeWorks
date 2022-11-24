import './index.css'
import './normalize.css'
import './reset.css'
import MainPage from './Pages/Page/MainPage';
import Courses from './Pages/Courses/Courses'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes>
      <Routes>
        <Route path='/courses' element={<Courses/>}></Route>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
