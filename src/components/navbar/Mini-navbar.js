import React from "react"
import { Toolbar, Box, IconButton, Grid } from "@material-ui/core"
import { use_mini_nav_customization } from "../../assets/css/all_navbar_styles/Mini_Navbar_Style"
import { Typography } from "@material-ui/core"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const Mini_navbar = (props) => {

    const classes = use_mini_nav_customization();

    return (
        <>
            <Grid container >
                <Grid item xs={12}>

                    <Toolbar className={classes.mini_nav_customization} style={props.myValue ? { backgroundColor: "#6E7684" } : { backdropFilter: "blur(4px)" }} >

                        <Box className={classes.box_container}>

                            <Box className={classes.mail_phone_container_customization}>

                                <Box className={classes.mail_part_customization}>
                                    <MailOutlineIcon
                                        fontSize="small"
                                        className={classes.icon_style}
                                    />

                                    <Typography >
                                        rotorsmail@email.com
                                    </Typography>
                                </Box>

                                <Box className={classes.phone_part_customization}>
                                    <PhoneEnabledIcon
                                        fontSize="small"
                                        className={classes.icon_style}
                                    />

                                    <Typography>
                                        +1-202-555-0156
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className={classes.social_links_customization}>
                                <Box>
                                    <IconButton className={classes.social_link_color}>
                                        <FacebookIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton className={classes.social_link_color}>
                                        <InstagramIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton className={classes.social_link_color}>
                                        <TwitterIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton className={classes.social_link_color}>
                                        <YouTubeIcon
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Grid>
            </Grid>

        </>
    )
}
