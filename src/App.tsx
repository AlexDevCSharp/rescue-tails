import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import AllPosts from "./pages/AllPosts";
import Calendar from "./pages/Calendar";
import Partners from "./pages/Partners";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import PostDetails from "./pages/PostDetails";
import TestUpload from "./pages/TestUpload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/stories" element={<Layout><Stories /></Layout>} />
        <Route path="/posts" element={<Layout><AllPosts /></Layout>} />
        <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
        <Route path="/partners" element={<Layout><Partners /></Layout>} />
        <Route path="/signin" element={<Layout><Signin /></Layout>} />
        <Route path="/account" element={<Layout><Account /></Layout>} />
        <Route path="/posts/:id" element={<Layout><PostDetails /></Layout>} />
        <Route path="/test-upload" element={<Layout><TestUpload /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
