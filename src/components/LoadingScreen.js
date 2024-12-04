import React from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center z-50"
    >
      <div className="space-y-12 text-center max-w-md px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            SAMEER
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <div className="text-lg text-gray-300 font-mono">
              Initializing System...
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 text-sm font-mono"
          >
            <p className="text-blue-400">Loading essential components...</p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <p className="text-purple-400">Establishing secure connection...</p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <p className="text-pink-400">Preparing user interface...</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-sm font-mono italic"
          >
            Please wait while the system configures itself for an optimized
            experience.
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
