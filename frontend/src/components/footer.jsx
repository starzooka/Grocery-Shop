import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#1E1E1E',
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            borderTop: '1px solid #ddd', // Add border on top
            marginTop: '50px', // Add top margin for separation
            height: '80px', // Adjust height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.facebook.com" style={{ color: '#3b5998', margin: '0 10px', fontSize: '24px' }}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com" style={{ color: '#C13584', margin: '0 10px', fontSize: '24px' }}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" style={{ color: '#1DA1F2', margin: '0 10px', fontSize: '24px' }}>
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div style={{ fontSize: '14px' }}>
                &copy; 2024 Grocery Store. All rights reserved.
            </div>
        </footer>
    );
};
