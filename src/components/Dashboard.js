import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is the dashboard where you can see the trading data.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Dashboard;
