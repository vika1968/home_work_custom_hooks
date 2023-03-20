
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Page404 from "./views/Page404";
import Layout from "./components/Layout";
import ShowCounter from "./views/ShowCounter";
import HoverElement from "./components/HoverElement";
import SimpleTimer from "./components/SimpleTimer";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Layout />}>
        <Route path="/counter" element={<ShowCounter />} />       
        <Route path="/simpletimer" element={<SimpleTimer />} />
        <Route path="/hover" element={<HoverElement />} />
      </Route>
    </Routes>
  );
}

export default App;
