import Ae from '../VideoImage/Adobe After Effects .png';
import Ps from '../VideoImage/Adobe Photoshop .png';

function Apps() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 text-center sm:text-left">My Creative Apps</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* After Effects */}
        <div className="bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-cyan-500/30 transition duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-2">Adobe After Effects all versions Official</h2>
          <p className="text-slate-300 mb-4 text-sm sm:text-base">
            My main tool for motion design, AMV edits, and animation.
            I use AE daily with plugins and scripts that speed up my workflow.
          </p>
          <a
            href="https://www.adobe.com/products/aftereffects.html"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Official Page →
          </a>
        </div>

        {/* Photoshop */}
        <div className="bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-cyan-500/30 transition duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">Adobe Photoshop all versions Official</h2>
          <p className="text-slate-300 mb-4 text-sm sm:text-base">
            I use Photoshop for thumbnails, banners, and creative compositions.
            It's also helpful in preparing assets for AE edits.
          </p>
          <a
            href="https://www.adobe.com/products/photoshop.html"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Official Page →
          </a>
        </div>
      </div>

      {/* Repacked Versions with Icons */}
      <div className="grid md:grid-cols-2 mt-12 gap-6">
        {[ // Список приложений
          {
            title: 'Adobe After Effects 21 Repack by КРОJIИК',
            img: Ae,
            link: 'https://drive.google.com/uc?export=download&id=1GDX4X0qK5SICYslamuiQJFFav77O_DVz',
            color: 'text-purple-400',
          },
          {
            title: 'Adobe Photoshop 21 Repack by КРОJIИК',
            img: Ps,
            link: 'https://drive.google.com/uc?export=download&id=1Vq6jQiHB80YP4Ny-hBWj1RcazMXUJuF-',
            color: 'text-blue-400',
          },
          {
            title: 'Adobe After Effects 24 Repack by КРОJIИК',
            img: Ae,
            link: 'https://drive.google.com/uc?export=download&id=1sgmiADtrcVAaHWL4BRT668qeX31PI60n',
            color: 'text-purple-400',
          },
          {
            title: 'Adobe Photoshop 24',
            img: Ps,
            link: 'https://drive.google.com/drive/folders/1WED72LZpK8aklRbwwZyOrFbU8YG26rVX',
            color: 'text-blue-400',
            extra: 'Try Google Drive link →',
            note: '(might work, not 100% verified)',
            isAltColor: true
          },
          {
            title: 'Adobe After Effects 25 Repack by КРОJIИК',
            img: Ae,
            link: 'https://drive.google.com/uc?export=download&id=1JdYwGn-dfXZ9x7CZG93xDkypdBlkEYR5',
            color: 'text-purple-400',
          },
          {
            title: 'Adobe Photoshop 25 Repack by КРОJIИК',
            img: Ps,
            link: 'https://drive.google.com/uc?export=download&id=12q1w5wXqOcQGrDKWpXUS47uSnTxhVuyO',
            color: 'text-blue-400',
          },
        ].map((app, i) => (
          <div key={i} className="bg-slate-800 p-5 rounded-lg shadow-md flex flex-col sm:flex-row gap-5 hover:shadow-cyan-500/30 transition duration-300">
            <img src={app.img} className="w-[120px] sm:w-[150px] mx-auto sm:mx-0" alt="App" />
            <div>
              <h2 className={`text-xl sm:text-2xl font-semibold ${app.color} mb-2`}>{app.title}</h2>
              <p className="text-slate-300 mb-4 text-sm sm:text-base">
                I use {app.title.includes("Photoshop") ? "Photoshop" : "After Effects"} for thumbnails, edits, and animations.
              </p>
              <a
                href={app.link}
                target="_blank"
                rel="noreferrer"
                className={`${app.isAltColor ? 'text-yellow-400 hover:text-yellow-300' : 'text-cyan-400 hover:text-cyan-300'} underline`}
              >
                {app.extra || "Download →"}
              </a>
              {app.note && <p className="text-sm text-slate-400 mt-1">{app.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;
