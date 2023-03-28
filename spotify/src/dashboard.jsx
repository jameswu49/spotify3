import { Link } from "react-router-dom"
import { useContext } from "react"
import AccessContext from "./components/access-token"

export default function Dashboard({ code }) {
    const { accessToken } = useContext(AccessContext)
    return (
        <>
            <Header />
            <Images />
        </>
    )
}

function Header() {
    return (
        <>
            <h1 className="flex justify-center text-white mt-2">What Mood Are You In Today?</h1>
        </>
    )
}

function Images({ hover }) {
    return (
        <>
            <div className="flex flex-col justify-center mt-4">

                {/* Favorite Lofi Card */}
                <div className="py-4 mx-2 border border-white rounded-md bg-black">
                    <Link to={"/favorite-lofi"}>
                        <img className="px-2 rounded-[2rem] img" src="images/favorite-lofi.png"
                            onMouseOver={e => (e.currentTarget.src = "images/favorite-lofi.gif")}
                            onMouseLeave={e => (e.currentTarget.src = "images/favorite-lofi.png")}
                            alt="" />
                        <p className="text-center pt-3 text-white">Favorite Lofi</p>
                    </Link>
                </div>

                {/* Lofi Mood Card */}
                <div className="py-4 mx-2 mt-4 border border-white rounded-md bg-black">
                    <img className="px-2 rounded-[2rem] img" src="images/mood.png"
                        onMouseOver={e => (e.currentTarget.src = "images/mood.gif")}
                        onMouseLeave={e => (e.currentTarget.src = "images/mood.png")}
                        alt="" />
                    <p className="text-center pt-3 text-white">Lofi Mood</p>
                </div>

            </div>
        </>
    )
}
