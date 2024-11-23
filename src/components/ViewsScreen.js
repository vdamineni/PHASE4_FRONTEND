import React from 'react';
import { Link } from 'react-router-dom';

const ViewsScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Views Screen</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/views/display-owner">
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
                        Display Owner
                    </button>
                </Link>
                <Link to="/views/display-employee">
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
                        Display Employee
                    </button>
                </Link>
                <Link to="/views/display-driver">
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
                        Display Driver
                    </button>
                </Link>
                <Link to="/views/display-location">
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
                        Display Location
                    </button>
                </Link>
                <Link to="/views/display-product">
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
                        Display Product
                    </button>
                </Link>
                <Link to="/views/display-service">
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
                        Display Service
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

export default ViewsScreen;
