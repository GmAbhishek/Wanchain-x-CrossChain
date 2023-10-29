import React from 'react'

export default function Navbar() {
  const navStyle = {
    backgroundColor: '#FFC0CB', // Light Pink
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    marginLeft: '10px',
    color: '#FF69B4', // Hot Pink
    fontSize: '2rem',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '8px',
    borderRadius: '20px',
    color: '#FF1493', // Deep Pink
    fontSize: '1.5rem',
    border: '2px solid #FF69B4', // Hot Pink
    backgroundColor: '#FFC0CB', // Light Pink
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FF69B4', // Hot Pink (on hover)
  };

  return (
    <div style={navStyle}>
      <div style={titleStyle}>Wanchain-x-CrossChain</div>
      <button style={buttonStyle} onMouseEnter={() => buttonStyle.backgroundColor = buttonHoverStyle.backgroundColor} onMouseLeave={() => buttonStyle.backgroundColor = navStyle.backgroundColor}>
        Connect
      </button>
    </div>
  );
}
