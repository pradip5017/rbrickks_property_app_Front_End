// src/api/propertyService.js
import api from "./axiosInstance";

// GET /properties (public)
export const getAllProperties = () => {
  return api.get("/properties");
};

// GET /properties/my (user-specific)
export const getMyProperties = () => {
  return api.get("/properties/my");
};

// POST /properties (create new)
export const createProperty = (data) => {
  return api.post("/properties", data);
};

// PUT /properties/:id (edit property)
export const updateProperty = (id, data) => {
  return api.put(`/properties/${id}`, data);
};

// DELETE /properties/:id
export const deleteProperty = (id) => {
  return api.delete(`/properties/${id}`);
};
