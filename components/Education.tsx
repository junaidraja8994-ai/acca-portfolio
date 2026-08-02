export default function Education() {
    return (
        <section className="bg-white py-20 text-slate-900">

            <div className="container mx-auto px-6">

                <div className="text-center mb-14">

                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        Education & Certifications
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Professional Qualification Journey
                    </h2>

                </div>


                <div className="max-w-5xl mx-auto space-y-8">


                    {/* ACCA */}
                    <div className="bg-[#06142f] rounded-2xl p-8 text-white shadow-xl">

                        <div className="flex flex-col md:flex-row md:justify-between gap-4">

                            <div>

                                <h3 className="text-2xl font-bold">
                                    ACCA (Association of Chartered Certified Accountants)
                                </h3>

                                <p className="text-blue-400 font-semibold mt-2">
                                    ACCA Finalist
                                </p>

                            </div>


                            <div className="text-gray-300 font-medium">
                                Professional Qualification
                            </div>

                        </div>


                        <p className="text-gray-300 leading-relaxed mt-6">

                            Currently progressing towards ACCA qualification with
                            strong focus on financial reporting, strategic finance,
                            audit, taxation, and professional accounting practices.

                        </p>


                        <div className="mt-6 bg-white/10 rounded-xl p-5">

                            <p className="text-blue-400 font-semibold">
                                Progress
                            </p>

                            <p className="text-white mt-2 text-lg">
                                10 out of 13 professional examinations completed
                            </p>

                        </div>

                    </div>



                    {/* B.Com */}
                    <div className="border rounded-2xl p-8 shadow-lg">

                        <div className="flex flex-col md:flex-row md:justify-between gap-4">

                            <div>

                                <h3 className="text-2xl font-bold">
                                    Bachelor of Commerce (B.Com)
                                </h3>

                                <p className="text-blue-600 font-semibold mt-2">
                                    Commerce & Business Studies
                                </p>

                            </div>


                            <div className="text-slate-500 font-medium">
                                Academic Foundation
                            </div>

                        </div>


                        <p className="text-slate-600 leading-relaxed mt-6">

                            Built a strong foundation in accounting, finance,
                            business principles, and commercial operations,
                            supporting my professional career in finance.

                        </p>

                    </div>



                    {/* Continuous Learning */}
                    <div className="bg-slate-50 rounded-2xl p-8 border">

                        <h3 className="text-2xl font-bold mb-4">
                            Continuous Learning
                        </h3>


                        <p className="text-slate-600 leading-relaxed">

                            Continuously developing expertise in financial
                            technology, analytics, reporting automation, and
                            modern finance practices to create better business impact.

                        </p>

                    </div>


                </div>

            </div>

        </section>
    );
}