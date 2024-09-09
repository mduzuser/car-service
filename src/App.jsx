import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  Footer,
  Main,
  Navbar,
  PageNotFound,
  Service,
} from "./source/import/import";
import './App.scss'
import Loader from "./components/loader/Loader";
import Up from "./components/helpers/Up";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Up/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
