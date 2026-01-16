import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ClockIcon,
  TrophyIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import sgbitLogo from '../assets/education/Sgbitlogo.jpeg';
import puCollegeLogo from '../assets/education/collegelogo.jpg';
import schoolLogo from '../assets/education/oxfordlogo.jpeg';

// Certificate PDFs
import javaNptelCert from '../assets/certificates/java-nptel.pdf';
import algorithmsUdemyCert from '../assets/certificates/algorithms-udemy.pdf';
import cloudComputingCert from '../assets/certificates/cloud-computing-vtu.pdf';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree:
        'B.E. in Computer Science and Business Systems',
      institution: 'S.G. Balekundri Institute of Technology (VTU), Belagavi',
      period: '2022 - 2026',
      cgpa: '8.75',
      logo: sgbitLogo,
    },
    {
      id: 2,
      degree: '12th State Board',
      institution: 'GGD Arts & SVG SC PU College, Bailhongal',
      period: '2020 - 2022',
      percentage: '86.33%',
      logo: puCollegeLogo,
    },
    {
      id: 3,
      degree: '10th State Board',
      institution: 'Oxford English Medium School, Bailhongal',
      period: '2019 - 2020',
      percentage: '94.24%',
      logo: schoolLogo,
    },
  ];

  const certifications = [
    {
      name: 'Java Full Stack Development',
      issuer: 'Tap Academy',
      year: 2025,
      icon: TrophyIcon,
      link: null,
    },
    {
      name: 'Cloud Computing Certification',
      issuer: 'VTU Center for Online Education',
      year: 2025,
      icon: TrophyIcon,
      link: cloudComputingCert,
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL - IIT Kharagpur',
      year: 2024,
      icon: TrophyIcon,
      link: javaNptelCert,
    },
    {
      name: 'Smart India Hackathon',
      issuer: 'Participant',
      year: 2024,
      icon: TrophyIcon,
      link: null,
    },
    {
      name: 'Design and Analysis of Algorithms',
      issuer: 'Udemy',
      year: 2023,
      icon: TrophyIcon,
      link: algorithmsUdemyCert,
    },

  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-24 left-64 h-96 w-96 bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl opacity-40 rounded-full" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <AcademicCapIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Education
          </h2>
          <p className="text-gray-300 mt-2">
            My learning journey and certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-4">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* LOGO */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center shadow-md"
                >
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-cyan-300 text-sm">{edu.institution}</p>

                  <div className="flex items-center gap-1 mt-1">
                    <ClockIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <p className="text-sm text-emerald-400 mt-1">
                      CGPA: <span className="font-semibold">{edu.cgpa}</span>
                    </p>
                  )}

                  {edu.percentage && (
                    <p className="text-sm text-emerald-400 mt-1">
                      Percentage:{' '}
                      <span className="font-semibold">{edu.percentage}</span>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-10 mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Certifications
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const CardWrapper = cert.link ? motion.a : motion.div;
            const cardProps = cert.link
              ? {
                href: cert.link,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                whileHover={{ scale: 1.02 }}
                className={`block bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all ${cert.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-cyan-300 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs">{cert.year}</span>
                    {cert.link && (
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 text-cyan-400 hover:text-cyan-300" />
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 rounded-xl border border-cyan-500/20 text-center">
          <div className="flex items-center justify-center gap-2">
            <BuildingLibraryIcon className="w-5 h-5 text-cyan-400" />
            <p className="text-cyan-300 text-sm">
              Always learning and growing 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
