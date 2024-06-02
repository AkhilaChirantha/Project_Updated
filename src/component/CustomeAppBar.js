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
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import "@fontsource/aclonica";


const pages = [
  { title: 'About Us', navigate: "/about" },
  { title: 'Tutoring', navigate: "/tutoring" },
  { title: 'Blog', navigate: "/blog" },
  { title: 'Contact', navigate: "/contact" },
  { title: 'Join with Us', navigate: "/contact" }
];


function ResponsiveAppBar() {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserNavMenu = () => {
    setAnchorElNav(null);
  };

  const toNavigate = () =>
    navigate("/")

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', border: '6px solid #EEEFF4' }}>
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""

            sx={{

              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Aclonica',
              fontWeight: 700,
              justifyContent: 'center',
              letterSpacing: '.3rem',
              paddingTop: '2px',
              color: 'lime',
              textDecoration: 'none',
              border: '8px double',
              width: '160px',
            }}

            onClick={() => toNavigate()}
          >

            Y N A P
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => navigate(page.navigate)}>
                  <Typography textAlign="center" >{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Aclonica',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}


          >
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigate(page.navigate)}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '400', fontFamily: 'Aclonica' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;
