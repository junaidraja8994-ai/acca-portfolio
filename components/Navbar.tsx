export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* Logo */}
                <div>
                    <h1 className="text-xl font-bold text-slate-900">
                        Junaid Banaras
                    </h1>
                    <p className="text-xs text-slate-500">
                        ACCA Finalist | Finance Professional
                    </p>
                </div>


                {/* Menu */}
                <div className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
                    <a href="#about" className="hover:text-blue-700">
                        About
                    </a>

                    <a href="#experience" className="hover:text-blue-700">
                        Experience
                    </a>

                    <a href="#skills" className="hover:text-blue-700">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-blue-700">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-blue-700">
                        Contact
                    </a>
                </div>


                {/* Button */}
                <button className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Resume
                </button>

            </div>
        </nav>
    );
}