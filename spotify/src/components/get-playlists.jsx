import React, { useState, useEffect } from "react"
import axios from "axios"

export default function GetPlaylists({ accessToken }) {
    const [image, setImage] = useState([])
    const [name, setName] = useState([])
    const [artist, setArtist] = useState([])
    const [album, setAlbum] = useState([])


    useEffect(() => {
        if (!accessToken) return
        axios
            .get("https://api.spotify.com/v1/playlists/2bLF11IvHran8chE9qMPDh", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setImage(res.data.tracks.items[0].track.album.images[0].url)
                setName(res.data.tracks.items[0].track.name)
                setArtist(res.data.tracks.items[0].track.artists[0].name)
                setAlbum(res.data.tracks.items[0].track.album.name)
                console.log(res)
            })
            .catch((err) => {
                window.location = "/"
                console.log(err)
            })
    }, [accessToken, image])

    return (
        <>
            <Image image={image} />
            <Name name={name} />
            <Artist artist={artist} />
            <Album album={album} />
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

function Album({ album }) {
    return <h3>{album}</h3>
}