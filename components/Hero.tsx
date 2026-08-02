export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Left Content */}
                <div>

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        ACCA Finalist • Finance Professional
                    </p>


                    <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                        Junaid Banaras
                    </h1>


                    <h2 className="mt-5 text-2xl font-semibold text-slate-700">
                        Assistant Manager Finance
                    </h2>


                    <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                        Finance professional specializing in payroll management,
                        financial reporting, compliance, taxation, process improvement,
                        and business intelligence.
                    </p>


                    {/* Professional Highlights */}
                    <div className="mt-6 flex flex-wrap gap-3">

                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            📍 Islamabad, Pakistan
                        </span>


                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            💼 Assistant Manager Finance
                        </span>


                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            📊 3,000+ Payroll Managed
                        </span>

                    </div>


                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">


                        <button className="rounded-lg bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700">
                            Download Resume
                        </button>


                        <a
                            href="https://www.linkedin.com/in/junaid-banaras-4221332a0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
                        >
                            View LinkedIn Profile
                        </a>


                    </div>


                </div>



                {/* Profile Image */}
                <div className="flex justify-center">

                    <div className="h-[500px] w-[380px] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">

                        <img
                            src="/profile.jpg"
                            alt="Junaid Banaras - ACCA Finance Professional"
                            className="h-full w-full object-contain"
                        />

                    </div>

                </div>


            </div>
        </section>
    );
}