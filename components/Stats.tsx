export default function Stats() {
    const stats = [
        {
            number: "3,000+",
            label: "Employees Payroll Managed",
        },
        {
            number: "790+",
            label: "Overtime Payments Processed",
        },
        {
            number: "10/13",
            label: "ACCA Exams Completed",
        },
        {
            number: "5+",
            label: "Years Finance Experience",
        },
    ];

    return (
        <section className="border-y border-slate-200 bg-slate-50 py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">

                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="text-center"
                    >
                        <h3 className="text-4xl font-bold text-slate-900">
                            {item.number}
                        </h3>

                        <p className="mt-3 text-sm font-medium text-slate-600">
                            {item.label}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}