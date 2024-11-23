import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayLocationView = () => {
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_location_view');
                setLocations(response.data);
            } catch (err) {
                console.error('Error fetching location data:', err.message);
            }
        };
        fetchLocations();
    }, []);

    const handleBack = () => {
        navigate('/views'); // Navigate back to Views screen
    };

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>View: Location</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>LocationLabel</th>
                        <th style={tableHeaderStyle}>BusinessName</th>
                        <th style={tableHeaderStyle}>xcord</th>
                        <th style={tableHeaderStyle}>ycord</th>
                        <th style={tableHeaderStyle}>TotalCapacity</th>
                        <th style={tableHeaderStyle}>NumberOfVans</th>
                        <th style={tableHeaderStyle}>VanIdentifier</th>
                        <th style={tableHeaderStyle}>RemainingCapacity</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((location, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{location.locationlabel}</td>
                            <td style={tableCellStyle}>{location.businessname}</td>
                            <td style={tableCellStyle}>{location.xcord}</td>
                            <td style={tableCellStyle}>{location.ycord}</td>
                            <td style={tableCellStyle}>{location.totalcapacity}</td>
                            <td style={tableCellStyle}>{location.numberofvans}</td>
                            <td style={tableCellStyle}>{location.vanidentifier}</td>
                            <td style={tableCellStyle}>{location.remainingcapacity}</td>
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

export default DisplayLocationView;
