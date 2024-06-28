import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodayChart from './components/TodayChart';
import HistoryCharts from './components/HistoryCharts';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
                    <Navbar />
                    <Container style={{ flex: 1, padding: 0, margin: 0, width: '100%' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/today" element={<TodayChart />} />
                            <Route path="/history" element={<HistoryCharts />} />
                        </Routes>
                    </Container>
                </div>
            </Router>
        </ThemeProvider>
    );
}

const Home = () => (
    <div>
        <h1>Welcome to My Trading Platform</h1>
    </div>
);

export default App;
