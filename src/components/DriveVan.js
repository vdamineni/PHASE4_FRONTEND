import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DriveVan = () => {
  const [formData, setFormData] = useState({
    id: "",
    tag: "",
    destination: "",
  });

  const [vanIds, setVanIds] = useState([]);
  const [message, setMessage] = useState(null); // Message to show success or error feedback
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const navigate = useNavigate();

  // Fetch available van IDs for the dropdown
  useEffect(() => {
    const fetchVanIds = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get_dvan_ids"); // Replace with your backend endpoint
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

  const handleDrive = async (e) => {
    e.preventDefault();

     const dataToSubmit = {};
    for (const key in formData) {
        dataToSubmit[key] = formData[key] === "" ? null : formData[key];
    }


    try {
      const response = await axios.post("http://localhost:3001/drive_van", dataToSubmit); // Replace with your backend endpoint
      setMessage(response.data.message || "Van driven successfully!");
      setMessageType("success");
     setTimeout(() => {
                setMessage(null); // Clear the message after 3 seconds
                setFormData({
        id: "",
        tag: "",
        destination: "",
      });

            }, 3000);

    } catch (err) {
      console.error("Error driving van:", err.message);
      setMessage(err.response?.data || "Error occurred while driving the van.");
      setMessageType("error");
      setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds    
                setMessageType(' ');
            }, 3000);
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
      <h2>Procedure: Drive Van</h2>

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

      <form onSubmit={handleDrive} style={{ display: "grid", gap: "20px" }}>
        <div>
          <label>ID</label>
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
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
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
            Drive
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriveVan;