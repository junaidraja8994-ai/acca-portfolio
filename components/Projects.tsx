export default function Projects() {
    const projects = [
        {
            title: "Large-Scale Payroll Management Operations",
            description:
                "Managed end-to-end payroll operations for 3,000+ employees, ensuring accurate salary processing, compliance, and timely execution.",
            impact: [
                "3,000+ employee payroll management",
                "Monthly salary processing and verification",
                "Improved accuracy through process controls",
            ],
        },

        {
            title: "Overtime Processing & Workforce Analysis",
            description:
                "Handled overtime calculations, attendance reconciliation, and workforce payment analysis for large employee groups.",
            impact: [
                "790+ overtime cases processed",
                "Attendance verification and reconciliation",
                "Accurate compensation processing",
            ],
        },

        {
            title: "Finance Reporting & Business Intelligence",
            description:
                "Applied financial analysis and reporting techniques to support management decisions and improve operational visibility.",
            impact: [
                "Power BI dashboard development",
                "Financial data visualization",
                "Improved reporting efficiency",
            ],
        },
    ];


    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-24"
        >

            <div className="mb-12">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                    Projects & Achievements
                </p>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                    Delivering Financial Impact Through Experience
                </h2>

            </div>


            <div className="grid gap-8 lg:grid-cols-3">

                {projects.map((project) => (

                    <div
                        key={project.title}
                        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                        <h3 className="text-xl font-bold text-slate-900">
                            {project.title}
                        </h3>


                        <p className="mt-5 leading-7 text-slate-600">
                            {project.description}
                        </p>


                        <ul className="mt-6 space-y-3">

                            {project.impact.map((item) => (

                                <li
                                    key={item}
                                    className="flex items-start text-slate-600"
                                >

                                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-blue-700">
                                    </span>

                                    {item}

                                </li>

                            ))}

                        </ul>


                    </div>

                ))}

            </div>

        </section>
    );
}