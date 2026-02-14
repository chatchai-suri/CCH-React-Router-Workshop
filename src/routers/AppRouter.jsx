import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import LifeStyle from "../pages/LifeStyle";
import Journey from "../pages/Journey";
import Inspiration from "../pages/Inspiration";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ShopLayout from "../components/shop/ShopLayout";
import ShopHome from "../components/shop/ShopHome";
import CategoryPage from "../components/shop/CategoryPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lifestyle" element={<LifeStyle />} />
          <Route path="journey" element={<Journey />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="shop" element={<ShopLayout />}>
            <Route index element={<ShopHome />} />
            <Route path=":category" element={<CategoryPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
