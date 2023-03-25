import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, useMediaQuery } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/AirplaneTicket';
import MenuRounded from '@mui/icons-material/MenuRounded'
import styles from '../app/page.module.css'
import Search from './SearchBar';

const Navbar = () => {

    const media = useMediaQuery('(max-width : 1000px)');

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


                <div className={styles.logoContainer}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick}>
                        <img alt="" src="/images/ticket2-1.svg" className={styles.logoIcon} />
                    </IconButton>
                    <Typography variant='h6' component='div' className={styles.logo}><b>Ticket App</b></Typography>

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
                                <li className={styles.feature}><a>Event-types</a></li>
                            </ul>
                        )}


                    <button className={styles.navbtn}><b>Add My Event</b></button>

                    <div className={styles.menuContainer}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick} className={styles.menuIcon}>
                    <img src='/images/Location.png'  className={styles.menuBarIcon} />
                    </IconButton>
                    </div>
                </div>

                {/* <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={handleClick} className={styles.menuIcon}>
                    <MenuRounded className={styles.menuBarIcon}/>
                </IconButton> */}
            </Toolbar>
            <Search />
        </AppBar>
    )
}

export default Navbar;
