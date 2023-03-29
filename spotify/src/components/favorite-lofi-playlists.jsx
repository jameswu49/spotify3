import React, { useState, useEffect } from "react"
import axios from "axios"

export default function GetPlaylists({ accessToken }) {
    const [image, setImage] = useState([])
    const [name, setName] = useState([])
    const [artist, setArtist] = useState([])

    useEffect(() => {
        if (!accessToken) return
        axios.put('https://api.spotify.com/v1/me/player/play', {
            context_uri: 'spotify:playlist:2bLF11IvHran8chE9qMPDh',
            offset: {
                position: 0
            },
            position_ms: 0
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response);
            })
    }, [accessToken, image])

    return (
        <>
            <Image image={image} />
            <Name name={name} />
            <Artist artist={artist} />
        </>
    )

}

function Image({ image }) {
    return <img src={image} alt="" />
}

function Name({ name }) {
    return <h1>{name}</h1>
}

function Artist({ artist }) {
    return <h2>{artist}</h2>
}
