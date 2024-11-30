import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RemoveDriver = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [serverMessage, setServerMessage] = useState({ text: '', type: '' }); // For success or error messages
    const navigate = useNavigate();

    // Fetch the list of drivers when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/drivers');
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching drivers:', err.message);
                setServerMessage({ text: 'Failed to load drivers.', type: 'error' });
            }
        };
        fetchUsers();
    }, []);

    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/remove_driver_role', { username });
            setServerMessage({ text: response.data.message || 'Driver role removed successfully!', type: 'success' });
            setTimeout(() => navigate('/driver'), 2000); // Navigate back after 2 seconds
        } catch (err) {
            console.error('Error removing driver role:', err.message);
            setServerMessage({
                text: err.response?.data || 'An error occurred while removing the driver role.',
                type: 'error',
            });
        }
    };

    const handleCancel = () => {
        navigate('/driver'); // Navigate back to Driver screen
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
            <h2>Procedure: Remove Driver Role</h2>

            {serverMessage.text && (
                <div
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        color: serverMessage.type === 'success' ? 'green' : 'red',
                        border: `1px solid ${serverMessage.type === 'success' ? 'green' : 'red'}`,
                        borderRadius: '5px',
                        backgroundColor: serverMessage.type === 'success' ? '#eaffea' : '#ffeaea',
                    }}
                >
                    {serverMessage.text}
                </div>
            )}

            <form onSubmit={handleRemove} style={{ display: 'grid', gap: '20px' }}>
                <div>
                    <label>Username</label>
                    <select
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                    >
                        <option value="">Select a username</option>
                        {users.map((user) => (
                            <option key={user.username} value={user.username}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            backgroundColor: '#FF5733',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        Remove
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RemoveDriver;
