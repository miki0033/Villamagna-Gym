import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/templates/Layout";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {
            //<Route path="/data" element={<Join />} />-->
          }
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
