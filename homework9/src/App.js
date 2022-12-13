import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./Redux/store";

import "./index.css";
import "./normalize.css";
import "./reset.css";

import MainPage from "./Pages/Page/MainPage";
import Courses from "./Pages/Courses/Courses";
import Teachers from "./Pages/Teacher/Teachers";
import AboutUs from "./Pages/About/AboutUs";
import Apply from "./Pages/Apply/Apply";
import Applied from "./Pages/Apply/Applied";
import CoursePage from "./Pages/Components/CoursesMain/CoursePage/CoursePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
        <Routes>
          <Route path="/teachers" element={<Teachers />}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
        </Routes>
        <Routes>
          <Route path="/apply" element={<Apply />}></Route>
        </Routes>
        <Routes>
          <Route path="/applie" element={<Applied />}></Route>
        </Routes>
        <Routes>
          <Route path="/course" element={<CoursePage />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
