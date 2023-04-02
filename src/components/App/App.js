import { Routes, Route } from "react-router-dom";
import './App.module.scss';
import Layout from "../Layout";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/recomendation" element={<div>Recom</div>} />
        <Route path="/recomendation" element={<div>Recom</div>} />
        <Route path="/recomendation" element={<div>Recom</div>} />
        <Route path="/recomendation" element={<div>Recom</div>} />
      </Route>
    </Routes>
  );
}

export default App;
