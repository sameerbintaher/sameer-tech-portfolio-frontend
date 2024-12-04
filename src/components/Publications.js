import React from "react";

function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Publications
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Research Icon */}
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <svg
                  className="w-12 h-12 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Coming Soon!
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              I am actively working on research in Computer Vision and Pattern
              Recognition (CVPR), with a focus on contrastive learning and image
              quality assessment. Future publications will be shared here as
              they become available.
            </p>

            <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Stay tuned!
            </div>
          </div>

          {/* Research Focus Areas */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Computer Vision
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Research focusing on advanced image processing techniques and
                pattern recognition systems.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Contrastive Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Exploring innovative approaches in self-supervised learning and
                representation learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
