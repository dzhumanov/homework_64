import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import AddForm from "./Containers/AddForm/AddForm";
import Posts from "./Containers/Posts/Posts";
import PostInfo from "./Components/PostInfo/PostInfo";
import fetchData from "./fetchData";
import About from "./Containers/About/About";
import Contacts from "./Containers/Contacts/Contacts";

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
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
