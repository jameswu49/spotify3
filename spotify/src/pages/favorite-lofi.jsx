import useAuth from '../components/useAuth'
import GetPlaylists from '../components/get-playlists'

export default function FavoriteLofi({ code }) {
    console.log(code)
    const accessToken = useAuth(code)
    console.log("accessToken", accessToken)
    return (
        <>
            <GetPlaylists accessToken={accessToken} />
        </>
    )
}

