import React from 'react';
import { Link } from 'react-router-dom';

const DriverScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Driver Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '400px', margin: '0 auto' }}>
                <Link to="/driver/add-driver">
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
                        Add Driver
                    </button>
                </Link>
                <Link to="/driver/remove-driver">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#FF5722',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Remove Driver
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

export default DriverScreen;
