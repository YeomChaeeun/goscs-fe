import {Component} from "react";
import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const HeroSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(4),
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
}));

class MainSection extends Component<{ onClick: () => void | Promise<void> }> {
    render() {
        return <HeroSection>
            <Typography variant="h3" gutterBottom>
                Personalized Investment Solutions
            </Typography>
            <Typography variant="h5" gutterBottom sx={{maxWidth: 600}}>
                Easy and Fast
            </Typography>
            <Button
                variant="contained"
                size="large"
                sx={{mt: 4}}
                onClick={this.props.onClick}
            >
                Start Now
            </Button>
        </HeroSection>;
    }
}

export default MainSection;