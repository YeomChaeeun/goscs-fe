import {styled} from "@mui/material/styles";
import {Box, Container, Typography} from "@mui/material";
import {Component} from "react";


const FeaturesSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 4),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: 'white',
    borderRadius: theme.spacing(2),
    margin: theme.spacing(2),
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

class FeatureSection extends Component {
    render() {
        return <FeaturesSection>
            <Typography variant="h4" gutterBottom>
                How to enhance your investments at FinFit
            </Typography>
            <Container maxWidth="md" sx={{mt: 4}}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr"
                    },
                    gap: 3
                }}>
                    <FeatureCard>
                        <Typography variant="h6" gutterBottom>
                            IPO Access
                        </Typography>
                        <Typography>
                            Be the first in line for companies going public at the IPO price.
                        </Typography>
                    </FeatureCard>
                    <FeatureCard>
                        <Typography variant="h6" gutterBottom>
                            Recurring Investment
                        </Typography>
                        <Typography>
                            Add to your wealth on a consistent basis, even when you forget to.
                        </Typography>
                    </FeatureCard>
                    <FeatureCard>
                        <Typography variant="h6" gutterBottom>
                            Fractional Shares
                        </Typography>
                        <Typography>
                            Own shares in the companies you love for as little as $1.
                        </Typography>
                    </FeatureCard>
                </Box>
            </Container>
        </FeaturesSection>;
    }
}

export default FeatureSection;