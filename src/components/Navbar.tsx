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
      // 경로가 'Home'인 경우 '/'로 변경, 그 외에는 소문자로 변환
      const navigatePath = path === "Home" ? "/" : `/${path.toLowerCase()}`;
      navigate(navigatePath);
    }
  };

  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        borderBottom: "1px solid",
        borderImage:
          "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) 1",
      })}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*로고*/}
          <Box
            component="img"
            src={logoImage} // 이미지 경로 지정
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              mb: "1.2rem",
              height: "40px", // 원하는 크기로 조정
            }}
            alt="logo"
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
            src={logoImage} // 이미지 경로 지정
            sx={{
              maxWidth: "100px",
              maxHeight: "40px",
              display: { xs: "block", md: "none" }, // flex 대신 block 사용
              margin: "0 auto", // 가운데 정렬을 위해 추가
              mb: "1.2rem",
            }}
            alt="logo"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
