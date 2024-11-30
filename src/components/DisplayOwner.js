import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayOwnerView = () => {
    const [owners, setOwners] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_owner_view');
                setOwners(response.data);
            } catch (err) {
                console.error('Error fetching owner data:', err.message);
            }
        };
        fetchOwners();
    }, []);

    const handleBack = () => {
        navigate('/views'); // Navigate back to Views screen
    };

    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '20px auto',
                fontFamily: 'Arial, sans-serif',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <h2>View: Owner</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>username</th>
                        <th style={tableHeaderStyle}>first_name</th>
                        <th style={tableHeaderStyle}>last_name</th>
                        <th style={tableHeaderStyle}>address</th>
                        <th style={tableHeaderStyle}>num_businesses</th>
                        <th style={tableHeaderStyle}>num_places</th>
                        <th style={tableHeaderStyle}>highs</th>
                        <th style={tableHeaderStyle}>lows</th>
                        <th style={tableHeaderStyle}>debt</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map((owner, index) => (
                        <tr key={index}>
                             <td style={tableCellStyle}>{owner.username}</td>
                             <td style={tableCellStyle}>{owner.first_name}</td>
                             <td style={tableCellStyle}>{owner.last_name}</td>
                             <td style={tableCellStyle}>{owner.address}</td>
                             <td style={tableCellStyle}>{owner.num_businesses}</td>
                             <td style={tableCellStyle}>{owner.num_places}</td>
                             <td style={tableCellStyle}>{owner.highs}</td>
                             <td style={tableCellStyle}>{owner.lows}</td>
                             <td style={tableCellStyle}>{owner.debt}</td>
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

export default DisplayOwnerView;
