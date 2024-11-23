import React from 'react';
import { Link } from 'react-router-dom';

const BusinessScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Business Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/business/add-owner">
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
                        Add Owner
                    </button>
                </Link>
                <Link to="/business/add-business">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Add Business
                    </button>
                </Link>
                <Link to="/business/start-funding">
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
                        Start Funding
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

export default BusinessScreen;
