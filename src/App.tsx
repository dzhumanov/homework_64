import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import AddForm from "./Containers/AddForm/AddForm";

function App() {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="new-post" element={<AddForm/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
