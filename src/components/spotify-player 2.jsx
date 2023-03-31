import SpotifyPlayer from 'react-spotify-web-playback';
import { useContext } from "react"
import AccessContext from '../components/access-token'
import WebPlayback from './webplayback';
import GetPlaylists from './favorite-lofi-playlists';

export default function Player() {
    const { accessToken } = useContext(AccessContext)


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {/* <GetPlaylists accessToken={accessToken} /> */}
            <SpotifyPlayer
                token={accessToken}
                uris={['spotify:playlist:2bLF11IvHran8chE9qMPDh']}
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