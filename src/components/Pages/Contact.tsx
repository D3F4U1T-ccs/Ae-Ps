import Ava from '../VideoImage/D3F4U1T TEXT.jpg'
import Tg from '../VideoImage/Telegram.png'
import Ds from '../VideoImage/discord.png'
import Yt from '../VideoImage/Youtube.png'
import Gh from '../VideoImage/Github.png'
import Ins from '../VideoImage/Instagram.png'
import Kw from '../VideoImage/kwork.png'

function Contact() {
  return (
    <div className="bg-slate-500 px-10 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Аватар + текст */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={Ava}
            alt="AVA"
            className="w-[250px] md:w-[350px] rounded-full shadow-2xl shadow-black"
          />
          <div className="text-white max-w-xl">
            <h1 className="text-3xl font-bold mb-4">
              Hi, I'm the guy who loves to do something better
            </h1>
            <p className="text-lg text-slate-200">
              I enjoy designing, editing, coding and building cool stuff. <br />
              Contact me through socials or scroll through my works!
            </p>
          </div>
        </div>

        {/* Соцсети */}
        <div className="text-white pr-32 ">
          <h2 className="text-xl items-center justify-center flex font-semibold mb-4 underline underline-offset-4">
            My Socials
          </h2>
          <div className="flex gap-20">
            <div>
              <a href="https://www.youtube.com/@Default.mp4" target="_blank" rel="noreferrer">
                <img src={Yt} className="w-[60px] animate-bounce" alt="YouTube" />
              </a>
              <a href="https://t.me/Defaults_Tgs" target="_blank" rel="noreferrer">
                <img src={Tg} className="w-[60px] animate-bounce mt-5" alt="Telegram" />
              </a>
              <a href="https://discord.com/users/1347396836712910969" target="_blank" rel="noreferrer">
                <img src={Ds} className="w-[60px] animate-bounce mt-5" alt="Discord" />
              </a>
           
            </div>
            <div>
              <a href="https://www.instagram.com/d3f4u1t.mp4/" target="_blank" rel="noreferrer">
                <img src={Ins} className="w-[60px] animate-bounce" alt="Instagram" />
              </a>
              <a href="https://github.com/D3F4U1T-ccs" target="_blank" rel="noreferrer">
                <img src={Gh} className="w-[60px] animate-bounce mt-5" alt="GitHub" />
              </a>
              <a href="https://kwork.ru/user/default__" target="_blank" rel="noreferrer">
                <img src={Kw} className="w-[60px] animate-bounce mt-5 rounded-full" alt="Kwork" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
