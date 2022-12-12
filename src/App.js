import { Routes } from "react-router-dom";
import "./App.css";
import { AppRoute } from "./components/Route/AppRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;