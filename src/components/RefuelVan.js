import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RefuelVan = () => {
  const [formData, setFormData] = useState({
    id: "",
    tag: "",
    more_fuel: "",
  });

  const [vanIds, setVanIds] = useState([]);
  const navigate = useNavigate();

  // Fetch the available Van IDs for the dropdown
  useEffect(() => {
    const fetchVanIds = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get_fvan_ids"); // Backend API endpoint to fetch van IDs
        setVanIds(response.data);
      } catch (err) {
        console.error("Error fetching van IDs:", err.message);
      }
    };
    fetchVanIds();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    navigate("/van"); // Navigate back to the Van screen
  };

  const handleRefuel = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/refuel_van", formData); // Backend API endpoint to refuel van
      alert(response.data.message || "Van refueled successfully!");
      navigate("/van"); // Navigate back to the Van screen
    } catch (err) {
      console.error("Error refueling van:", err.message);
      alert("Error refueling van: " + err.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Procedure: Refuel Van</h2>
      <form onSubmit={handleRefuel} style={{ display: "grid", gap: "20px" }}>
        <div>
          <label>Id</label>
          <select
            name="id"
            value={formData.id}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px", marginTop: "5px" }}
          >
            <option value="" disabled>
              Select Van ID
            </option>
            {vanIds.map((van) => (
              <option key={van} value={van}>
                {van}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tag</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label>More Fuel</label>
          <input
            type="number"
            name="more_fuel"
            value={formData.more_fuel}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px", marginTop: "5px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              backgroundColor: "#ccc",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Refuel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RefuelVan;
