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
        <section className="bg-white py-20 text-slate-900">

            <div className="container mx-auto px-6">

                <div className="text-center mb-14">

                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                        Skills & Expertise
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Finance, Technology & Business Skills
                    </h2>

                </div>


                <div className="grid md:grid-cols-3 gap-8">

                    {skillGroups.map((group, index) => (

                        <div
                            key={index}
                            className="
                            bg-slate-50
                            rounded-2xl
                            p-8
                            border
                            hover:shadow-xl
                            transition
                            duration-300
                            "
                        >

                            <h3 className="text-xl font-bold text-blue-600 mb-6">
                                {group.title}
                            </h3>


                            <div className="space-y-3">

                                {group.skills.map((skill, i) => (

                                    <div
                                        key={i}
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        text-slate-700
                                        "
                                    >

                                        <span className="text-blue-500 font-bold">
                                            ✓
                                        </span>

                                        <span>
                                            {skill}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}