import React, { useEffect, useState } from "react";
import { getAllProperties } from "../api/propertyService";
import PropertyCard from "../components/PropertyCard";
// import React, { useEffect, useState } from 'react';
// import API from './services/axiosInstance';

const Home = () => {
  const [properties, setProperties] = useState([]);

 useEffect(() => {
  getAllProperties()
    .then((res) => {
      console.log("API response:", res.data);
      if (Array.isArray(res.data)) {
        setProperties(res.data);
      } else {
        console.warn("Expected array, got:", res.data);
        setProperties([]);
      }
    })
    .catch((err) => {
      console.error("Error fetching properties:", err);
      setProperties([]);
    });
}, []);

//chat gpt

// useEffect(() => {
//   API.get('/properties')
//     .then(res => setProperties(res.data))
//     .catch(err => console.log(err));
// }, []);
// //..



// API.post("/properties", {
//   title: "Test",
//   city: "Mumbai",
//   rent: 10000,
//   type: "2BHK",
//   description: "Great property",
// })
// .then(res => alert("Posted!"))
// .catch(err => console.log(err));




  return (
    <div>
      <h1>All Properties</h1>
      {Array.isArray(properties) && properties.length > 0 ? (
        properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
};

export default Home;
