import Login from "./components/login"
import Dashboard from "./dashboard"
import { Route, Routes } from "react-router-dom";
import FavoriteLofi from "./pages/favorite-lofi";

const code = new URLSearchParams(window.location.search).get("code")

export default function App() {
  return (
    <>
      {/* {code ? <Dashboard code={code} /> : <Login />} */}
      <div>
        <Routes>
          <Route path="/" element={code ? <Dashboard code={code} /> : <Login />} />
          <Route path="/favorite-lofi" element={code ? <FavoriteLofi code={code} /> : <Login />} />
        </Routes>
      </div>
    </>
  );
}

