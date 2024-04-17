import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productlist from "./pages/Productlist";
import Singleview from "./pages/Singleview";
import Pagenot from "./pages/Pagenot";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Productlist />}></Route>
        <Route path="/single/:Id" element={<Singleview />}></Route>
        <Route path="/*" element={<Pagenot></Pagenot>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
