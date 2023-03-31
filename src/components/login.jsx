const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=641ca7a434204e509b4c51ac6b20bd7b&response_type=code&redirect_uri=https://lofi-player.herokuapp.com/callback&scope=streaming%20user-read-private%20user-read-playback-state%20user-read-email%20user-modify-playback-state"

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                <a href={AUTH_URL}>Log in to Spotify</a>
            </button>
        </div >
    )
}