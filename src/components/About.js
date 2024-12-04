import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
            {/* Profile Image Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative">
                  <img
                    src="/profile.jpg"
                    alt="Md Obaidullah Bin Taher"
                    className="rounded-lg shadow-2xl w-full object-cover aspect-[3/4]"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
                  CSC Scholar
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  About Me
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hello! My name is Md Obaidullah Bin Taher, a passionate
                  Computer Scientist and a dedicated learner currently pursuing
                  a master's degree in Computer Science at Tiangong University,
                  Tianjin, China.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in Artificial Intelligence (AI), Machine Learning
                  (ML), and MERN stack development, with a focus on solving
                  complex problems through innovative solutions. My journey in
                  tech started during my bachelor's studies in Computer Science
                  and Technology at Tiangong University, where I built a strong
                  foundation in programming, algorithms, and software
                  development.
                </p>
              </div>

              {/* Achievements Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                  Achievements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Recipient of the prestigious CSC Scholarship in 2023
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Selected as one of the best students of 2023</span>
                  </li>
                </ul>
              </div>

              {/* Professional Roles Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                  Professional Roles
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Working at AILAB and contributing to advanced research
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Manager at Tiangong University International Dormitory
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Active involvement with the university's admission office
                    </span>
                  </li>
                </ul>
              </div>

              {/* Passions Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                  Passions
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    Research in Computer Vision and Pattern Recognition (CVPR),
                    with a specific focus on image processing and contrastive
                    learning.
                  </p>
                  <p>
                    Beyond academics and work, I enjoy learning new languages
                    (currently exploring Korean) and hosting cultural and
                    community programs, fostering connections among diverse
                    groups of people.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                  Education
                </h3>
                <div className="space-y-6">
                  {/* Masters Degree */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          Master of Science in Computer Science
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          Tiangong University, Tianjin, China
                        </p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        2023 - Present
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>
                        • Research Focus: Computer Vision and Pattern
                        Recognition
                      </li>
                      <li>• Specialization in AI and Machine Learning</li>
                      <li>• CSC Scholarship Recipient</li>
                    </ul>
                  </div>

                  {/* Bachelors Degree */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          Bachelor of Science in Computer Science and Technology
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          Tiangong University, Tianjin, China
                        </p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        2019 - 2023
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Major: Computer Science and Technology</li>
                      <li>
                        • Key Courses: Data Structures, Algorithms, Database
                        Systems, Web Development
                      </li>
                      <li>• Academic Excellence Award</li>
                    </ul>
                  </div>

                  {/* High School */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          High School
                        </h4>
                        <p className="text-green-600 dark:text-green-400 font-medium">
                          Chittagong Engineering University School and College,
                          Chittagong, Bangladesh
                        </p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        2015 - 2017
                      </span>
                    </div>
                  </div>

                  {/* Secondary School */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          Secondary School
                        </h4>
                        <p className="text-red-600 dark:text-red-400 font-medium">
                          Chittagong Engineering University School and College,
                          Chittagong, Bangladesh
                        </p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        2010 - 2015
                      </span>
                    </div>
                  </div>

                  {/* Primary School */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          Primary School
                        </h4>
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                          Nazarer Tilla Abdul Aziz Government Primary School,
                          Rangunia, Chittagong, Bangladesh
                        </p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        2006 - 2010
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl font-medium text-gray-800 dark:text-white italic">
                "I believe in continuous growth and am always eager to take on
                challenges that push me to learn and grow."
              </p>

              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's connect and create something impactful together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
