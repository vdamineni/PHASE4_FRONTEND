import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TakeOverVan = () => {
    const [formData, setFormData] = useState({
        username: '',
        id: '',
        tag: '',
    });

    const [usernames, setUsernames] = useState([]); // Dropdown options for usernames
    const [ids, setIds] = useState([]); // Dropdown options for van IDs
    const [message, setMessage] = useState(null); // Feedback message
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    // Fetch dropdown options on component mount
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const usernameResponse = await axios.get('http://localhost:3001/get_usernames'); // Backend endpoint for usernames
                const idResponse = await axios.get('http://localhost:3001/get_van_ids'); // Backend endpoint for van IDs
                setUsernames(usernameResponse.data);
                setIds(idResponse.data);
            } catch (err) {
                console.error('Error fetching dropdown data:', err.message);
                setMessage('Failed to fetch dropdown data.');
                setMessageType('error');
            }
        };
        fetchDropdownData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setFormData({
            username: '',
            id: '',
            tag: '',
        });
        setMessage(null); // Clear feedback message
        navigate('/van'); // Navigate back to the Van screen
    };

    const handleAdd = async (e) => {
        e.preventDefault();
         const dataToSubmit = {};
    for (const key in formData) {
        dataToSubmit[key] = formData[key] === "" ? null : formData[key];
    }
        try {
            const response = await axios.post('http://localhost:3001/takeover_van', dataToSubmit);
            setMessage(response.data); // Show success message
            setMessageType('success');
            setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds
                setFormData({
            username: '',
            id: '',
            tag: '',
        });
            }, 3000);
        } catch (err) {
            console.error('Error taking over van:', err.message);
            setMessage(err.response?.data || 'An unexpected error occurred.');
            setMessageType('error');
            setTimeout(() => {
                setMessage(null); // Clear message after 3 seconds    
                setMessageType(' ');
            }, 3000);
        }
    };

    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>Procedure: Take Over Van</h2>
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
                    <label>Username</label>
                    <select
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Username</option>
                        {usernames.map((username) => (
                            <option key={username} value={username}>
                                {username}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>ID</label>
                    <select
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select Van ID</option>
                        {ids.map((id) => (
                            <option key={id} value={id}>
                                {id}
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

export default TakeOverVan;