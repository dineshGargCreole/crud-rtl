import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreateUser from "./components/createUser/CreateUser";
import { BrowserRouter } from "react-router-dom";
import ProviderRouter from "./providerRouter/ProviderRouter";
import "./App.css";

function App() {
  return (
    <ProviderRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/new"} element={<CreateUser />} />
      </Routes>
    </ProviderRouter>
  );
}

export default App;
