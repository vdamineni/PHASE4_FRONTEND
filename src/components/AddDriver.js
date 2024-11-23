import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDriverRole = () => {
    const [formData, setFormData] = useState({
        username: '',
        licenseID: '',
        license_type: '',
        driver_experience: '',        
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back to the Driver screen
        setFormData({
            username: '',
            licenseID: '',
            license_type: '',
            driver_experience: '',            
        });
        navigate('/driver'); // Navigate back to the Driver screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/add_driver_role', formData);
            alert(response.data); // Show success message
            handleCancel(); // Clear the form and navigate back
        } catch (err) {
            console.error('Error:', err.message);
            alert('Error: ' + err.message); // Show error message
        }
    };

    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Add Driver Role</h2>
            <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>LicenseID</label>
                    <input
                        type="text"
                        name="licenseID"
                        value={formData.licenseID}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>License_type</label>
                    <input
                        type="text"
                        name="license_type"
                        value={formData.license_type}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>Driver_experience</label>
                    <input
                        type="number"
                        name="driver_experience"
                        value={formData.driver_experience}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                
                <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            backgroundColor: '#ccc',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDriverRole;
