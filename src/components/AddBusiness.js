import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBusiness = () => {
    const [formData, setFormData] = useState({
        long_name: '',
        rating: '',
        spent: '',
        location: '',
    });

    const [message, setMessage] = useState(null); // Message to display
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        // Clear the form and navigate back
        setFormData({
            long_name: '',
            rating: '',
            spent: '',
            location: '',
        });
        navigate('/business'); // Navigate back to the Business screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/add_business', formData);
            setMessage(response.data); // Display success message
            setMessageType('success');
            setTimeout(() => {
                setMessage(null); // Clear the message after 3 seconds
                handleCancel(); // Clear the form and navigate back
            }, 3000);
        } catch (err) {
            setMessage(err.response?.data || 'An unexpected error occurred.'); // Display error message
            setMessageType('error');
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
            <h2>Procedure: Add Business</h2>
            {message && (
                <div
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        color: messageType === 'success' ? 'green' : 'red',
                        border: `1px solid ${messageType === 'success' ? 'green' : 'red'}`,
                        borderRadius: '5px',
                        backgroundColor: messageType === 'success' ? '#eaffea' : '#ffeaea',
                    }}
                >
                    {message}
                </div>
            )}
            <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <label>long_name</label>
                    <input
                        type="text"
                        name="long_name"
                        value={formData.long_name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>rating</label>
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    />
                </div>
                <div>
                    <label>spent</label>
                    <input
                        type="number"
                        name="spent"
                        value={formData.spent}
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

export default AddBusiness;
