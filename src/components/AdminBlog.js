import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function AdminBlog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }
    fetchBlogs();
  }, [token, navigate]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("tags", formData.tags);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5001/api/blog/${editingId}`,
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post("http://localhost:5001/api/blog", formDataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog post");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "",
      tags: "",
      image: null,
    });
    setEditingId(null);
    setPreviewImage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axios.delete(`http://localhost:5001/api/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Error deleting blog post");
      }
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      tags: blog.tags.join(", "),
      image: null,
    });
    setPreviewImage(blog.image ? `http://localhost:5001${blog.image}` : null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Blog Management
            </h1>
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Reset Form
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Blog Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {editingId ? "Edit Blog Post" : "Create New Blog Post"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Content
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    rows="8"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) =>
                        setFormData({ ...formData, tags: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    accept="image/*"
                  />
                  {previewImage && (
                    <div className="mt-4">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {editingId ? "Update Blog Post" : "Create Blog Post"}
                </button>
              </form>
            </motion.div>

            {/* Blog List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Existing Blog Posts
              </h2>
              <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
                {blogs.map((blog) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-1"
                  >
                    {blog.image && (
                      <img
                        src={`http://localhost:5001${blog.image}`}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {blog.content}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.category && (
                        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900/30">
                          {blog.category}
                        </span>
                      )}
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:text-gray-400 dark:bg-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminBlog;
