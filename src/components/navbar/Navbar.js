import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { AppBar, Toolbar, Grid, Tab, Tabs, Box, IconButton } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { use_Nav_Styles } from "../../assets/css/all_navbar_styles/Navbar_Style"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MenuIcon from '@material-ui/icons/Menu';
import { window, document } from 'browser-monads';


export const Navbar = () => {

    const classes = use_Nav_Styles();

    const [Scroll, setScroll] = useState(true);

    const [value, setValue] = React.useState(0);

    const handleChange = (e, indexValue) => {
        setValue(indexValue);
        console.log(indexValue);
    };


    const checkScroll = () => {

        if (window.scrollY > 0) {
            setScroll(false);
        } else {
            setScroll(true);
        }
    }

    window.addEventListener('scroll', checkScroll);

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar className={Scroll ? classes.navbar_margin : classes.navbar_bg_color} >
                        <Toolbar>
                            <Box className={classes.logo}>
                                <StaticImage
                                    src="../../assets/images/logo-1.png"
                                    alt="logo"
                                    placeholder="blurred"
                                />
                            </Box>

                            <Box className={classes.tabs_container}>
                                <Link className={classes.tab} to="/">Home</Link>
                                <Link className={classes.tab} to="/#/">OurCars</Link>
                                <Link className={classes.tab} to="/Revue/">Reviews</Link>
                                <Link className={classes.tab} to="/About/">About</Link>
                                <Link className={classes.tab} to="/Blog/">Blog</Link>
                                <Link className={classes.tab} to="/Contact/">Contact</Link>
                                <Link className={classes.tab} to="/Faq/">FAQ</Link>
                                <Link className={classes.tab} to="/Account/">Account</Link>

                            </Box>

                            <Box className={classes.right_nav_content}>
                                <Box>
                                    <IconButton className={classes.right_nav_content_color}>
                                        <SearchIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton className={classes.right_nav_content_color}>
                                        <ShoppingCartIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <Link to="/Login/">
                                        <IconButton className={classes.right_nav_content_color}>
                                            <PermIdentityIcon
                                                fontSize="small"
                                            />
                                        </IconButton>
                                    </Link>
                                </Box>
                                <Box>
                                    <IconButton className={classes.right_nav_content_color}>
                                        <MenuIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    )
}