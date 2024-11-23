import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayDriverView = () => {
    const [drivers, setDrivers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_driver_view');
                setDrivers(response.data);
            } catch (err) {
                console.error('Error fetching driver data:', err.message);
            }
        };
        fetchDrivers();
    }, []);

    const handleBack = () => {
        navigate('/views'); // Navigate back to Views screen
    };

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>View: Driver</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>DriverUsername</th>
                        <th style={tableHeaderStyle}>LicenseIdentifier</th>
                        <th style={tableHeaderStyle}>DrivingExperience</th>
                        <th style={tableHeaderStyle}>NumberOfVansControlled</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{driver.DriverUsername}</td>
                            <td style={tableCellStyle}>{driver.LicenseIdentifier}</td>
                            <td style={tableCellStyle}>{driver.DrivingExperience}</td>
                            <td style={tableCellStyle}>{driver.NumberOfVansControlled}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleBack}
                style={{
                    backgroundColor: '#ccc',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    display: 'block',
                    margin: '0 auto',
                }}
            >
                Back
            </button>
        </div>
    );
};

const tableHeaderStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
};

const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
};

export default DisplayDriverView;
