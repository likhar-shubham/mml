import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const drawerWidth = '15%';
const items = [
    { name: 'HOME', icon: <HomeIcon />, link: "home" },
    { name: 'CONTACTS', icon: <ContactsIcon />, link: "contacts" },
    { name: 'LOST LEADS', icon: <ThumbDownIcon />, link: "lostleads" },
];

function Navbar(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h3" component="div" sx={{ ml: 2 }}>
                        MML
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        sx={{ mr: 2 }}
                        color="inherit"
                    >
                        <PersonIcon />
                    </IconButton>
                </Box>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={item.name === 'HOME' ? `/` : `/${item.link}`}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText disableTypography
                                            primary={<Typography type="body2" style={{ color: '#395B64' }}>{item.name}</Typography>}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </Box>
    );
}

Navbar.propTypes = {}

export default Navbar
