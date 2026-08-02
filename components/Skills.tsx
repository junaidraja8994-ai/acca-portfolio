export default function Skills() {
    const skillGroups = [
        {
            title: "Finance & Accounting",
            skills: [
                "Financial Reporting",
                "Payroll Management",
                "Budgeting & Analysis",
                "Tax Compliance",
                "Audit Support",
                "Account Reconciliation",
            ],
        },

        {
            title: "Technology & Analytics",
            skills: [
                "Microsoft Excel Advanced",
                "Power BI Dashboarding",
                "QuickBooks",
                "ERP Systems",
                "Data Analysis",
                "Process Automation",
            ],
        },

        {
            title: "Professional Strengths",
            skills: [
                "Problem Solving",
                "Process Improvement",
                "Stakeholder Management",
                "Team Coordination",
                "Financial Decision Support",
                "Operational Excellence",
            ],
        },
    ];


    return (
        <section
            id="skills"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Skills & Expertise
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Finance, Technology & Business Skills
                    </h2>
                </div>


                <div className="grid gap-8 lg:grid-cols-3">

                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                        >

                            <h3 className="text-xl font-bold text-slate-900">
                                {group.title}
                            </h3>


                            <ul className="mt-6 space-y-3">

                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center text-slate-600"
                                    >
                                        <span className="mr-3 h-2 w-2 rounded-full bg-blue-700"></span>
                                        {skill}
                                    </li>
                                ))}

                            </ul>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}