import './App.css';
import Home from './pages/home';
import Navbar from './pages/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './pages/pricing/Pricing';
import Service from './pages/service/Service';

function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path='service' element={<Service/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
