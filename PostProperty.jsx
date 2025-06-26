import React, { useState } from "react";
import { createProperty } from "../api/propertyService";
import { useNavigate } from "react-router-dom";

const PostProperty = () => {
  const [form, setForm] = useState({ title: "", city: "", rent: "", type: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProperty(form);
    alert("Property posted!");
    navigate("/my-properties");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post New Property</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input placeholder="City" onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      <input placeholder="Rent" onChange={(e) => setForm({ ...form, rent: e.target.value })} required />
      <input placeholder="Type" onChange={(e) => setForm({ ...form, type: e.target.value })} required />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostProperty;
