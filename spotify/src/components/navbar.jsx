import { Link } from "react-router-dom"

export default function NavBar({ title }) {
    return (
        <nav className="flex justify-between">
            <Link to={"/"}>
                <h1 className='text-white mt-4 ml-4 cursor-pointer'>&lt; Back</h1>
            </Link>
            <h1 className='text-white mt-4'>
                {title}
            </h1>
            <p className="text-white mt-4 ml-4 cursor-pointer mr-4">
                About
            </p>
        </nav>
    )
}
