import React from 'react';
import { Link } from 'react-router-dom';

const MainScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Business Supply System</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
                {/* Row 1 */}
                <Link to="/employee">
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
                        Employee
                    </button>
                </Link>
                <Link to="/business">
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
                        Business
                    </button>
                </Link>
                <Link to="/driver">
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
                        Driver
                    </button>
                </Link>

                {/* Row 2 */}
                <Link to="/product">
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
                        Product
                    </button>
                </Link>
                <Link to="/service">
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
                        Service
                    </button>
                </Link>
                <Link to="/van">
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
                        Van
                    </button>
                </Link>

                {/* Row 3 */}
                <Link to="/views">
                    <button
                        style={{
                            padding: '15px 20px',
                            backgroundColor: '#607D8B',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Views
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MainScreen;
