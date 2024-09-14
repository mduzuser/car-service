import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Footer,
  Main,
  MainService,
  Navbar,
  PageNotFound,
  Service,
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
  Service9,
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
        <Route path="*" element={<PageNotFound />} />

        {/* services */}
        <Route path='/mainservice' element={<MainService/>}/>
        <Route path='/service1' element={<Service1/>}/>
        <Route path='/service2' element={<Service2/>}/>
        <Route path='/service3' element={<Service3/>}/>
        <Route path='/service4' element={<Service4/>}/>
        <Route path='/service5' element={<Service5/>}/>
        <Route path='/service6' element={<Service6/>}/>
        <Route path='/service7' element={<Service7/>}/>
        <Route path='/service8' element={<Service8/>}/>
        <Route path='/service9' element={<Service9/>}/>
        {/* services */}
      </Routes>
      <Up/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
