import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Java Full-Stack Developer Trainee',
            company: 'Tap Academy',
            location: 'BTM Layout, Bangalore',
            period: 'August 2025 - January 2026',
            description: [
                'Developed and maintained web applications using Java, Spring Boot, and React',
                'Collaborated with cross-functional teams to deliver features on time',
                'Implemented RESTful APIs and optimized database queries for better performance',
            ],
            technologies: ['Core-Java', 'Advanced-Java', 'JSP', 'Servlets', 'JDBC', 'Spring Boot', 'MySQL', 'React'],
            current: true,
        },
        // Add more experiences as you gain them
        // {
        //   id: 2,
        //   title: 'Web Development Intern',
        //   company: 'Another Company',
        //   location: 'City, State',
        //   period: 'Month 2024 - Month 2024',
        //   description: [
        //     'Built responsive web pages using HTML, CSS, and JavaScript',
        //     'Assisted in debugging and testing web applications',
        //   ],
        //   technologies: ['HTML', 'CSS', 'JavaScript'],
        //   current: false,
        // },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="experience"
            className="min-h-screen bg-gray-900 py-20 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl opacity-10 rounded-full" />
            <div className="absolute bottom-40 right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 blur-3xl opacity-10 rounded-full" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <BriefcaseIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Work</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Experience
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and hands-on experience
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10">
                                {exp.current && (
                                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
                                >
                                    {/* Current Badge */}
                                    {exp.current && (
                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 mb-3">
                                            Current
                                        </span>
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                    <h4 className="text-cyan-400 font-medium mb-3">{exp.company}</h4>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPinIcon className="w-4 h-4" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="text-cyan-400 mt-1">▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-cyan-300 rounded-full border border-gray-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note for freshers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8"
                >
                    <p className="text-gray-500 text-sm">
                        💡 Open to internships and entry-level opportunities
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
