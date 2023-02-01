import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreateUser from "./components/createUser/CreateUser";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/new"} element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
