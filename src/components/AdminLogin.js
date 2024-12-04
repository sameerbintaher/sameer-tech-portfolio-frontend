import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function AdminLogin() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        loginData
      );
      localStorage.setItem("adminToken", response.data.token);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/admin/blog");
      }, 2000);
    } catch (error) {
      setError("⚠️ ACCESS DENIED: Security Alert Triggered");
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:via-gray-900 dark:to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Success Message Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-green-600 p-8 rounded-xl max-w-md mx-4 shadow-[0_0_30px_rgba(34,197,94,0.7)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">ACCESS GRANTED</h3>
              </div>
              <div className="space-y-4 text-green-100">
                <p className="font-medium text-center mb-4">
                  Welcome back, Administrator Sameer
                </p>
                <div className="bg-green-500/30 p-4 rounded-lg border border-green-400/20 font-mono text-sm space-y-2">
                  <h4 className="font-bold mb-2">
                    Security Clearance Verified
                  </h4>
                  <p>• Identity: Confirmed</p>
                  <p>• Access Level: Administrator</p>
                  <p>• Session: Secured</p>
                  <p>• Status: Active</p>
                </div>
                <p className="text-sm font-mono border-t border-green-500/30 pt-4 mt-4">
                  Initializing administrative interface...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Previous Warning Message Overlay */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-red-600 p-8 rounded-xl max-w-md mx-4 shadow-[0_0_30px_rgba(220,38,38,0.7)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  SECURITY BREACH DETECTED
                </h3>
              </div>
              <div className="space-y-4 text-red-100">
                <p className="font-medium text-center mb-4">
                  ⚠️ Invalid Credentials Entered ⚠️
                </p>
                <p className="font-medium">
                  You are not Sameer. Why are you attempting to access this
                  restricted system? This unauthorized action has been logged
                  and flagged for immediate review.
                </p>
                <div className="bg-red-500/30 p-4 rounded-lg border border-red-400/20 font-mono text-sm space-y-2">
                  <h4 className="font-bold mb-2">Details Logged</h4>
                  <p>• IP Address: Captured</p>
                  <p>• Timestamp: Recorded</p>
                  <p>• Device Signature: Registered</p>
                  <p>• Security Status: Elevated</p>
                </div>
                <p className="text-sm font-mono border-t border-red-500/30 pt-4 mt-4">
                  ⚠ WARNING: Further unauthorized attempts will trigger severe
                  security protocols, including access bans and direct
                  monitoring by the administrator, Sameer.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Warning Message - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-r from-red-600 to-red-500 dark:from-red-800 dark:to-red-600 text-white p-8 rounded-2xl shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-500/20 backdrop-blur-sm h-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping"></div>
              <svg
                className="w-8 h-8 text-yellow-300 relative"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-wider">DANGER ZONE</h2>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-red-50 leading-relaxed mb-6 font-medium text-lg">
                You are attempting to access a highly restricted administrative
                area managed by Sameer. Unauthorized access will trigger
                immediate and irreversible security protocols.
              </p>
            </div>

            <div className="space-y-4 text-red-50 bg-red-900/30 p-6 rounded-lg border border-red-400/20">
              <h3 className="font-bold text-lg mb-4">System Status</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="font-mono text-sm">
                  <span className="text-yellow-300">Monitoring:</span> Active
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <p className="font-mono text-sm">
                  <span className="text-yellow-300">Recording:</span> IP,
                  device, and access activity
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <p className="font-mono text-sm">
                  <span className="text-yellow-300">Alert Level:</span> MAXIMUM
                </p>
              </div>
            </div>

            <div className="space-y-4 text-red-50 bg-red-900/30 p-6 rounded-lg border border-red-400/20">
              <h3 className="text-lg font-bold text-yellow-300 mb-4">
                SECURITY MEASURES IN EFFECT
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">►</span>
                  Biometric data verification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">►</span>
                  Continuous network activity surveillance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">►</span>
                  Automated intrusion detection systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">►</span>
                  Real-time access and activity logging
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-red-500/30">
              <p className="text-sm font-mono text-red-50">
                ⚠ WARNING: Proceed only if you have authorized credentials.
                Failure to comply will result in escalated security actions
                under the oversight of Sameer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Login Form - Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-white/10 p-8 rounded-2xl shadow-xl dark:shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-gray-200 dark:border-white/20 backdrop-blur-lg h-full"
        >
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-8">
            SECURITY CLEARANCE REQUIRED
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center text-sm bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border border-red-500/50 font-mono"
              >
                {error}
              </motion.div>
            )}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-mono"
                >
                  SECURITY CLEARANCE ID
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono"
                  value={loginData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-mono"
                >
                  ACCESS CODE
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-lg shadow-red-500/30 font-mono"
              >
                VERIFY CREDENTIALS
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono text-center">
              NOTICE: All login attempts are permanently recorded
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminLogin;
