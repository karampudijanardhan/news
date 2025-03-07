import { useState } from "react";
import "./App.css";
import "./Components/Header.css";
import "./Components/AllNews.css"
import Header from "./Components/Header";
import AllNews from "./Components/AllNews";
// import Footer from "./components/Footer";
import TopHeadlines from "./Components/TopHeadlines";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./Components/CountryNews";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </Routes>
    </div>
  );
}

export default App;