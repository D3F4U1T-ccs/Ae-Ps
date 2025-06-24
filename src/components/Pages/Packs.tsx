
const packs = [
  {
    name: "TikTok CC Pack",
    author: "Payynuz",
    description: [
      "A vibrant TikTok-style color correction pack.",
      "Includes trendy presets ideal for fast-paced edits and short-form videos."
    ],
    img: "https://i.ytimg.com/vi/_uLt70Um2OE/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1mKRqvKrGTD6Ag5sJAKEy4QAR4ypmBB_N"
  },
  {
    name: "Main Pack",
    author: "Payynuz",
    description: [
      "A general-purpose editing pack with overlays, transitions, and CC.",
      "Perfect for AMVs, motion graphics, and stylish video edits.",
    ],
    img: "https://i.ytimg.com/vi/p9cLV2hdJ4g/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1JIBeEF5ptKqdcrsWXGTHQRiSyPDLBsRY"
  },
  {
    name: "200Gb+ Editor Pack",
    author: "imduong2k6",
    description: [
      "A general-purpose editing pack with overlays, transitions, and CC.",
      "Perfect for AMVs, motion graphics, and stylish video edits.",
    ],
    img: "https://i.ytimg.com/vi/zE_WwgYthfE/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1L7-gZR5FjQeyDO6vNcWHAZtCVESyO1Rq"
  },
  {
    name: "80Gb+ Editor Pack",
    author: "imduong2k6",
    description: [
      "Massive all-in-one pack with CCs, overlays, effects, and more.",
      "Ideal for editors looking for a complete resource collection.",
    ],
    img: "https://i.ytimg.com/vi/EmUdQiggQsg/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1h3zTzgDIo_WiydK9wBEgYy3Ioha2FlNN"
  },
  {
    name: "Suchie Pack",
    author: "Suchie",
    description: [
  "A generous editing pack by Suchie to celebrate reaching 5K subscribers.",
  "Features clean overlays, smooth transitions, subtle shakes, and vibrant color corrections."
],
    img: "https://i.ytimg.com/vi/wHGvz3UkTLw/maxresdefault.jpg",
    href: "https://drive.usercontent.google.com/download?id=1pbPEGHYmWYSX6P2U-mRX0UHSZsMO5Rvf&export=download"
  },
  {
    name: "SFX Pack",
    author: "Noddy Edition",
    description: [
      "Extensive collection of high-quality sound effects crafted for editors.",
      "Includes whooshes, bass hits, risers, and ambient SFX to enhance impact.",
    ],
    img: "https://i.ytimg.com/vi/WdZUPWTbr0o/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1sicMBT6lhTqWHPQP_pdv9WeOa1ZDSifV"
  },
  {
    name: "Bezel Pack",
    author: "Bezel",
    description: [
      "A powerful 15k special pack featuring premium overlays, effects, and transitions.",
      "Ideal for polished AMV edits, dynamic motion graphics, and clean compositions.",
    ],
    img: "https://i.ytimg.com/vi/kvlzvEWc5JA/maxresdefault.jpg",
    href: "https://mega.nz/folder/AQJjyRKK#-PB_lPpl-0ukEweYLH-6Dg"
  },
  {
    name: "Preset Pack",
    author: "Zeusefxx",
    description: [
      "Packed with stylish shake presets, cinematic color corrections, and transitions.",
      "Perfect for impactful AMVs and rhythmic motion-heavy edits.",
    ],
    img: "https://i.ytimg.com/vi/dTQ1HE6Z0lQ/maxresdefault.jpg",
    href: "https://drive.google.com/file/d/1ClOMiAk3Oq75P5kto7DbscohIvP-u-6o/view"
  },
  {
    name: "Overlay Pack",
    author: "Whyu.",
    description: [
      "A stylish overlay pack filled with particles, light leaks, and screen effects.",
      "Perfect for adding energy, mood, and texture to any type of edit.",
    ],
    img: "https://i.ytimg.com/vi/HC2q7qP1kC4/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1xA3Oi_TW7bSqoiQZ3RIiaLdV6259LCWi"
  },

  {
    name: "Overlay Pack2",
    author: "Whyu.",
    description: [
      "A second rich collection of high-quality overlays crafted for AMV and cinematic edits.",
      "Features particles, light leaks, flares, film textures, and smooth transitions."
    ],
    img: "https://i.ytimg.com/vi/HC2q7qP1kC4/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/197A2C469K_oqy-VYqo0Zm0IQtBK8oP8l"
  },
  {
    name: "My Pack 5Gb",
    author: "D3F4U1T",
    description: [
      "A 5GB essential pack with overlays, CC presets, shakes, and more.",
      "Ideal for editors seeking a balanced toolkit for AMVs or stylized clips."
    ],
    img: "https://i.ytimg.com/vi/QpqG6wHaoBE/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1w-nEUW2OcNWrxhVyHtDFI3VAv967uSDF?usp=sharing"
  },
  {
    name: "Main  Pack",
    author: "6im0 アイモ",
    description: [
      "A versatile all-in-one pack with shakes, CCs, transitions, and overlays.",
      "Perfect for building high-quality AMVs or dynamic motion edits."
    ],
    img: "https://i.ytimg.com/vi/1ki1SoTUn0E/maxresdefault.jpg",
    href: "https://drive.google.com/drive/folders/1QTauifEs4lEXetEJ8DT7aaMi4H7IT-8I"
  },
];

function Packs() {
  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Editor`s` Packs</h1>
      <h5 className=" font-bold text-zinc-400 mb-6">*I get all packs free on youtube*</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {packs.map((pack) => (
          <div
            key={pack.name}
            className="bg-slate-800 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
          >
            <img
              src={pack.img}
              alt={pack.author}
              className="w-ful h-52 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-white mb-1">{pack.name}</h3>
              <p className="text-slate-400 text-xs mb-2">By {pack.author}</p>

              <ul className="text-slate-300 text-xs list-disc list-inside mb-3">
                {pack.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <a
                href={pack.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-3 rounded-md transition text-sm"
              >
                Download →
              </a>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}

export default Packs;

