import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 w-full bg-slate-900 border-b-2 border-slate-700 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-white font-bold text-2xl hover:text-slate-300 duration-300">
                    Settings As D3F4U1T
                </h1>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-5">
                    <Link className="text-white hover:underline hover:text-slate-300 duration-300" to={"/"}>Home</Link>
                    <Link className="text-white hover:underline hover:text-slate-300 duration-300" to={"Apps"}>Apps</Link>
                    <Link className="text-white hover:underline hover:text-slate-300 duration-300" to={"Plugins"}>Plugins</Link>
                    <Link className="text-white hover:underline hover:text-slate-300 duration-300" to={"Packs"}>Packs</Link>
                    <Link className="text-white hover:underline hover:text-slate-300 duration-300" to={"Contact"}>Contact</Link>
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-slate-800 px-6 py-3 space-y-2">
                    <Link className="text-white hover:text-slate-300 duration-300" to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link className="text-white hover:text-slate-300 duration-300" to={"Apps"} onClick={() => setIsOpen(false)}>Apps</Link>
                    <Link className="text-white hover:text-slate-300 duration-300" to={"Plugins"} onClick={() => setIsOpen(false)}>Plugins</Link>
                    <Link className="text-white hover:text-slate-300 duration-300" to={"Packs"} onClick={() => setIsOpen(false)}>Packs</Link>
                    <Link className="text-white hover:text-slate-300 duration-300" to={"Contact"} onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
