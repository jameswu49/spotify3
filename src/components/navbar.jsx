import { Link } from "react-router-dom"
import Modal from "./modal"
import { useState } from "react";

export default function NavBar({ title }) {
    const [modal, setModal] = useState(false);

    function openModal() {
        const openModal = document.querySelector(".modal");
        setModal(!modal);
        openModal.style.display = "block";
    }

    function closeModal() {
        const closeModal = document.querySelector(".modal");
        setModal(!modal);
        closeModal.style.display = "none";
    }

    return (
        <>
            <nav className="flex justify-between relative z-10">
                <Link to={"/callback"}>
                    <h1 className='text-white mt-4 ml-4 cursor-pointer md:text-base lg:text-lg 2xl:text-2xl'>&lt; Back</h1>
                </Link>
                <h1 className='text-white mt-4 underline md:text-base lg:text-lg 2xl:text-2xl'>
                    {title}
                </h1>
                <p className="text-white mt-4 ml-4 cursor-pointer mr-4 md:text-base lg:text-lg 2xl:text-2xl" onClick={modal ? closeModal : openModal}>
                    About
                </p>
            </nav>
            <Modal />
        </>
    )
}
