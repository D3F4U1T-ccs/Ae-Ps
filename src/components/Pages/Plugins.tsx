import Links from './Links'
const plugins = [
  {
    name: "Deep Glow",
    description: [
      "Adds smooth, realistic glow to any layer with minimal effort.",
      "Ideal for stylized lighting, neon effects, and visual emphasis."
    ],
    img: "https://riztagar.com/wp-content/uploads/2024/02/Deep-glow.webp",
    href: Links["Deep Glow"]
  },
  {
    name: "FX Console",
    description: [
      "Quickly find and apply effects.",
      "Speeds up your editing workflow and organizes presets easily."
    ],
    img: "https://www.videocopilot.net/assets/public/images/vc_cool/tutorialpics/large/162.jpg",
    href: Links["FX Console"]
  },
  {
    name: "Saber",
    description: [
      "Plugin for creating light effects: lasers, neon, flashes",
      "Often used in AMV, sci-fi styles, when working with text and masks."
    ],
    img: "https://i.ytimg.com/vi/os-qqVrMc-Q/maxresdefault.jpg",
    href: Links["Saber"]
  },
  {
    name: "twitch",
    description: [
      "Adds rapid glitch, shake, and time-based effects.",
      "Adds rapid glitch, shake, and time-based effects."
    ],
    img: "https://i.ytimg.com/vi/-4icg0BOJCg/maxresdefault.jpg",
    href: Links["Twitch"]
  },

  {
    name: "Saphire",
    description: [
      "Industry-standard VFX plugin pack with 270+ effects.",
      "Includes premium glows, transitions, and distortions."
    ],
    img: "https://uploads.toolfarm.com/app/uploads/2022/05/27081423/sapphire-2022.5-feat.png",
    href: Links["Sapphire"]
  },
  {
    name: "Twixtor",
    description: [
      "Creates smooth slow-motion by intelligently interpolating frames.",
      "Known for accuracy even with complex motion."
    ],
    img: "https://riztagar.com/wp-content/uploads/2025/03/RevisionFX-Twixtor-Pro_67e5b96527485.webp",
    href: Links["Twixtor"]
  },
  {
    name: "BCC",
    description: [
      "Used in TV, film, and post-production for professional results.",
      "Includes stylized looks, keying tools, and motion tracking."
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfYehXbCnisX4IOiroYOYzOGE0TIaTPwqXA&s",
    href: Links["BCC"]
  },
  {
    name: "Voukoder",
    description: [
      "Adds modern export formats like H.264 and ProRes.",
      "Great for faster and high-quality renders from AE."
    ],
    img: "https://freevideoeffect.com/wp-content/uploads/2021/11/ad550e00-9375-11e9-9770-75dec6c956e1-min.jpg",
    href: Links["Voukoder"]
  },
  {
    name: "Vibrance",
    description: [
      "Enhances colors without oversaturation.",
      "Perfect for subtle color correction and vivid tones."
    ],
    img: "https://i.ytimg.com/vi/BgTNtuCiHhA/maxresdefault.jpg",
    href: Links["Vibrance"]
  },
  {
    name: "Shadow Studio 3",
    description: [
      "Easily adds realistic drop shadows to layers.",
      "Great for UI, titles, and motion graphics depth."
    ],
    img: "https://i.ytimg.com/vi/GodvJPcsodM/maxresdefault.jpg",
    href: Links["Shadow Studio 3"]
  },
  {
    name: "Scale up",
    description: [
      "Upscales footage using AI-based detail enhancement.",
      "Useful for improving low-res clips in edits."
    ],
    img: "https://aescripts.com/media/catalog/product/cache/1/aes_image_social/9df78eab33525d08d6e5fb8d27136e95/s/c/scaleup_fg_1080.png",
    href: Links["Scale Up"]
  },
  {
    name: "optical Flares",
    description: [
      "Upscales footage using AI-based detail enhancement.",
      "Useful for improving low-res clips in edits."
    ],
    img: "https://community.adobe.com/t5/image/serverpage/image-id/575590i3A57B2928FAD5169?v=v2",
    href: Links["Optical Flares"]
  },
  {
    name: "Magic bullet looks",
    description: [
      "Professional color grading with cinematic presets.",
      "Provides professional film looks, contrast, and skin tone correction."
    ],
    img: "https://m.media-amazon.com/images/I/41PUricEcLL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
    href: Links["Magic Bullet Looks"]
  },
  {
    name: "Element 3d",
    description: [
      "Real-time 3D rendering engine inside After Effects",
      "Used for intros, logo reveals, and 3D typography."
    ],
    img: "https://aescripts.com/media/catalog/product/cache/1/aes_image_social/9df78eab33525d08d6e5fb8d27136e95/e/3/e3d-hd.jpg",
    href: Links["Element 3D"]
  },
  {
    name: "Good Bye Green Screen",
    description: [
      "One-click chroma keying tool for green screen removal.",
      "Saves time and avoids complicated settings."
    ],
    img: "https://www.downloadpirate.com/wp-content/uploads/2021/02/maxresdefault-1-1024x576.jpg",
    href: Links["Good Bye Green Screen"]
  },
  {
    name: "Nebulosity",
    description: [
      "Generates procedural space clouds, fog, and particles.",
      "Ideal for dreamy or cosmic scenes and AMV edits."
    ],
    img: "https://s3.amazonaws.com/east.toolfarm.com/featured_image/nebulosity_featured.jpg",
    href: Links["FX Console"]
  },
  {
    name: "Flow 1.5.0",
    description: [
      "Motion graph editor with custom easing presets.",
      "Newer version with extra features and improved UI."
    ],
    img: "https://aescripts.com/media/catalog/product/cache/1/aes_image_social/9df78eab33525d08d6e5fb8d27136e95/f/l/flow_hd.jpg",
    href: Links["Flow 1.5.0"]
  },
  {
    name: "Flow 1.4.2",
    description: [
      "Previous stable release of Flow plugin.",
      "Good for older AE versions or lighter setups."
    ],
    img: "https://i.ytimg.com/vi/j71FjLwKRt4/mqdefault.jpg",
    href: Links["Flow 1.4.2"]
  },
  {
    name: "Rsmb",
    description: [
      "Adds realistic motion blur using optical flow.",
      "Perfect for smooth, professional-looking animations."
    ],
    img: "https://i.ytimg.com/vi/WmAkl5RIBwE/maxresdefault.jpg",
    href: Links["RSMB"]
  },
  {
    name: "Create Motion Vectors",
    description: [
      "Generates motion vector passes for plugins like RSMB.",
      "Simple setup to enhance post-production blur."
    ],
    img: "https://i.ytimg.com/vi/yLb7SSygBsU/maxresdefault.jpg",
    href: Links["Create Motion Vectors"]
  },
  {
    name: "Bread It",
    description: [
      "Plugin for adding squash & stretch bounce effects.",
      "Commonly used in character animation and titles."
    ],
    img: "https://aescripts.com/media/catalog/product/cache/1/aes_image_social/9df78eab33525d08d6e5fb8d27136e95/t/u/tumbnail_for_promo_video-1920-1080.png",
    href: Links["Bread It"]
  },
  {
    name: "Image Paster",
    description: [
      "Lets you quickly insert images into AE from clipboard.",
      "Useful for pasting references, screenshots, or assets."
    ],
    img: "https://studioplugins.net/images/hero-ae-mob.png",
    href: Links["Image Paster"]
  },
];


function Plugins() {
  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Available Plugins</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">

        <div className=" order-1 md:order-2 md:w-1/4 p-4 bg-slate-800 rounded-lg text-white shadow-md self-start">
          <h2 className="text-xl font-bold mb-4 underline underline-offset-4">Plugins List</h2>
          <ul className="space-y-2 text-sm">
            <li>1. Deep Glow</li>
            <li>2. FX Console</li>
            <li>3. Saber</li>
            <li>4. Twitch</li>
            <li>5. Sapphire</li>
            <li>6. Twixtor</li>
            <li>7. BCC</li>
            <li>8. Voukoder</li>
            <li>9. Vibrance</li>
            <li>10. Shadow Studio 3</li>
            <li>11. Scale Up</li>
            <li>12. Optical Flares</li>
            <li>13. Magic Bullet Looks</li>
            <li>14. Element 3D</li>
            <li>15. Good Bye Green Screen</li>
            <li>16. Nebulosity</li>
            <li>17. Flow 1.5.0</li>
            <li>18. Flow 1.4.2</li>
            <li>19. RSMB</li>
            <li>20. Create Motion Vectors</li>
            <li>21. Bread It</li>
            <li>22. Image Paster</li>
          </ul>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Extra Content:</h3>
            <ul className="text-sm space-y-1">
              <li>• Pro Shader 1/2 for Element 3D</li>
              <li>• Scripts: True Comp Duplicator, AepHairRig, Textflex</li>
            </ul>
          </div>
        </div>

        <div className=" order-2 md:order-1 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plugins.map((plugin) => (
            <div
              key={plugin.name}
              className="bg-slate-800 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
            >
              <img
                src={plugin.img}
                alt={plugin.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plugin.name}
                </h3>
                <ul className="text-slate-300 text-sm list-disc list-inside mb-4">
                  {plugin.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={plugin.href}
                  target="_blank"
                  className="block text-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-md transition"
                >
                  Download →
                </a>
              </div>
            </div>
          ))}
        </div>



        {/* Навигация  */}

      </div>
    </div>
  );
}

export default Plugins;
