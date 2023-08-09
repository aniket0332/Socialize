import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/"  element={<Homepage/>} />
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;