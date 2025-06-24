import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className=" sticky top w-[100%] opacity-100  bg-slate-900 border-slate-700 border-2" >
            <div className="  pl-10 pt-3 pr-10 pb-3  justify-between flex ">
                <div className="">
                    <h1 className="hover:text-slate-300 duration-300 font-bold text-[30px]" >Settings As D3F4U1T</h1>
                </div>
                <div className="items-center flex">
                    <Link className="mr-5 text-white  hover:underline hover:text-slate-300 duration-300 " to={"/"} >Home</Link>
                    <Link className="mr-5 text-white  hover:underline hover:text-slate-300 duration-300 " to={"Apps"} >Apps</Link>
                    <Link className="mr-5 text-white  hover:underline hover:text-slate-300 duration-300 " to={"Plugins"} >Plugins</Link>
                    <Link className="mr-5 text-white  hover:underline hover:text-slate-300 duration-300 " to={"Packs"} >Packs</Link>
                    <Link className="mr-5 text-white  hover:underline hover:text-slate-300 duration-300 " to={"Contact"} >Contact</Link>

                </div>

            </div>

        </div>
    )
}

export default Navbar