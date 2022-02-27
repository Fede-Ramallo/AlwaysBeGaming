import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Land from "./components/Land/Land";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Land />} />
      <Route path="Home" element={<Home />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
  );
}

export default App;