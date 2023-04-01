import GetPlaylists from '../components/favorite-lofi-playlists'
import { useContext } from "react"
import AccessContext from '../components/access-token'

export default function FavoriteLofi() {
    const { accessToken } = useContext(AccessContext)

    return (
        <>
            <GetPlaylists accessToken={accessToken} />
        </>
    )
}

