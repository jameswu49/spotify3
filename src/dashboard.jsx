import { Link } from "react-router-dom"
import { useContext } from "react"
import AccessContext from "./components/access-token"

export default function Dashboard({ code }) {
    const { accessToken } = useContext(AccessContext)
    return (
        <section className="h-screen md:flex md:flex-col md:justify-center">
            <Header />
            <Images />
        </section>
    )
}

function Header() {
    return (
        <>
            <h1 className="flex justify-center text-white mt-4 text-xl md:text-3xl md:items-center md:mt-0 md:mb-8">What Mood Are You In Today?</h1>
        </>
    )
}

function Images({ hover }) {
    return (
        <>
            <div className="flex flex-col items-center md:flex-row mt-4 md:justify-evenly lg:justify-center">

                {/* Favorite Lofi Card */}
                <div className="py-4 mx-2 border border-white rounded-md bg-black flex justify-center w-64 h-80 lg:mr-10">
                    <Link to={"/favorite-lofi"}>
                        <img className="px-2 rounded-[2rem] h-60" src="images/favorite-lofi.png"
                            onMouseOver={e => (e.currentTarget.src = "images/favorite-lofi.gif")}
                            onMouseLeave={e => (e.currentTarget.src = "images/favorite-lofi.png")}
                            alt="" />
                        <p className="text-center pt-3 text-white">Favorite Lofi</p>
                    </Link>
                </div>

                {/* Lofi Mood Card */}
                <div className="py-4 mx-2 mt-4 border border-white rounded-md bg-black flex justify-center items-center w-64 h-80 md:mt-0 lg:ml-10">
                    <Link to={"/lofi-mood"}>
                        <img className="px-2 rounded-[2rem] h-60" src="images/mood.png"
                            onMouseOver={e => (e.currentTarget.src = "images/mood.gif")}
                            onMouseLeave={e => (e.currentTarget.src = "images/mood.png")}
                            alt="" />
                        <p className="text-center pt-3 text-white">Lofi Mood</p>
                    </Link>
                </div>

            </div>
        </>
    )
}
