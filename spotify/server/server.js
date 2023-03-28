const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")
const dotenv = require('dotenv');

dotenv.config()


const spotify_client_id = process.env.SPOTIFY_CLIENT_ID
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        clientId: spotify_client_id,
        clientSecret: spotify_client_secret,
        redirectUri: "http://localhost:3000",
        refreshToken
    })

    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })

        spotifyApi.setAccessToken(data.body.access_token)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: spotify_client_id,
        clientSecret: spotify_client_secret,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        res.sendStatus(400)
    })

})

// app.get("https://api.spotify.com/v1/playlists/2bLF11IvHran8chE9qMPDh", (req, res) => {
//     const spotifyApi = new SpotifyWebApi({
//         clientId: "641ca7a434204e509b4c51ac6b20bd7b",
//         clientSecret: "9c714bc6db70462f9f637535311e8a8c",
//         redirectUri: "http://localhost:3000",
//     })

//     spotifyApi.getPlaylist('2bLF11IvHran8chE9qMPDh')
//         .then(function (data) {
//             console.log('Some information about this playlist', data.body);
//         }, function (err) {
//             console.log('Something went wrong!', err);
//         });
// })

app.listen(3001, console.log("listening on port 3001")) 
