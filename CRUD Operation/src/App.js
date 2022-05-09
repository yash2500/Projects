import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/pages/PageNotFound";
import Adduser from "./component/users/Adduser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/add" element={<Adduser />} />
          <Route path="user/edit/:id" element={<EditUser />} />
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
