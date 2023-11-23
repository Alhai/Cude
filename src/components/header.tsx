import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './header-style.css';
import { Box, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar component="header" position="static"  sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <Typography variant="h6" color="inherit" display="flex" flexDirection="row" alignItems="center">
                    <Link to="/" className="headerLink" style={{ textDecoration: 'none', color: 'white' }}>
                        Cude Game
                    </Link>
                    <Box marginLeft="1200px">
                        <Link to="/">
                            <Button sx={{ fontFamily: 'League Spartan, sans-serif', color : 'white' }}>Homepage</Button>
                        </Link>
                    </Box>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
