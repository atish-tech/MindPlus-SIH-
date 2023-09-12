import { Route, Routes } from "react-router-dom";
import "./App.css"
import HomeApp from "./Component/Home/HomeApp";
import ExerciseApp from "./Component/Exercise/ExerciseApp";
import DoctorApp from "./Component/Doctor/DoctorApp";
import ScoreApp from "./Component/Score/ScoreApp";
import { Navigation } from "./Component/Navigation/Navigation";

function App() {
  
  return (
    <>
        <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="exercise" element={<ExerciseApp /> } />
          <Route path="doctor" element={<DoctorApp />}  />
          <Route path="score" element={<ScoreApp />} />
        </Routes>
          
        </div>
    </>
  );
}

export default App;
