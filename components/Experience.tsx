export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <div className="mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                    Professional Experience
                </p>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                    Finance Operations & Leadership Experience
                </h2>
            </div>


            <div className="border-l-2 border-slate-200 pl-8">

                <div className="relative">

                    {/* Timeline Dot */}
                    <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full bg-slate-900">
                    </div>


                    <h3 className="text-2xl font-bold text-slate-900">
                        Assistant Manager Finance
                    </h3>


                    <p className="mt-1 font-medium text-blue-700">
                        Skyrooms Pvt Ltd (SRL)
                    </p>


                    <p className="mt-1 text-sm text-slate-500">
                        2023 - Present
                    </p>


                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Managing financial operations with a focus on payroll
                        management, reporting accuracy, compliance, and process
                        improvement.
                    </p>


                    <ul className="mt-6 space-y-3 text-slate-600">

                        <li>
                            • Managed monthly payroll operations for 3,000+ employees.
                        </li>

                        <li>
                            • Processed overtime payments and attendance reconciliation
                            for hundreds of employees.
                        </li>

                        <li>
                            • Ensured accurate and timely salary processing before
                            deadlines.
                        </li>

                        <li>
                            • Handled employee financial queries and compensation-related
                            matters.
                        </li>

                        <li>
                            • Supported taxation, compliance, reporting, and audit
                            requirements.
                        </li>

                        <li>
                            • Developed reporting improvements using Excel and Power BI.
                        </li>

                    </ul>

                </div>

            </div>

        </section>
    );
}