import { Container, Typography, Box } from '@mui/material';
import logoImage from "/src/assets/logo_finfit_b.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logoImage}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              mb: "1.2rem",
              height: "40px",
              cursor: 'pointer',
            }}
            alt="logo"
          />

          {/* Copyright */}
          <Typography
            variant="body2"
            color="black"
          >
            Copyright © 2025. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;