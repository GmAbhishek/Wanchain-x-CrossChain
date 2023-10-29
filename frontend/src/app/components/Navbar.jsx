import React from 'react'

export default function Navbar() {
  const navStyle = {
    backgroundColor: '#FFC0CB', // Light Pink
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
  };

  const titleStyle = {
    marginLeft: '10px',
    color: '#00000', // Hot Pink
    fontSize: '2rem',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '8px',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius: '20px',
    color: '#00000', // Deep Pink
    fontSize: '1.5rem',
    border: '2px solid #FF69B4', // Hot Pink
    backgroundColor: '#FFC0CB', // Light Pink
    transition: 'background-color 0.3s',
  };

  

  return (
    <div style={navStyle}>
      <div style={titleStyle}>DecenText</div>
      <button style={buttonStyle} >
        Connect
      </button>
    </div>
  );
}
