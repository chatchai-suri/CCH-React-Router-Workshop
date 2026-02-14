import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import LifeStyle from "../pages/LifeStyle";
import Journey from "../pages/Journey";
import Inspiration from "../pages/Inspiration";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
