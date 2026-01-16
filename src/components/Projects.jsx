import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CodeBracketIcon,
    RocketLaunchIcon,
    GlobeAltIcon,
    PlayCircleIcon,
    PhotoIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

// Project preview images
import javafoodsPreview from '../assets/images/javafoods-preview.png';
import emailAssistantPreview from '../assets/images/email-assistant-preview.png';
import portfolioPreview from '../assets/images/portfolio-preview.png';

// Project demo videos (you can add your video files here)
import javafoodsVideo from '../assets/videos/javafoods-demo.mp4';
//import portfolioVideo from '../assets/videos/portfolio-demo.mp4';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'JavaFoods',
            subtitle: 'Online Food Delivery Web Application',
            description:
                'A full-stack food delivery web application enabling users to browse restaurants, view menus, and place orders. Built with Java backend and dynamic JSP-based UI.',
            techStack: ['Java', 'Spring Boot', 'JDBC', 'MySQL', 'JSP', 'Servlets'],
            icon: RocketLaunchIcon,
            gradient: 'from-orange-500 to-red-500',
            bgGradient: 'from-orange-500/10 to-red-500/10',
            githubUrl: 'https://github.com/Soubhagyawali/JavaFoods',
            videoUrl: javafoodsVideo,
            imageUrl: javafoodsPreview,
        },
        {
            id: 2,
            title: 'Smart Email Assistant',
            subtitle: 'AI-Powered Chrome Extension',
            description:
                'An AI-powered Chrome extension to generate context-aware email replies inside Gmail. Integrated with Google Gemini API, reducing manual email effort by ~40%.',
            techStack: ['Java', 'Spring Boot', 'REST APIs', 'Google Gemini API', 'React'],
            icon: CodeBracketIcon,
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-500/10 to-pink-500/10',
            githubUrl: 'https://github.com/Soubhagyawali/Smart-Email-Assistant-Chrome-Extension',
            videoUrl: null, // Add your video path here: emailAssistantVideo
            imageUrl: emailAssistantPreview,
        },
        {
            id: 3,
            title: 'Portfolio Website',
            subtitle: 'Modern Developer Portfolio',
            description:
                'A sleek, animated portfolio showcasing my skills and projects. Built with modern technologies featuring smooth animations and responsive design.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            icon: GlobeAltIcon,
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-500/10 to-cyan-500/10',
            githubUrl: 'https://github.com/Soubhagyawali/Portfolio',
            videoUrl: null,//portfolioVideo,
            imageUrl: portfolioPreview,
        },
    ];

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

    return (
        <section
            id="projects"
            className="min-h-screen bg-gray-900 py-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <RocketLaunchIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-cyan-400">My</span>{' '}
                        <span className="text-white">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects:
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {projects.map((project) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10`}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                                />

                                {/* Image Container */}
                                <div className="relative w-full aspect-video bg-gray-800/80 overflow-hidden group/image">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={`${project.title} Preview`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center">
                                            <PhotoIcon className={`w-16 h-16 text-gray-600 group-hover:text-gray-500 transition-colors`} />
                                            <p className="text-gray-500 text-sm mt-2">Preview coming soon</p>
                                        </div>
                                    )}
                                    {/* Gradient Overlay */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${project.bgGradient} to-transparent`} />
                                </div>

                                {/* Card Content */}
                                <div className="p-5 relative z-10">
                                    {/* Icon and Title Row */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                                        >
                                            <IconComponent className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-cyan-400 text-xs font-medium">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-0.5 text-xs font-medium bg-gray-800/80 text-cyan-300 rounded-full border border-gray-700/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors border border-gray-700"
                                        >
                                            <CodeBracketIcon className="w-4 h-4" />
                                            Code
                                        </motion.a>
                                        <motion.button
                                            onClick={() => setSelectedProject(project)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-lg transition-all shadow-lg hover:shadow-xl cursor-pointer`}
                                        >
                                            <PlayCircleIcon className="w-4 h-4" />
                                            Preview
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-sm">
                        🚀 More projects coming soon...
                    </p>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className={`flex items-center justify-between p-4 bg-gradient-to-r ${selectedProject.gradient} text-white`}>
                                <div className="flex items-center gap-3">
                                    <selectedProject.icon className="w-6 h-6" />
                                    <div>
                                        <h3 className="font-bold text-lg">{selectedProject.title}</h3>
                                        <p className="text-sm opacity-90">{selectedProject.subtitle}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Video Content */}
                            <div className="aspect-video bg-gray-800 flex items-center justify-center">
                                {selectedProject.videoUrl ? (
                                    <video
                                        src={selectedProject.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <div className="text-center text-gray-400">
                                        <PlayCircleIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                        <p className="text-lg font-medium">Video Coming Soon</p>
                                        <p className="text-sm mt-2">Demo video will be uploaded shortly</p>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.slice(0, 4).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-medium bg-gray-700 text-cyan-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                        <CodeBracketIcon className="w-4 h-4" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

