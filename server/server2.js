const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const querystring = require('querystring');
const axios = require('axios');
const port = process.env.PORT || 3001
require('dotenv').config({ path: '../.env' });


const spotify_client_id = process.env.SPOTIFY_CLIENT_ID
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET
const redirect_uri = process.env.REDIRECT_URI;

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state';

    const queryParams = querystring.stringify({
        client_id: spotify_client_id,
        response_type: 'code',
        redirect_uri: redirect_uri,
        scope: scope
    });

    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
    const code = req.query.code

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${spotify_client_id}:${spotify_client_secret}`).toString('base64')}`,
        },
    })
        .then(response => {
            if (response.status === 200) {
                res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
            } else {
                res.send(response);
            }
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
