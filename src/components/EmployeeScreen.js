import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeScreen = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Employee Screen</h1>
            <Link to="/employee/add">
                <button
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#f0ad4e',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Add Employee
                </button>
            </Link>
            <Link to="/employee/remove">
            <button
                style={{
                    padding: '10px 20px',
                    margin: '10px',
                    backgroundColor: '#d9534f',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
                // onClick={() => alert('Fire Employee functionality not implemented yet')}
            >
                Fire Employee
            </button>
            </Link>
            <Link to="/employee/hire">
            <button
                style={{
                    padding: '10px 20px',
                    margin: '10px',
                    backgroundColor: '#5bc0de',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
               // onClick={() => alert('Hire Employee functionality not implemented yet')}
            >
                Hire Employee
            </button>
            </Link>
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

export default EmployeeScreen;
