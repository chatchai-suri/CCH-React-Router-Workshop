import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lifestyle" element={<p>LIFESTYLE</p>} />
          <Route path="/journey" element={<p>JOURNEY</p>} />
          <Route path="/inspiration" element={<p>INSPIRATION</p>} />
          <Route path="/about" element={<p>ABOUT</p>} />
          <Route path="/contact" element={<p>CONTACT</p>} />
          <Route path="*" element={<p>404 Not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
