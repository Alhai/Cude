import { AppBar, Box, Link, Toolbar } from "@mui/material";
import './footer-style.css';

const Footer = () => {
    return (
  
        <AppBar component="footer" position="static" sx={{ bgcolor: 'black', width: '100%'}}>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            Contact us
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            Legal information
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            About us    
                        </Link>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            Instagram
                        </Link>
                        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            Twitter
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footerLink" sx={{ marginRight: '1rem', color: 'white', fontFamily: 'League Spartan, sans-serif' }}>
                            Facebook
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
