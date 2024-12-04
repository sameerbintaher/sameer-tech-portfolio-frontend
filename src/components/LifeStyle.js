import React, { useState, useEffect } from "react";
import axios from "axios";

function Lifestyle() {
  const [lifestyles, setLifestyles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    fetchLifestyles();
  }, []);

  const fetchLifestyles = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/lifestyle");
      setLifestyles(response.data);
    } catch (error) {
      console.error("Error fetching lifestyles:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5001/api/lifestyle", data);
      fetchLifestyles();
    } catch (error) {
      console.error("Error creating lifestyle post:", error);
    }
  };

  return (
    <div>
      <h1>Lifestyle Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        <input type="file" name="image" onChange={handleFileChange} required />
        <button type="submit">Create Lifestyle Post</button>
      </form>

      <div>
        {lifestyles.map((lifestyle) => (
          <div key={lifestyle._id}>
            <h2>{lifestyle.title}</h2>
            <p>{lifestyle.description}</p>
            <img
              src={`http://localhost:5001${lifestyle.image}`}
              alt={lifestyle.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lifestyle;
