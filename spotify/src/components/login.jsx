const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=641ca7a434204e509b4c51ac6b20bd7b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-currently-playing%20user-modify-playback-state%20user-read-email"

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                <a href={AUTH_URL}>Log in to Spotify</a>
            </button>
        </div >
    )
}