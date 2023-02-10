import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreateUser from "./components/createUser/CreateUser";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/new"} element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
