import { motion } from 'framer-motion';
import {
    CodeBracketIcon,
    RocketLaunchIcon,
    HeartIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const highlights = [
        {
            icon: CodeBracketIcon,
            title: 'Full-Stack Developer',
            description: 'Building end-to-end web applications with Java, Spring Boot, and React',
        },
        {
            icon: RocketLaunchIcon,
            title: 'Problem Solver',
            description: 'Passionate about creating efficient solutions to complex challenges',
        },
        {
            icon: HeartIcon,
            title: 'Tech Enthusiast',
            description: 'Always exploring new technologies and best practices',
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen bg-gray-900 py-20 flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 blur-3xl opacity-15 rounded-full" />
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-10 rounded-full" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <SparklesIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">About</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Me
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Story */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Hello! I'm <span className="text-cyan-400">Soubhagya Wali</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">

                                I'm a passionate Full-Stack Developer and Computer Science student graduating in 2026. My journey in tech started with curiosity
                                about how software shapes our daily lives, and has evolved into a deep passion for
                                building impactful web applications.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I specialize in <span className="text-cyan-300">Java</span>,
                                <span className="text-cyan-300"> Spring Boot</span>,
                                <span className="text-cyan-300"> MySQL</span>,
                                <span className="text-cyan-300"> React</span>, and I love creating
                                seamless user experiences with clean, efficient code.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                I am passionate about building high-quality software that delivers exceptional user experiences and drives innovation.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: '3+', label: 'Projects' },
                                { value: '4', label: 'Certifications' },
                                { value: '2026', label: 'Graduating' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-700/50 hover:border-cyan-500/30 transition-all"
                                >
                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Highlights */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-5 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Goals Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl p-5 border border-cyan-500/30"
                        >
                            <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                🎯 Current Focus
                            </h4>
                            <p className="text-gray-300 text-sm">
                                Looking for opportunities to work on challenging full-stack projects,
                                contribute to meaningful products, and grow as a developer. Open to
                                internships and entry-level positions!
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
