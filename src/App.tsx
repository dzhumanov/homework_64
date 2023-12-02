import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import AddForm from "./Containers/AddForm/AddForm";
import Posts from "./Containers/Posts/Posts";
import PostInfo from "./Components/PostInfo/PostInfo";
import fetchData from "./fetchData";

function App() {

  

  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="new-post" element={<AddForm />} />
          <Route
            path="/post/:postId"
            element={<PostInfo request={fetchData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
