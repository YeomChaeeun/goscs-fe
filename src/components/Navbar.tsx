import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import logoImage from '/src/assets/logo_finfit_w.png';

const pages = ['Home', 'CheckList', 'Investment'];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string = "") => {
    setAnchorElNav(null);
    if (path) {
      const navigatePath = path === "Home" ? "/" : `/${path.toLowerCase()}`;
      navigate(navigatePath);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'transparent',
        boxShadow: "none",
        borderBottom: "1px solid",
        borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) 1",
        backdropFilter: 'blur(8px)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container
        sx={{
            width: {xs: '100%', md: '80%'},  // 모바일(xs)에서는 100%, 태블릿 이상(md)에서는 80%
            margin: '0 auto'
          }}
        >
        <Toolbar disableGutters>
          {/*로고*/}
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
            onClick={() => navigate('/')}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography sx={{ textAlign: "center", fontSize: "1.2rem" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={logoImage}
            sx={{
              maxWidth: "100px",
              maxHeight: "40px",
              display: { xs: "block", md: "none" },
              margin: "0 auto",
              mb: "1.2rem",
            }}
            alt="logo"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
