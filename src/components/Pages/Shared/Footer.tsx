import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14  border-t border-slate-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-slate-300">D3F4U1T</h2>
          <p className="text-sm text-slate-400">© 2025 D3F4U1T. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="hover:text-cyan-400 hover:underline duration-200 text-sm">Home</Link>
          <Link to="/Apps" className="hover:text-cyan-400 hover:underline duration-200 text-sm">Apps</Link>
          <Link to="/Plugins" className="hover:text-cyan-400 hover:underline duration-200 text-sm">Plugins</Link>
          <Link to="/Packs" className="hover:text-cyan-400 hover:underline duration-200 text-sm">Packs</Link>
          <Link to="/Contact" className="hover:text-cyan-400 hover:underline duration-200 text-sm">Contact</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
