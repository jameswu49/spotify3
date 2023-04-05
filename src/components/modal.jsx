export default function Modal({ text }) {
    return (
        <div className="bg-black bg-opacity-40 h-full w-full fixed hidden modal top-0 2xl:text-2xl">
            <About />
            <Directions />
            <FollowPlaylist />
        </div>
    )
}

function About() {
    return (
        <h1 className="h-3/6 flex items-end mt-5 md:mx-20 lg:mx-40 2xl:mx-64">{urlParam()}</h1>
    )
}

function Directions() {
    return (
        <p className="text-white mx-10 w-fit mt-10 md:mx-28 lg:mx-48 2xl:mx-72">Press <span className="text-red-500">g</span> to change background</p>
    )
}

function FollowPlaylist() {
    return (
        <p className="h-20 flex items-end">
            <a className="text-white mx-10 w-fit underline md:mx-28 lg:mx-48 2xl:mx-72" target="_blank" rel="noopener noreferrer" href={playlist()}>Follow My Playlist</a>
        </p>
    )
}

const urlParam = () => {
    const url = window.location.pathname
    if (url === "/favorite-lofi") {
        return (
            <div>
                <p className="text-white flex justify-center underline text-lg mb-3 2xl:text-4xl" >Description</p>
                <h1 className="text-white flex justify-center items-end h-3/6 mx-10">"My favorite lofi playlist is a collection of all my favorite lofi songs that I have discovered over the years, curated into a single playlist. With its mellow and relaxing beats, it's the perfect soundtrack for unwinding after a long day or for creating a calming atmosphere while studying or working. The playlist features a diverse selection of tracks from various artists, each with their own unique style, that come together to create a cohesive and enjoyable listening experience."</h1>
            </div>
        )
    } else {
        return (
            <div>
                <p className="text-white flex justify-center underline text-lg mb-3 2xl:text-4xl">Description</p>
                <h1 className="text-white flex justify-center items-end h-3/6 mx-10">"Escape to a world of chill and ambient sounds with the 'lofi-mood' playlist. Perfect for late-night sessions, this collection of carefully curated tracks will transport you to a state of calm and relaxation. Let the mellow beats and soothing melodies guide you through those long hours of work or study."</h1>
            </div>
        )
    }
}

const playlist = () => {
    const url = window.location.pathname
    if (url === "/favorite-lofi") {
        return "https://open.spotify.com/playlist/2bLF11IvHran8chE9qMPDh"
    } else {
        return "https://open.spotify.com/playlist/3SHjoboV9TGNANyWkYX3Lc?si=f632d6ceb8554273&nd=1"
    }
}