import {Box, Button, Container, Typography} from "@mui/material";
import hpImage from "/src/assets/hp.png";
import {useNavigate} from "react-router-dom";

const InvestSection = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        bgcolor: '#1C1C1C',
        color: 'white',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            position: 'relative'
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, zIndex: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                // fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Track Stock Trends
              <br />
              with Interactive Charts
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'grey.300',
                maxWidth: '600px',
                lineHeight: 1.5
              }}
            >
              Explore the performance of stocks with our dynamic trend charts.
              Search for any stock to see its growth trajectory and gain valuable insights. ✨
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: '#E54D2E',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#CA4425'
                }
              }}
              onClick={() => navigate('/investment')}
            >
              GET STARTED
            </Button>
          </Box>
          <Box
            component="img"
            src={hpImage}
            alt="Mobile app interface"
            sx={{
              display: { xs: 'none', md: 'block' },
              maxWidth: '350px',
              height: 'auto',
              borderRadius: '80px 40px 0 0',
              position: 'absolute',
              top: '-20px',
              right: '0',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};


export default InvestSection;
