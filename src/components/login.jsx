const LOGIN_URI =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3001/login'
        : 'https://lofi-player.herokuapp.com/login';

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                <a href={LOGIN_URI}>Log in to Spotify</a>
            </button>
        </div >
    )
}