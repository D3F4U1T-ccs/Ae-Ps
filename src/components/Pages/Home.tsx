import Bg from '../VideoImage/max-kostin-first-hunt-1f-b.jpg'
import PApps from '../VideoImage/Fxoci15WcAAsHNy.png'
import '../../App.css'
import { Link } from 'react-router-dom'
function Home() {
    return (

        <div >
            {/* Bg */}
            <div className="absolute  z-[-1] ">
                <img src={Bg} className="  left-0 w-full h-full object-cover z-[-1]" alt="Bg" />

            </div>
            {/* Home Elements  */}
            <div className="flex justify-center items-center  ">
                <h1 className='mt-10 text-3xl  [text-shadow:1px_2px_2px_black] font-bold'     >Do Your Edits Like D3F4U1T</h1>


            </div>
            <div className="flex justify-around items-center pb-5 ">
                <div className="mt-10 w-[550px] h-[500px] bg-opacity-75 rounded-3xl border border-white p-4  bg-black ">
                    <h1 className='flex justify-center [text-shadow:1px_2px_2px_black] font-bold '>Wanna to learn how to do edits?</h1>
                    <h1 className=" [text-shadow:1px_2px_2px_black]' pl-12 pt-7 reasons">
                        I created this website because:<br /><br />
                        <span className="highlight">• I wanted one place</span> for all my AE tools<br />
                        <span className="highlight">• I was always losing my scripts</span>, now they’re safe<br />
                        <span className="highlight">• I want to help</span> other editors and designers<br />
                        <span className="highlight">• It's my first serious React project</span><br />
                        <span className="highlight">• I’m building my future</span> — step by step
                    </h1>
                    <h1 className='flex justify-center pt-7 pb-4 [text-shadow:1px_2px_2px_black]' >What is on the site?   </h1>


                    <div className="flex justify-center gap-20 ">
                        <h1 className='[text-shadow:1px_2px_2px_black]' >
                            Apps:
                            <br /> <br />
                            After Effects 21-25
                            <br />
                            Photoshop 21-25

                        </h1>
                        <h1 className='[text-shadow:1px_2px_2px_black]' >
                            Plugins:
                            <br />
                            <br />
                            Element 3d
                            <br />
                            Deep Glow
                            <br />
                            More Plugins
                        </h1>
                        <h1 className='[text-shadow:1px_2px_2px_black]' >
                            Packs:
                            <br />
                            <br />
                            Payynuz`s` Packs 
                            <br />
                            D3F4U1T`s Packs
                            <br />
                            CC Packs
                        </h1>
                    </div>
                    <br />
                    <div className="flex justify-center gap-40 ">
                        
                        <Link className="mr-5 text-white underline  hover:underline hover:text-slate-300 duration-300 " to={"Apps"} >Apps</Link>
                        <Link className="mr-5 text-white underline  hover:underline hover:text-slate-300 duration-300 " to={"Plugins"} >Plugins</Link>
                        <Link className="mr-5 text-white underline  hover:underline hover:text-slate-300 duration-300 " to={"Packs"} >Packs</Link>


                    </div>



                </div>
                <div className=""></div>
                <img src={PApps} className="flex  w-[500px] " alt="Bg" />

            </div>
        </div>

    )
}

export default Home