import './index.css'
import './normalize.css'
import './reset.css'
import MainPage from './Pages/Page/MainPage';
import Courses from './Pages/Courses/Courses'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teachers from './Pages/Teacher/Teachers';
import { Provider } from 'react-redux';
import {store} from './Redux/store'


function App() {
  return (
    <Provider store={store}>
    
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes>
      <Routes>
        <Route path='/courses' element={<Courses/>}></Route>
      </Routes>
      <Routes>
        <Route path='/teachers' element={<Teachers/>}></Route>
      </Routes>
    </Router>
   
    </Provider>
  );
}

export default App;
