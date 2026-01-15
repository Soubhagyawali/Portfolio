import React from 'react';
import { motion } from 'framer-motion';

// Import assets
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.svg';
import icon8 from '../assets/icon8.png';


// Duplicate for filling

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "JDBC", level: 85 },
        { name: "Servlets/JSP", level: 80 },
        { name: "Hibernate", level: 75 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Tools & DB",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "Maven", level: 75 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 85 },
      ]
    }
  ];

  // Animation Icons
  const floatingIcons = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
    { icon: icon6 },
    { icon: icon7 },
    { icon: icon8 },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id='skills' className='min-h-screen flex items-center justify-center bg-gray-900 py-20 relative overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center pointer-events-none'>
        <div className='h-96 w-96 bg-gradient-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-20 rounded-full'></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className='flex flex-col lg:flex-row justify-center items-center gap-16'>

          {/* Left Side: Abstract Animation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className='lg:w-1/3 flex justify-center relative h-[400px] items-center'
          >
            <div className='relative w-full max-w-sm flex items-center justify-center'>

              {/* Central Glowing Core */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.4)",
                    "0 0 50px rgba(6, 182, 212, 0.6)",
                    "0 0 20px rgba(59, 130, 246, 0.4)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full backdrop-blur-md border border-blue-400/30 flex items-center justify-center z-10"
              >
                <div className="w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Orbiting Icons */}
              {floatingIcons.map((skill, index) => {
                // Calculate positions in a circle
                const angle = (index / floatingIcons.length) * 2 * Math.PI;
                const radius = 140; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className='absolute z-20 w-14 h-14'
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: [x, x + 10, x],
                      y: [y, y - 10, y],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 5 + index, // Vary duration for organic feel
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className='bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-blue-500/30 w-full h-full flex items-center justify-center'
                    >
                      <img src={skill.icon} alt="skill" className='w-full h-full object-contain' />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Orbital Rings (Decorative) */}
              <motion.div
                className="absolute w-[280px] h-[280px] border border-blue-500/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[320px] h-[320px] border border-cyan-500/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

            </div>
          </motion.div>

          {/* Right Side: Skills Grid */}
          <motion.div
            className='lg:w-2/3 w-full'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section Header with Description */}
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Technical</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Skills
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Category Title */}
                  <h3 className="text-lg font-semibold text-cyan-400 mb-5 pb-2 border-b border-gray-700/50">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-blue-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
