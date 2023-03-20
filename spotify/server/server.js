const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()

app.post('/login', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        clientId: "641ca7a434204e509b4c51ac6b20bd7b",
        clientSecret: "9c714bc6db70462f9f637535311e8a8c",
        redirectUri: "http://localhost:3000"
    })
})