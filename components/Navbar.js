import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, useMediaQuery } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/AirplaneTicket';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../app/page.module.css'
import Search from './SearchBar';

const Navbar = () => {

    const media = useMediaQuery('(max-width : 1200px)');

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static' className={styles.navbar}>
            <Toolbar className={styles.navParent}>
                {/* <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick}>
                    <CatchingPokemonIcon />
                </IconButton> */}
                {/* <Menu
                    id='menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Schedule</MenuItem>
                    <MenuItem onClick={handleClose}>Event-types</MenuItem>
                </Menu> */}

                <div className={styles.logoContainer}>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick}>
                    <CatchingPokemonIcon />
                </IconButton>
                    <Typography variant='h6' component='div' className={styles.logo}>Ticket App</Typography>

                </div>

                <div className={styles.content}>

                    {media ? (
                        <Menu
                            id='menu'
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Schedule</MenuItem>
                            <MenuItem onClick={handleClose}>Event-types</MenuItem>
                        </Menu>)

                        :

                        (
                            <ul>
                                <li className={styles.feature}><a>Schedule</a></li>
                                <li className={styles.feature}><a>Event-typesssss</a></li>
                            </ul>
                        )}


                    <button className={styles.navbtn}>Add My Event</button>
                </div>

                <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick} className={styles.menuIcon}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Search />
        </AppBar>
    )
}

export default Navbar;
