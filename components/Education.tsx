export default function Education() {
    return (
        <section
            id="education"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Education & Certifications
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Professional Qualification Journey
                    </h2>

                </div>


                <div className="grid gap-8 lg:grid-cols-2">


                    {/* ACCA */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h3 className="text-2xl font-bold text-slate-900">
                            ACCA (Association of Chartered Certified Accountants)
                        </h3>


                        <p className="mt-2 font-medium text-blue-700">
                            ACCA Finalist
                        </p>


                        <p className="mt-5 leading-8 text-slate-600">
                            Currently progressing towards ACCA qualification with
                            strong focus on financial reporting, strategic finance,
                            audit, taxation, and professional accounting practices.
                        </p>


                        <div className="mt-6 rounded-lg bg-slate-50 p-4">

                            <p className="font-semibold text-slate-900">
                                Progress
                            </p>

                            <p className="mt-2 text-slate-600">
                                10 out of 13 professional examinations completed
                            </p>

                        </div>

                    </div>



                    {/* Degree */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h3 className="text-2xl font-bold text-slate-900">
                            Bachelor of Commerce (B.Com)
                        </h3>


                        <p className="mt-2 font-medium text-blue-700">
                            Commerce & Business Studies
                        </p>


                        <p className="mt-5 leading-8 text-slate-600">
                            Academic foundation in accounting, finance, business
                            principles, and commercial operations supporting my
                            professional finance career.
                        </p>


                        <div className="mt-6 rounded-lg bg-slate-50 p-4">

                            <p className="font-semibold text-slate-900">
                                Continuous Learning
                            </p>

                            <p className="mt-2 text-slate-600">
                                Developing expertise in financial technology,
                                analytics, and modern finance practices.
                            </p>

                        </div>

                    </div>


                </div>

            </div>
        </section>
    );
}