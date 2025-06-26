import React, { useEffect, useState } from "react";
import { updateProperty, getMyProperties } from "../api/propertyService";
import { useParams, useNavigate } from "react-router-dom";

const EditProperty = () => {
  const [form, setForm] = useState({ title: "", city: "", rent: "", type: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMyProperties().then(res => {
      const prop = res.data.find(p => p.id === Number(id));
      if (prop) setForm(prop);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProperty(id, form);
    alert("Property updated!");
    navigate("/my-properties");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Property</h2>
      <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      <input value={form.rent} onChange={(e) => setForm({ ...form, rent: e.target.value })} required />
      <input value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} required />
      <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditProperty;
