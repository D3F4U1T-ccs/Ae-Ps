import Bg from '../VideoImage/max-kostin-first-hunt-1f-b.jpg';
import PApps from '../VideoImage/Fxoci15WcAAsHNy.png';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="relative overflow-x-hidden">
            {/* Bg */}
            <div className="absolute z-[-1] w-full h-full">
                <img src={Bg} className="w-full h-full object-cover" alt="Bg" />
            </div>

            {/* Title */}
            <div className="flex justify-center items-center text-center px-4">
                <h1 className="mt-10 text-3xl md:text-4xl font-bold text-white [text-shadow:1px_2px_2px_black]">
                    Do Your Edits Like D3F4U1T
                </h1>
            </div>

            {/* Main content */}
            <div className="flex flex-col-reverse md:flex-row justify-around items-center px-4 pb-10 pt-6 gap-6">

                {/* Left card */}
                <div className="mt-6 md:mt-10 max-w-[550px] w-full bg-opacity-75 bg-black rounded-3xl border border-white p-6 text-white">
                    <h1 className="text-center font-bold text-lg [text-shadow:1px_2px_2px_black]">
                        Wanna learn how to do edits?
                    </h1>

                    <div className="pt-6 text-base [text-shadow:1px_2px_2px_black] reasons">
                        I created this website because:<br /><br />
                        <span className="highlight">• I wanted one place</span> for all my AE tools<br />
                        <span className="highlight">• I was always losing my scripts</span>, now they’re safe<br />
                        <span className="highlight">• I want to help</span> other editors and designers<br />
                        <span className="highlight">• It's my first serious React project</span><br />
                        <span className="highlight">• I’m building my future</span> — step by step
                    </div>

                    <h1 className="text-center pt-7 pb-4 [text-shadow:1px_2px_2px_black]">
                        What is on the site?
                    </h1>

                    {/* Info blocks */}
                    <div className="flex flex-col md:flex-row justify-center md:gap-12 gap-4 text-sm text-white">
                        <div>
                            <h1 className="[text-shadow:1px_2px_2px_black] font-semibold">Apps:</h1>
                            <p>After Effects 21-25</p>
                            <p>Photoshop 21-25</p>
                        </div>
                        <div>
                            <h1 className="[text-shadow:1px_2px_2px_black] font-semibold">Plugins:</h1>
                            <p>Element 3D</p>
                            <p>Deep Glow</p>
                            <p>More Plugins</p>
                        </div>
                        <div>
                            <h1 className="[text-shadow:1px_2px_2px_black] font-semibold">Packs:</h1>
                            <p>Payynuz's Packs</p>
                            <p>D3F4U1T's Packs</p>
                            <p>CC Packs</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 mt-6">
                        <Link className="text-white underline hover:text-slate-300 duration-300" to={"Apps"}>Apps</Link>
                        <Link className="text-white underline hover:text-slate-300 duration-300" to={"Plugins"}>Plugins</Link>
                        <Link className="text-white underline hover:text-slate-300 duration-300" to={"Packs"}>Packs</Link>
                    </div>
                </div>

                {/* Right image */}
                <div className="w-full max-w-[500px] px-4 md:px-0">
                    <img src={PApps} className="w-full object-contain" alt="PApps" />
                </div>
            </div>
        </div>
    );
}

export default Home;
