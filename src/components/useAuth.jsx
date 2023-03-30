import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        if (!code) return
        axios
            .post('login', {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            .catch((err) => {
                // window.location = "/"
                console.log(err.response)
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post('refresh', {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                    window.history.pushState({}, null, "/")
                })
                .catch((err) => {
                    // window.location = "/"
                    console.log(err.response)
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken
}
