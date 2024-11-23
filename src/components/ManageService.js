import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageService = () => {
    const [formData, setFormData] = useState({
        username: '',
        id: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back
        setFormData({
            username: '',
            id: '',
        });
        navigate('/service'); // Navigate back to the Service screen
    };

    const handleBegin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/manage_service', formData);
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
            <h2>Procedure: Manage Service</h2>
            <form onSubmit={handleBegin} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
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
                        Begin
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ManageService;
