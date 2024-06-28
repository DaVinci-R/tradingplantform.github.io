import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HistoryCharts = () => {
    const powerBIHtml = `
        <iframe 
            width="100%" 
            height="100%" 
            src="YOUR_POWER_BI_EMBED_URL_HISTORY" 
            frameborder="0" 
            allowFullScreen="true">
        </iframe>
    `;

    return (
        <Card style={{ height: '100%', width: '100%' }}>
            <CardContent style={{ height: '100%', width: '100%' }}>
                <Typography variant="h5" component="div">
                    Historical Charts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is where historical Power BI charts will be displayed.
                </Typography>
                <div style={{ height: '100%', width: '100%' }} dangerouslySetInnerHTML={{ __html: powerBIHtml }} />
            </CardContent>
        </Card>
    );
}

export default HistoryCharts;
