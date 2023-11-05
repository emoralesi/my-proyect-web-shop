import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Grid, Grow, Menu, MenuItem, Paper, Popper } from '@mui/material';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import '../../styles/menu.css';
import MenuCategoria from './MenuCategorias';
import MenuSubCategoria from './MenuSubCategoria';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function MenuHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.target)
        setOpen(!open)

    };

    return (
        <Box sx={{ flexGrow: 2, }}>
            <Grid container>
                <Grid lg={2}>
                    <div className='menuButton'>
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, fontSize: 17, whiteSpace: 'normal', width: '140px' }}
                        >
                            Menu de Categorias
                        </Typography>
                        <Popper
                            open={open}
                            anchorEl={anchorEl}
                            style={{ paddingTop: '2%', height: '80vh', width: '100%', zIndex: 1 }}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        'left top',
                                    width: 'auto'
                                }}
                            >
                                <Paper>
                                    <Grid container>
                                        <Grid xs={2}>
                                            <MenuCategoria />
                                        </Grid>
                                        <Grid xs={10}>
                                            <MenuSubCategoria />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grow>
                        )
                        }
                    </Popper>
                </div>
            </Grid>
            <Grid lg={7}>
                <div className='menuSearch'>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
            </Grid>
            <Grid lg={3}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>Inciar Sesion</h4>
                        <IconButton
                            sx={{ float: 'right', fontSize: '5px' }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={() => {

                            }}>

                            <AccountCircleIcon sx={{ fontSize: '40px' }} />
                        </IconButton>

                    </Box>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={null}
                        open={false}
                        onClose={() => {

                        }}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={() => {

                        }}>Logout</MenuItem>
                    </Menu>
                    <Box sx={{ paddingRight: '20px' }}>
                        <IconButton
                            sx={{ float: 'right', fontSize: '5px' }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={() => {

                            }}>

                            <ShoppingCartCheckoutIcon sx={{ fontSize: '40px' }} />
                        </IconButton>
                    </Box>
                </div>
            </Grid>
        </Grid>

        </Box >
    );
}