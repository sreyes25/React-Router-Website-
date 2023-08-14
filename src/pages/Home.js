
import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  footer: {
    marginTop: '20px',
    borderTop: '1px solid #ccc',
    padding: '10px 0',
  },
};

export default function Home() {
  const handleEstimateClick = () => {
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div style={styles.container}>
      <div >
        <h1>Infiniker Construction</h1>
      </div>

      <p>For all your large and small home improvement needs</p>
      <button style={styles.button} onClick={handleEstimateClick}>
        Request Estimate
      </button>
      <img src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construction Image" />

      <div style={styles.footer}>
        <p>&copy; 2023 Infiniker Construction</p>
        <p>Email: contact@infiniker.com | Phone: +1 (631) 569-1944</p>
      </div>
    </div>
  );
}