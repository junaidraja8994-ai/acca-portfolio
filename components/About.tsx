export default function About() {
    return (
        <section id="about" className="bg-white py-20 text-slate-900">

            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">


                    {/* Left Content */}
                    <div>

                        <p className="text-blue-600 font-semibold uppercase tracking-widest mb-4">
                            About Me
                        </p>


                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            Finance Professional Focused on
                            <span className="text-blue-600">
                                {" "}Accuracy, Efficiency & Growth
                            </span>
                        </h2>


                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            I am an ACCA Finalist and Finance Professional with practical
                            experience in financial operations, payroll management,
                            reporting, compliance, taxation, and process improvement.
                        </p>


                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Currently working as Assistant Manager Finance, I manage
                            large-scale payroll operations for 3,000+ employees, ensuring
                            accurate salary processing, overtime calculations, employee
                            compensation management, and timely financial execution.
                        </p>


                        <p className="text-slate-600 text-lg leading-relaxed">
                            I combine accounting expertise with technology tools like
                            Microsoft Excel and Power BI to improve reporting efficiency,
                            automate processes, and support better business decisions.
                        </p>

                    </div>



                    {/* Right Side Card */}
                    <div className="grid gap-6">


                        <div className="bg-[#06142f] rounded-2xl p-8 text-white shadow-xl">

                            <h3 className="text-2xl font-bold mb-6">
                                Professional Profile
                            </h3>


                            <div className="space-y-5">

                                <div>
                                    <p className="text-blue-400 font-semibold">
                                        Qualification
                                    </p>
                                    <p className="text-gray-300">
                                        ACCA Finalist (10/13 Papers Completed)
                                    </p>
                                </div>


                                <div>
                                    <p className="text-blue-400 font-semibold">
                                        Current Role
                                    </p>
                                    <p className="text-gray-300">
                                        Assistant Manager Finance
                                    </p>
                                </div>


                                <div>
                                    <p className="text-blue-400 font-semibold">
                                        Core Expertise
                                    </p>
                                    <p className="text-gray-300">
                                        Payroll, Reporting, Compliance & Finance Operations
                                    </p>
                                </div>


                                <div>
                                    <p className="text-blue-400 font-semibold">
                                        Technology Skills
                                    </p>
                                    <p className="text-gray-300">
                                        Excel, Power BI, ERP Systems & Data Analysis
                                    </p>
                                </div>

                            </div>

                        </div>



                        <div className="grid grid-cols-2 gap-5">

                            <div className="border rounded-xl p-5 text-center">
                                <h4 className="text-3xl font-bold text-blue-600">
                                    3000+
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Payroll Managed
                                </p>
                            </div>


                            <div className="border rounded-xl p-5 text-center">
                                <h4 className="text-3xl font-bold text-blue-600">
                                    5+
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Years Experience
                                </p>
                            </div>

                        </div>


                    </div>


                </div>

            </div>

        </section>
    );
}