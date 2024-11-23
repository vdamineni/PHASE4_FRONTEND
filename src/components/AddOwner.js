import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddOwner = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        address: '',
        birthdate: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting Data:', formData); // Debug log
        try {
            const response = await axios.post('http://localhost:3001/addOwner', formData);
            setSuccessMessage(response.data); // Display success message from backend
            setErrorMessage(''); // Clear any previous error message
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
            setErrorMessage(err.response?.data || 'An unexpected error occurred.'); // Display error message
            setSuccessMessage(''); // Clear any previous success message
        }
    };

    const handleCancel = () => {
        setFormData({
            username: '',
            firstName: '',
            lastName: '',
            address: '',
            birthdate: '',
        });
        setErrorMessage('');
        setSuccessMessage('');
        navigate('/business'); // Navigate back to the business screen
    };

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Add Owner</h2>

            {/* Display error message */}
            {errorMessage && (
                <div
                    style={{
                        backgroundColor: '#f8d7da',
                        color: '#842029',
                        border: '1px solid #f5c2c7',
                        padding: '10px',
                        borderRadius: '5px',
                        marginBottom: '10px',
                    }}
                >
                    <strong>Error:</strong> {errorMessage}
                </div>
            )}

            {/* Display success message */}
            {successMessage && (
                <div
                    style={{
                        backgroundColor: '#d1e7dd',
                        color: '#0f5132',
                        border: '1px solid #badbcc',
                        padding: '10px',
                        borderRadius: '5px',
                        marginBottom: '10px',
                    }}
                >
                    {successMessage}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                }}
            >
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <label>Birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px' }}
                    />
                </div>

                <div style={{ gridColumn: 'span 1', textAlign: 'center' }}>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            backgroundColor: '#ccc',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Cancel
                    </button>
                </div>
                <div style={{ gridColumn: 'span 1', textAlign: 'center' }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddOwner;
