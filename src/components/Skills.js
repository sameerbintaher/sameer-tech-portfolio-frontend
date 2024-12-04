import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "Python",
          icon: "💻",
          description:
            "Advanced proficiency in building AI models, image processing, and data analysis.",
        },
        {
          name: "C++",
          icon: "⚡",
          description:
            "Strong foundation in algorithms, data structures, and performance optimization.",
        },
        {
          name: "JavaScript",
          icon: "🌐",
          description:
            "Skilled in web development, including both frontend and backend (MERN stack).",
        },
      ],
    },
    {
      category: "Technologies and Tools",
      items: [
        {
          name: "Web Development",
          icon: "⚛️",
          description:
            "Expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        },
        {
          name: "CAD Software",
          icon: "📐",
          description:
            "Proficient in AutoCAD and UGNX8.0 for technical design and analysis.",
        },
        {
          name: "Data Analysis",
          icon: "📊",
          description:
            "Experience with MATLAB and Origin 8.0 for statistical modeling.",
        },
        {
          name: "Quality Control",
          icon: "🔍",
          description:
            "Hands-on knowledge of VESTA and fabric analysis systems.",
        },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        {
          name: "Windows",
          icon: "🪟",
          description: "Proficient in Windows 10 and 11.",
        },
        {
          name: "macOS",
          icon: "🍏",
          description:
            "Skilled in macOS systems for development and productivity.",
        },
        {
          name: "Linux",
          icon: "🐧",
          description:
            "Comfortable with Linux for programming, system administration, and development workflows.",
        },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          name: "Leadership",
          icon: "👔",
          description:
            "Effective leader with experience managing large-scale dormitory operations.",
        },
        {
          name: "Teamwork",
          icon: "🤝",
          description:
            "Exceptional collaborator, fostering connections among diverse groups.",
        },
        {
          name: "Problem-Solving",
          icon: "🧠",
          description:
            "Adept at finding innovative solutions to complex challenges.",
        },
        {
          name: "Communication",
          icon: "🗣️",
          description:
            "Strong verbal and written communication skills in English and Bengali, with developing knowledge of Korean.",
        },
      ],
    },
    {
      category: "Other Technical Skills",
      items: [
        {
          name: "Productivity Tools",
          icon: "📂",
          description: "MS Office (Word, Excel, PowerPoint).",
        },
        {
          name: "Database Management",
          icon: "🗄️",
          description: "Proficient in MongoDB and MySQL.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300 mt-1">
                          {skill.icon}
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/20 dark:group-hover:border-blue-400/20 rounded-xl transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
