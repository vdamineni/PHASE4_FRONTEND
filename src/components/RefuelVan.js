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
  const [message, setMessage] = useState(null); // Success or error message
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const navigate = useNavigate();

  // Fetch the available Van IDs for the dropdown
  useEffect(() => {
    const fetchVanIds = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get_fvan_ids"); // Backend API endpoint to fetch van IDs
        setVanIds(response.data);
      } catch (err) {
        console.error("Error fetching van IDs:", err.message);
        setMessage("Failed to load van IDs.");
        setMessageType("error");
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
    const { id, more_fuel } = formData;

    // Basic validation
    if (!id || !more_fuel || more_fuel <= 0) {
      setMessage("Please provide a valid Van ID and fuel amount.");
      setMessageType("error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/refuel_van", formData); // Backend API endpoint to refuel van
      setMessage(response.data.message || "Van refueled successfully!");
      setMessageType("success");

      // Clear form after successful submission
      setFormData({
        id: "",
        tag: "",
        more_fuel: "",
      });

      setTimeout(() => navigate("/van"), 2000); // Navigate back after 2 seconds
    } catch (err) {
      console.error("Error refueling van:", err.message);
      setMessage(err.response?.data || "Error occurred while refueling the van.");
      setMessageType("error");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Procedure: Refuel Van</h2>

      {message && (
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            color: messageType === "success" ? "green" : "red",
            border: `1px solid ${messageType === "success" ? "green" : "red"}`,
            borderRadius: "5px",
            backgroundColor: messageType === "success" ? "#eaffea" : "#ffeaea",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleRefuel} style={{ display: "grid", gap: "20px" }}>
        <div>
          <label>Van ID</label>
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
          <label>Additional Fuel</label>
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
