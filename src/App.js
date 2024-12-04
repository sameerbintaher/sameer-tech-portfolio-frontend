import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Lifestyle from "./components/LifeStyle";
import AdminLogin from "./components/AdminLogin";
import AdminBlog from "./components/AdminBlog";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <div className="pt-16">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <section id="home">
                          <Home />
                        </section>
                        <section id="about" className="min-h-screen py-20">
                          <About />
                        </section>
                        <section id="skills" className="min-h-screen py-20">
                          <Skills />
                        </section>
                        <section id="projects" className="min-h-screen py-20">
                          <Projects />
                        </section>
                        <section id="experience" className="min-h-screen py-20">
                          <Experience />
                        </section>
                        <section
                          id="publications"
                          className="min-h-screen py-20"
                        >
                          <Publications />
                        </section>
                        <section id="contact" className="min-h-screen py-20">
                          <Contact />
                        </section>
                      </>
                    }
                  />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/lifestyle" element={<Lifestyle />} />
                  <Route path="/admin" element={<AdminLogin />} />
                  <Route path="/admin/blog" element={<AdminBlog />} />
                </Routes>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
