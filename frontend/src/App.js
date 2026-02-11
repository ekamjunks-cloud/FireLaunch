import "@/App.css";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DemoStores from "./pages/DemoStores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demos" element={<DemoStores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
