import React from "react";

const PropertyCard = ({ property, onEdit, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
      <h3>{property.title}</h3>
      <p>
        City: {property.city} <br />
        Rent: ₹{property.rent} <br />
        Type: {property.type} <br />
        Description: {property.description}
      </p>
      {onEdit && <button onClick={() => onEdit(property.id)}>Edit</button>}
      {onDelete && <button onClick={() => onDelete(property.id)} style={{ marginLeft: "10px" }}>Delete</button>}
    </div>
  );
};

export default PropertyCard;
