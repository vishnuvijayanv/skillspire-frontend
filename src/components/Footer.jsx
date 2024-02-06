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
    backgroundColor: '#00A7AC',
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
        <h3 >About Us</h3>
        <p className='text-dark me-3' style={{textAlign:'justify'}}>
        Our platform connects skilled professionals with diverse expertise to clients seeking top-notch services. Whether you're a freelancer looking to showcase your talents or a business in need of specialized skills, Skillspire is the bridge that brings talent and projects together
        </p>
      </div>
      <div style={sectionStyle}>
        <h3 >Contact Us</h3>
        <p className='text-dark'>Address: 123 Main St, Cityville</p>
        <p className='text-dark'>Email: skillspire@gmail.com</p>
        <p className='text-dark'>Phone: (555) 123-4567</p>
      </div>
      <div style={sectionStyle}>
        <h3>Social Media</h3>
        <div className='d-flex flex-column'>
          <a href='' style={{textDecoration:'none'}} className='text-dark mb-2'>Instagram</a>
          <a href='' style={{textDecoration:'none'}} className='text-dark mb-2'>Twitter</a>
          <a href='' style={{textDecoration:'none'}} className='text-dark mb-2'>Facebook</a>
          <a href='' style={{textDecoration:'none'}} className='text-dark mb-2'>Linkedin</a>
  
        </div>
      </div>
      <div style={sectionStyle}>
        <h3>Newsletter</h3>
        <p className='text-dark'>Subscribe to our newsletter for updates and promotions.</p>
        <form className='d-flex' onSubmit={handleSubscribe}>
          <input type="email" className='form-control border rounded' placeholder="Enter your email" required />
          <button type="submit" className='btn bg-light ms-2'><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
