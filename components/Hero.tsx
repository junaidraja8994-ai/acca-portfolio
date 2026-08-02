export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06142f] text-white">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>

                        <p className="text-blue-400 font-semibold tracking-widest uppercase mb-5">
                            Finance Professional | ACCA Finalist
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Building Financial Excellence Through
                            <span className="text-blue-400">
                                {" "}Accuracy, Strategy & Technology
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                            Assistant Manager Finance with hands-on experience managing
                            large-scale payroll operations, financial reporting,
                            compliance, payroll strategy, and business intelligence.
                            Passionate about delivering accurate financial solutions
                            through technology and process improvement.
                        </p>

                        <div className="flex flex-wrap gap-4">

                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold shadow-lg shadow-blue-500/30"
                            >
                                Contact Me
                            </a>

                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-lg border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition font-semibold"
                            >
                                View My Work
                            </a>

                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">

                            <div>
                                <h3 className="text-3xl font-bold text-blue-400">
                                    3000+
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Employees Payroll
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-400">
                                    5+
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-400">
                                    ACCA
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Finalist
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Profile Card */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="relative">

                            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />

                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-[320px] md:w-[380px] shadow-2xl">

                                {/* Profile Image */}
                                <div className="relative h-72 rounded-2xl overflow-hidden mb-6 border-2 border-white/10">

                                    <img
                                        src="/junaid-profile.jpg"
                                        alt="Junaid Banaras"
                                        className="w-full h-full object-cover object-top"
                                    />

                                </div>

                                <h2 className="text-2xl font-bold">
                                    Junaid Banaras
                                </h2>

                                <p className="text-blue-300 mt-2">
                                    Assistant Manager Finance
                                </p>

                                <div className="mt-6 space-y-3 text-sm text-gray-300">

                                    <p>✓ Payroll Management</p>
                                    <p>✓ Financial Reporting</p>
                                    <p>✓ Tax & Compliance</p>
                                    <p>✓ Power BI & Finance Analytics</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}