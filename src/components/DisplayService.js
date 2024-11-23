import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayServiceView = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:3001/display_service_view');
                setServices(response.data);
            } catch (err) {
                console.error('Error fetching service data:', err.message);
            }
        };
        fetchServices();
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
            <h2>View: Services</h2>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Id</th>
                        <th style={tableHeaderStyle}>Long_name</th>
                        <th style={tableHeaderStyle}>Home_base</th>
                        <th style={tableHeaderStyle}>Manager</th>
                        <th style={tableHeaderStyle}>TotalSales</th>
                        <th style={tableHeaderStyle}>TotalProducts</th>
                        <th style={tableHeaderStyle}>TotalCost</th>
                        <th style={tableHeaderStyle}>Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{service.id}</td>
                            <td style={tableCellStyle}>{service.long_name}</td>
                            <td style={tableCellStyle}>{service.home_base}</td>
                            <td style={tableCellStyle}>{service.manager}</td>
                            <td style={tableCellStyle}>{service.totalsales}</td>
                            <td style={tableCellStyle}>{service.totalproducts}</td>
                            <td style={tableCellStyle}>{service.totalcost}</td>
                            <td style={tableCellStyle}>{service.totalweight}</td>
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

export default DisplayServiceView;
