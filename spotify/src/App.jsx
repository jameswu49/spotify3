import Login from "./components/login"
import Dashboard from "./dashboard"
import { Route, Routes } from "react-router-dom";
import AccessContext from './components/access-token';
import useAuth from "./components/useAuth";
import Player from "./components/spotify-player";


const code = new URLSearchParams(window.location.search).get("code")

export default function App() {
  const accessToken = useAuth(code);

  return (
    <>
      <AccessContext.Provider value={{ accessToken }}>
        <div>
          <Routes>
            <Route path="/" element={code ? <Dashboard code={code} /> : <Login />} />
            <Route path="/favorite-lofi" element={code ? <Player token={accessToken} playlistId={"2bLF11IvHran8chE9qMPDh"} /> : <Login />} />
            <Route path="/lofi-mood" element={code ? <Player token={accessToken} playlistId={"3SHjoboV9TGNANyWkYX3Lc"} /> : <Login />} />
          </Routes>
        </div>
      </AccessContext.Provider>
    </>
  );
}

