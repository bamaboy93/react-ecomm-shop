import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ItemDetails from "./views/ItemDetails/ItemDetails";
import Home from "./views/Home";
import Checkout from "./views/Checkout/Checkout";
import Confirmation from "./views/Confirmation/Confirmation";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />}>
            <Route path="/success" element={<Confirmation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
