const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const querystring = require('querystring');
const dotenv = require('dotenv');
const axios = require('axios');
const SpotifyWebApi = require("spotify-web-api-node");


dotenv.config()


const spotify_client_id = process.env.SPOTIFY_CLIENT_ID
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET
const redirect_uri = process.env.REDIRECT_URI;

const app = express()
app.use(cors())
app.use(bodyParser.json())

// app.get('/login', (req, res) => {
//     const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state';

//     const queryParams = querystring.stringify({
//         client_id: spotify_client_id,
//         response_type: 'code',
//         redirect_uri: redirect_uri,
//         scope: scope
//     });

//     res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
// });

// app.get('/callback', (req, res) => {
//     const code = req.query.code

//     axios({
//         method: 'post',
//         url: 'https://accounts.spotify.com/api/token',
//         data: querystring.stringify({
//             grant_type: 'authorization_code',
//             code: code,
//             redirect_uri: redirect_uri
//         }),
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             Authorization: `Basic ${new Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString('base64')}`,
//         },
//     })
//         .then(response => {
//             if (response.status === 200) {
//                 res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
//             } else {
//                 res.send(response);
//             }
//         })
//         .catch(error => {
//             res.send(error);
//         });
// });

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        clientId: spotify_client_id,
        clientSecret: spotify_client_secret,
        redirectUri: "https://accounts.spotify.com/authorize",
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
        redirectUri: "https://accounts.spotify.com/authorize",
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

app.listen(3001, console.log("listening on port 3001")) 
