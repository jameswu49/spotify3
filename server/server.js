const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")
require('dotenv').config({ path: '../.env' });
const port = process.env.PORT || 3001;



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
        redirectUri: "https://lofi-player.herokuapp.com/callback",
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

app.get('/login', (req, res) => {
    try {
        const spotifyApi = new SpotifyWebApi({
            clientId: spotify_client_id,
            clientSecret: spotify_client_secret,
            redirectUri: "https://lofi-player.herokuapp.com/callback"
        });

        const authorizeUrl = spotifyApi.createAuthorizeURL([
            'user-read-private',
            'user-read-email',
            'user-library-read',
            'user-library-modify',
            'user-read-playback-state',
            'user-modify-playback-state',
            'playlist-modify-public',
            'playlist-modify-private',
            'playlist-read-private',
            'streaming',
        ]);

        res.redirect(authorizeUrl);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});