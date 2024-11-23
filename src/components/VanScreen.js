import React from 'react';
import { Link } from 'react-router-dom';

const VanScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Van Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/van/add-van">
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
                        Add Van
                    </button>
                </Link>
                <Link to="/van/takeover-van">
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
                        Takeover Van
                    </button>
                </Link>
                <Link to="/van/load-van">
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
                        Load Van
                    </button>
                </Link>
                <Link to="/van/refuel-van">
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
                        Refuel Van
                    </button>
                </Link>
                <Link to="/van/drive-van">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#9C27B0',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Drive Van
                    </button>
                </Link>
                <Link to="/van/remove-van">
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
                        Remove Van
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

export default VanScreen;
