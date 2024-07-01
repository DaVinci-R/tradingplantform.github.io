import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HistoryCharts = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    历史基差预测
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is where historical Power BI charts will be displayed.
                </Typography>
                {/* Embed Power BI charts here */}
                <iframe title="历史基差预测与实际对比" 
                width="1000" 
                height="800" 
                src="https://app.powerbi.com/view?r=eyJrIjoiZGQ0ZWM1YTQtYTBmZS00NjQxLTljNmYtNDVmNTliMzc2MWU5IiwidCI6IjI2Y2NmYmI0LTc4MTYtNGY0My1hMjM2LWI2ZmZmYjg0Y2ZjMSIsImMiOjEwfQ%3D%3D" 
                frameborder="0" 
                allowFullScreen="true"
                ></iframe>
            </CardContent>
        </Card>
    );
}

export default HistoryCharts;
