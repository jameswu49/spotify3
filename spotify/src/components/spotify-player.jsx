import SpotifyPlayer from 'react-spotify-web-playback';
import { useContext } from "react"
import AccessContext from './access-token'

export default function Player({ playlistId }) {
    const { accessToken } = useContext(AccessContext)


    return (
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
    );
}