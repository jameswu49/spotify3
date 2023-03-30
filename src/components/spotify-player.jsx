import SpotifyPlayer from 'react-spotify-web-playback';
import { useContext } from "react"
import AccessContext from './access-token'
import NavBar from './navbar';
import { useEffect, useState } from 'react';

export default function Player({ playlistId, title }) {
    const { accessToken } = useContext(AccessContext)

    const [backgroundImage, setBackgroundImage] = useState('default.jpg');

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "g") {
                setBackgroundImage("images/starwars.gif");
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);



    return (
        <div className='bg-cover' style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh" }}>
            <NavBar title={title} />
            <div className='flex flex-col justify-end items-center h-screen'>
                <SpotifyPlayer
                    token={accessToken}
                    uris={[`spotify:playlist:${playlistId}`]}
                    play={false}
                    hideAttribution={true}
                    hideCoverArt={false}
                    styles={{
                        color: "white",
                        sliderColor: "green",
                        bgColor: "none",
                        trackArtistColor: "white",
                        trackNameColor: "white",
                    }}
                />;
            </div>
        </div>
    );
}
