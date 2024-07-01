import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TodayChart = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Today's Chart
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is where today's Power BI chart will be displayed.
                </Typography>
                {/* Embed Power BI chart here */}
                <iframe title="XGboostAA_SM预测" 
                width="1000" 
                height="800" 
                src="https://app.powerbi.com/view?r=eyJrIjoiOTliNTljZWUtMDI3NC00NDUzLWIyNjQtOGI1YzQ5MmQ2MDM0IiwidCI6IjI2Y2NmYmI0LTc4MTYtNGY0My1hMjM2LWI2ZmZmYjg0Y2ZjMSIsImMiOjEwfQ%3D%3D" 
                frameborder="0" 
                allowFullScreen="true"
                ></iframe>
            </CardContent>
        </Card>
    );
}

export default TodayChart;
