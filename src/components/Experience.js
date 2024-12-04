import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Researcher",
      company: "AILAB",
      duration: "2023 – Present",
      responsibilities: [
        "Conducting advanced research in Computer Vision and Pattern Recognition (CVPR), focusing on image processing and contrastive learning.",
        "Collaborated on projects related to AI model development and deployment.",
        "Optimized algorithms to improve the efficiency and accuracy of AI-based solutions.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      role: "Manager",
      company: "Tiangong University International Dormitory",
      duration: "2023 – Present",
      responsibilities: [
        "Managed daily operations for over 400 international students, ensuring a safe and productive living environment.",
        "Implemented a Student Management System for efficient record-keeping and reporting.",
        "Regularly reported to faculty on student check-ins and dormitory updates.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      role: "Admissions Assistant",
      company: "Tiangong University Admission Office",
      duration: "2023 – Present",
      responsibilities: [
        "Assisted prospective international students by providing information about admission requirements and procedures.",
        "Facilitated smooth communication between applicants and the university administration.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      role: "Program Host and Coordinator",
      company: "Event Coordinator",
      duration: "Ongoing",
      responsibilities: [
        "Organized and hosted various cultural and academic events, including the Mid-Autumn Festival and Spring Festival.",
        "Fostered a sense of community among diverse groups of students and faculty.",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 group">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-0 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-600 dark:border-purple-600 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-200"></div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ml-6 transform transition duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
