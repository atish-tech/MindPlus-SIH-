import { Route, Routes } from "react-router-dom";
import "./App.css"
import HomeApp from "./Component/Home/HomeApp";
import ExerciseApp from "./Component/Exercise/ExerciseApp";
import DoctorApp from "./Component/Doctor/DoctorApp";
import ScoreApp from "./Component/Score/ScoreApp";
import { Navigation } from "./Component/Navigation/Navigation";
import Footer from "./Component/Footer/Footer";
import Login from "./Component/Login/Login";
import { ProtectedRoute } from "./Component/Protected Route/ProtectedRoute";
import { Account } from "./Component/Account/Account";

function App() {
  
  return (
    <>
        <div className="app">
        {/* <Navigation /> */}
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="home" element={<HomeApp />} />
          <Route path="exercise" element={<ProtectedRoute Component={ExerciseApp} /> } />
          <Route path="doctor" element={<ProtectedRoute Component={DoctorApp} />}  />
          <Route path="score" element={<ProtectedRoute Component={ScoreApp} />} />
          <Route path="account" element={<ProtectedRoute Component={Account} />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
