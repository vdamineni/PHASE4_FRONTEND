import React from 'react';
import { Link } from 'react-router-dom';

const ServiceScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Service Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '400px', margin: '0 auto' }}>
                <Link to="/service/add-service">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add Service
                    </button>
                </Link>
                <Link to="/service/manage-service">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#FF9800',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Manage Service
                    </button>
                </Link>
                <Link to="/service/add-location">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#3F51B5',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add Location
                    </button>
                </Link>
                <Link to="/service/add-worker">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#F44336',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add Worker
                    </button>
                </Link>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/">
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#ccc',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Back to Main Screen
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceScreen;
