import React, { useEffect, useState } from "react";
import { getMyProperties, deleteProperty } from "../api/propertyService";
import PropertyCard from "../components/PropertyCard";
import { useNavigate } from "react-router-dom";

const MyProperties = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getMyProperties();
    setList(res.data);
  };

  const handleEdit = (id) => navigate(`/edit-property/${id}`);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this property?")) {
      await deleteProperty(id);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>My Properties</h2>
      {list.map((p) => (
        <PropertyCard
          key={p.id}
          property={p}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MyProperties;
