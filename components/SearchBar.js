import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../app/page.module.css'


const Search = () => {
    return(
        <AppBar position='static' className={styles.navbar}>
            <Toolbar>
            <InputBase
                    placeholder='Search…'
                    inputProps={{ 'aria-label': 'search' }}
                    className={styles.navsearch}
                />
                <IconButton type='submit' aria-label='search' className={styles.subnav}>
                    <SearchIcon className={styles.subnav} />
                </IconButton>
            </Toolbar>
            <button className={styles.searchBtn}>Search</button>
        </AppBar>
    );
}

export default Search;