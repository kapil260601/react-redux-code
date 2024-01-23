// import './App.css';
// import AxiosTutorial from './components/AxiosTutorial';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <div className="App">
      {/* <AxiosTutorial /> */}
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;