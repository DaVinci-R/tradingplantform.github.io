import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Trading Platform
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/today">Today's Chart</Button>
                <Button color="inherit" component={Link} to="/history">Historical Charts</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
