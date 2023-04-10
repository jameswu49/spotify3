import Login from "./components/login"
import Dashboard from "./dashboard"
import { Route, Routes } from "react-router-dom";
import AccessContext from './components/access-token';
import Player from "./components/spotify-player";
import { useState, useEffect } from "react";

const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split("&").reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {})
};

export default function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const accessToken = getTokenFromUrl().access_token
    window.location.hash = "";

    if (accessToken) {
      setAccessToken(accessToken)
    }
  }, []);

  console.log(accessToken)

  return (
    <>
      <AccessContext.Provider value={{ accessToken }}>
        <div>
          <Routes>
            <Route path="https://lofi-player.herokuapp.com" element={<Login />} />
            <Route path="/callback" element={<Dashboard code={accessToken} />} />
            <Route path="/favorite-lofi" element={<Player token={accessToken} playlistId={"2bLF11IvHran8chE9qMPDh"} title="Favorite Lofi" />} />
            <Route path="/lofi-mood" element={accessToken ? <Player token={accessToken} playlistId={"3SHjoboV9TGNANyWkYX3Lc"} title="Lofi Mood" /> : <Login />} />
          </Routes>
        </div>
      </AccessContext.Provider>
    </>
  );
}

