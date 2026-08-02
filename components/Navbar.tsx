"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#06142f]/90 backdrop-blur-lg border-b border-white/10">

            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                <a
                    href="#"
                    className="text-2xl font-bold text-white"
                >
                    Junaid<span className="text-blue-400">.</span>
                </a>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">

                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-blue-400 transition font-medium"
                        >
                            {link.name}
                        </a>
                    ))}


                    <a
                        href="/Junaid-Banaras-Resume.pdf"
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
                    >
                        Resume
                    </a>

                </div>


                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-3xl"
                >
                    ☰
                </button>


            </div>


            {/* Mobile Menu */}
            {open && (

                <div className="md:hidden bg-[#06142f] px-6 pb-6">

                    {links.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-gray-300 hover:text-blue-400"
                        >
                            {link.name}
                        </a>

                    ))}


                    <a
                        href="/Junaid-Banaras-Resume.pdf"
                        target="_blank"
                        className="inline-block mt-3 px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold"
                    >
                        Resume
                    </a>

                </div>

            )}

        </nav>
    );
}