import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HistoryCharts = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Historical Charts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is where historical Power BI charts will be displayed.
                </Typography>
                {/* Embed Power BI charts here */}
                <iframe
                    title="Historical Power BI Chart"
                    width="1000"
                    height="800"
                    src="YOUR_POWER_BI_EMBED_URL_HISTORY"
                    frameBorder="0"
                    allowFullScreen="true"
                ></iframe>
            </CardContent>
        </Card>
    );
}

export default HistoryCharts;
