import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";
import {Component} from "react";

const TradeSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(4),
    backgroundImage: 'linear-gradient(45deg, #FF6B6B, #c53b2f)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

class InvestSection extends Component {
    render() {
        return <TradeSection>
            <Typography variant="h3" gutterBottom>
                Trade on your time and your terms
            </Typography>
            <Typography variant="h6" sx={{maxWidth: 600}}>
                We have 24/7 support. Get real time access to stocks, ETFs and other options.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{mt: 4, alignSelf: "flex-start"}}
            >
                Get Started
            </Button>
        </TradeSection>;
    }
}

export default InvestSection;