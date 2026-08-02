export default function Contact() {
    return (
        <section className="bg-[#06142f] py-20 text-white">

            <div className="container mx-auto px-6">

                <div className="text-center mb-14">

                    <p className="text-blue-400 font-semibold uppercase tracking-widest">
                        Contact
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Let's Connect Professionally
                    </h2>

                    <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
                        Open to opportunities, collaborations, and professional
                        discussions in finance, accounting, and business analytics.
                    </p>

                </div>


                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">


                    <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                            Location
                        </h3>

                        <p className="text-gray-300">
                            Islamabad, Pakistan
                        </p>

                    </div>



                    <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                            LinkedIn
                        </h3>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="text-gray-300 hover:text-blue-400 transition"
                        >
                            View Professional Profile
                        </a>

                    </div>



                    <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                            Resume
                        </h3>

                        <a
                            href="/Junaid-Banaras-Resume.pdf"
                            target="_blank"
                            className="text-gray-300 hover:text-blue-400 transition"
                        >
                            Download Resume
                        </a>

                    </div>


                </div>


            </div>

        </section>
    );
}