import Login from "./components/Login";
import Signup from "./components/SignUp";
import LoginSuccess from "./components/LoginSuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrackScreen from "./components/TrackScreen";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/trackScreen" element={<TrackScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
