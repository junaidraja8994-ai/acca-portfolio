export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <div className="grid gap-12 lg:grid-cols-2">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        About Me
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Finance Professional Focused on Accuracy & Business Growth
                    </h2>
                </div>


                <div className="text-lg leading-8 text-slate-600">

                    <p>
                        I am an ACCA Finalist and Finance Professional with practical
                        experience in financial operations, payroll management,
                        reporting, compliance, and process improvement.
                    </p>

                    <p className="mt-6">
                        Currently working as Assistant Manager Finance, managing
                        large-scale payroll operations, employee compensation processes,
                        financial reporting, and supporting management with accurate
                        financial insights.
                    </p>

                    <p className="mt-6">
                        I combine accounting knowledge, technology, and operational
                        experience to improve efficiency and deliver reliable financial
                        solutions.
                    </p>

                </div>

            </div>
        </section>
    );
}