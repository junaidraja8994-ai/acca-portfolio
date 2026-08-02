export default function Projects() {
    const projects = [
        {
            title: "Large-Scale Payroll Management Operations",
            description:
                "Managed end-to-end payroll operations for 3,000+ employees, ensuring accurate salary processing, verification, compliance, and timely execution.",
            achievements: [
                "3,000+ employee monthly payroll management",
                "Salary processing and verification controls",
                "Improved accuracy through structured processes",
            ],
        },
        {
            title: "Overtime Processing & Workforce Analysis",
            description:
                "Handled overtime calculations, attendance reconciliation, and workforce payment analysis for large employee groups.",
            achievements: [
                "790+ overtime payment cases processed",
                "Attendance verification and reconciliation",
                "Accurate compensation processing",
            ],
        },
        {
            title: "Finance Reporting & Business Intelligence",
            description:
                "Developed reporting improvements using Excel and Power BI to provide better visibility into financial and operational data.",
            achievements: [
                "Power BI dashboard development",
                "Financial data visualization",
                "Improved reporting efficiency",
            ],
        },
    ];

    return (
        <section id="projects" className="bg-[#06142f] py-20 text-white">

            <div className="container mx-auto px-6">

                <div className="text-center mb-14">

                    <p className="text-blue-400 font-semibold uppercase tracking-widest">
                        Projects & Achievements
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Delivering Financial Impact Through Experience
                    </h2>

                </div>


                <div className="grid lg:grid-cols-3 gap-8">


                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="
                            bg-white/10
                            backdrop-blur-lg
                            border
                            border-white/20
                            rounded-2xl
                            p-8
                            hover:-translate-y-2
                            transition
                            duration-300
                            "
                        >

                            <h3 className="text-xl font-bold text-blue-400 mb-4">
                                {project.title}
                            </h3>


                            <p className="text-gray-300 leading-relaxed mb-6">
                                {project.description}
                            </p>


                            <div className="space-y-3">

                                {project.achievements.map((item, i) => (

                                    <p
                                        key={i}
                                        className="text-sm text-gray-200 flex gap-2"
                                    >
                                        <span className="text-blue-400">
                                            ✓
                                        </span>

                                        {item}

                                    </p>

                                ))}

                            </div>


                        </div>

                    ))}


                </div>

            </div>

        </section>
    );
}