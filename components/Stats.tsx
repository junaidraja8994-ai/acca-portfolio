"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "3,000+",
        title: "Employees Payroll Managed",
        description:
            "Successfully managed large-scale monthly payroll operations with accuracy and timely execution.",
    },
    {
        number: "790+",
        title: "Overtime Payments Processed",
        description:
            "Handled overtime calculations, verification, and workforce compensation processing.",
    },
    {
        number: "10/13",
        title: "ACCA Exams Completed",
        description:
            "Progressing towards ACCA qualification with strong finance and accounting expertise.",
    },
    {
        number: "5+",
        title: "Years Finance Experience",
        description:
            "Experience in finance operations, reporting, compliance, and process improvement.",
    },
];

export default function Stats() {
    return (
        <section className="bg-[#06142f] py-20 text-white">

            <div className="container mx-auto px-6">

                <div className="text-center mb-14">
                    <p className="text-blue-400 uppercase tracking-widest font-semibold">
                        Professional Highlights
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Numbers That Define My Experience
                    </h2>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((stat, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-2xl
                p-8
                shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
                        >

                            <h3 className="text-4xl font-bold text-blue-400">
                                {stat.number}
                            </h3>

                            <h4 className="text-xl font-semibold mt-4">
                                {stat.title}
                            </h4>

                            <p className="text-gray-300 mt-3 leading-relaxed text-sm">
                                {stat.description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}