import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert('Subscribed!');
  };

  const footerStyle = {
    bottom: 0,
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: isSmallScreen ? 'center' : 'left',
    width: '100%',
    marginTop:'200px'
    
  };
  
  const sectionStyle = {
    flex: 1,
    marginBottom: isSmallScreen ? '10px' : '0',
  };

  return (
    <div style={footerStyle}>
      <div style={sectionStyle}>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div style={sectionStyle}>
        <h3>Contact Us</h3>
        <p>Address: 123 Main St, Cityville</p>
        <p>Email: info@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div style={sectionStyle}>
        <h3>Custom Section</h3>
        <p>This is a custom section. Feel free to add whatever content you like here.</p>
      </div>
      <div style={sectionStyle}>
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter for updates and promotions.</p>
        <form className='d-flex' onSubmit={handleSubscribe}>
          <input type="email" className='form-control border rounded' placeholder="Enter your email" required />
          <button type="submit" className='btn bg-light ms-2'><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
