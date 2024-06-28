import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TodayChart = () => {
    const powerBIHtml = `
    <iframe
     title="XGboostAA_SM预测" 
     width="100%" 
     height="100%" 
     src="https://app.powerbi.com/view?r=eyJrIjoiNDZlNjdmZTctYWM4NC00MTY5LWE1Y2MtNDM2NzI5MGMyNTg1IiwidCI6IjI2Y2NmYmI0LTc4MTYtNGY0My1hMjM2LWI2ZmZmYjg0Y2ZjMSIsImMiOjEwfQ%3D%3D" 
     frameborder="0" 
     allowFullScreen="true">
     </iframe>
`;

    return (
        <Card style={{ height: '100%', width: '100%' }}>
            <CardContent style={{ height: '100%', width: '100%' }}>
                <Typography variant="h5" component="div">
                    Today's Chart
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is where today's Power BI chart will be displayed.
                </Typography>
                <div style={{ height: '100%', width: '100%' }} dangerouslySetInnerHTML={{ __html: powerBIHtml }} />
            </CardContent>
        </Card>
    );
}

export default TodayChart;
