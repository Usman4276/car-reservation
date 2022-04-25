import React from "react"
import { use_blog_style } from "../assets/css/blog_style/Single_Blog_Style";
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { IconButton } from "@material-ui/core";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Checkbox from '@material-ui/core/Checkbox';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';
import { Carousel, CarouselItem } from 'react-bootstrap';


const Blog = () => {

    const classes = use_blog_style();

    return (
        <>
            {/* ---Header--- */}

            <Mini_navbar myValue="true" />
            <Navbar />

            {/* ---Banner--- */}

            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.img_style}>
                        <StaticImage
                            src="../assets/images/Short Banner 7.png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>blog</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ----BreadCrumbs--- */}

            <MyBreadcrumbs value={11} />

            {/* ----main heading---- */}

            <Grid container className={classes.main_heading}>
                <Grid item xs={12}>
                    <Box className={classes.box_1}>
                        <Typography variant="h4" className={classes.typo_1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Box>
                </Grid>

                {/* ----image---- */}

                <Grid item xs={12}>
                    <Box style={{ width: "50vw", margin: "auto" }}>
                        <StaticImage
                            src="../assets/images/Mask Group 9.png"
                            alt="img"
                            placeholder="blurred"
                            style={{ marginTop: "1rem" }}
                        />
                    </Box>
                </Grid>

                {/* ----sub heading---- */}

                <Grid item xs={12}>
                    <Box className={classes.box_2}>
                        <Typography variant="subtitle1" className={classes.typo_2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti voluptate officia! Iusto ratione necessitatibus pariatur distinctio cum officiis magni voluptatem est doloremque ab obcaecati in fuga, quam deserunt perspiciatis.
                        </Typography>
                    </Box>
                    <Box className={classes.box_2}>
                        <Typography variant="subtitle2" className={classes.body_text1}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti voluptate officia! Iusto ratione necessitatibus pariatur distinctio cum officiis magni voluptatem est doloremque ab obcaecati in fuga, quam deserunt perspiciatis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptate, aperiam, sed commodi quae nesciunt dolorum inventore cum corporis, culpa ratione quibusdam blanditiis obcaecati sequi? Quasi modi necessitatibus nihil distinctio.
                            Sapiente accusamus ullam tempore nesciunt quasi facere voluptate sunt hic laudantium est, officia, quod fuga molestias. Mollitia ipsum atque possimus praesentium molestias aliquam, accusamus modi quis, doloremque, qui deserunt perferendis!
                        </Typography>
                    </Box>
                    <Box className={classes.box_2}>
                        <Typography variant="subtitle2" className={classes.body_text2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti voluptate officia! Iusto ratione necessitatibus pariatur distinctio cum officiis magni voluptatem est doloremque ab obcaecati in fuga, quam deserunt perspiciatis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                        </Typography>
                    </Box>

                    {/* ----quotation section---- */}

                    <Box style={{
                        textAlign: "center",
                        marginTop: "3rem"
                    }}>
                        <Typography>
                            <StaticImage
                                src="../assets/images/SVG_s/pointer.svg"
                                alt="pointer img"
                                placeholder="blurred"
                            />
                        </Typography>
                    </Box>
                    <Box className={classes.quote_container}>
                        <Box className={classes.quote_body} >
                            <Box style={{ fontSize: "25px" }}>
                                <blockquote>
                                    <span style={{ fontSize: "3rem" }}>&#8220;</span>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum accusantium aperiam quidem veniam, ullam animi officia, esse odio quae ex necessitatibus illo cumque ratione recusandae quasi repellat accusamus dignissimos.
                                    <span style={{ fontSize: "3rem" }}>&#8221;</span>
                                </blockquote>
                            </Box>
                            <Box style={{ display: "flex", justifyContent: "center", textTransform: "capitalize" }}>
                                <caption>-michael schumacher-</caption>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{
                        textAlign: "center",
                        marginTop: "1rem"
                    }}>
                        <Typography>
                            <StaticImage
                                src="../assets/images/SVG_s/pointer.svg"
                                alt="pointer img"
                                placeholder="blurred"
                            />
                        </Typography>
                    </Box>

                    <Box className={classes.box_2}>
                        <Typography variant="subtitle2" className={classes.body_text2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti voluptate officia! Iusto ratione necessitatibus pariatur distinctio cum officiis magni voluptatem est doloremque ab obcaecati in fuga, quam deserunt perspiciatis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                        </Typography>
                    </Box>
                </Grid>

                {/* ----social icons---- */}

                <Grid item xs={12}>
                    <Box style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem", padding: "2rem" }}>
                        <Box style={{
                            width: "8%",
                            display: "flex",
                            justifyContent: "space-around",
                        }}>

                            <IconButton>
                                <FacebookIcon
                                    fontSize="small"
                                    style={{ filter: "invert(1)", color: "aliceblue" }}
                                />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon
                                    fontSize="small"
                                    style={{ filter: "invert(1)", color: "aliceblue" }}
                                />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon
                                    fontSize="small"
                                    style={{ filter: "invert(1)", color: "aliceblue" }}
                                />
                            </IconButton>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "space-between", width: "10%", textTransform: "capitalize" }}>
                            <ChatBubbleIcon
                                fontSize="small"
                            />
                            <Typography style={{ fontSize: "14px" }}>no comments</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* ---hr tag--- */}

            <hr style={{ marginLeft: "19rem", width: "56%", marginTop: "4rem" }} />

            {/* ----carousel---- */}

            <Grid item xs={12}>
                <Carousel interval={2000} indicators={false} style={{ marginTop: "5rem" }}>
                    <CarouselItem>
                        <Box style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                prevoius
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="h2" style={{ display: "flex", alignItems: "center", color: "gray" }}>
                                |
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                next
                            </Typography>
                        </Box>
                    </CarouselItem>
                    <CarouselItem>
                        <Box style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                prevoius
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="h2" style={{ display: "flex", alignItems: "center", color: "gray" }}>
                                |
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                next
                            </Typography>
                        </Box>
                    </CarouselItem>
                    <CarouselItem>
                        <Box style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                prevoius
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="h2" style={{ display: "flex", alignItems: "center", color: "gray" }}>
                                |
                            </Typography>
                            <Typography style={{ width: "32%", padding: "2rem", fontWeight: "bold" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="body1" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "11px", color: "gray" }}>
                                next
                            </Typography>
                        </Box>
                    </CarouselItem>
                </Carousel>
            </Grid>

            {/* ---hr tag--- */}

            <hr style={{ marginLeft: "19rem", width: "56%", marginTop: "4rem" }} />

            {/* ---Form--- */}

            <Grid container>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h4" style={{ textTransform: "capitalize", marginTop: "4rem", marginBottom: "2rem", width: "40%" }}>
                        leave a reply
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{ textAlign: "center", marginBottom: "1rem", marginTop: "1rem" }}>
                    <Typography variant="body1" style={{ color: "#969696" }}>
                        Your email address will not be published. Required fields are marked *
                    </Typography>
                </Grid>

                {/* ----form fields---- */}

                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Box className={classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Your Name" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Box className={classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Email" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Box style={{ padding: "10px", width: "40vw" }}>
                        <TextField type="text" variant="outlined" placeholder="Leave your reply" className={classes.text_style1} />
                    </Box>

                </Grid>

                {/* ----check box---- */}

                <Grid item xs={12} style={{ marginTop: "1rem" }}>
                    <Box style={{ display: "flex" }}>
                        <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                            <Checkbox
                                color="secondary"
                                style={{ marginLeft: "25rem" }}
                            />
                        </Box>
                        <Box style={{ display: "flex", alignItems: "center", fontSize: "10px" }}>
                            <Typography style={{ fontSize: "14px", color: "#969696" }}>Save my name, email, and website in this browser for the next time I comment</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* ----button---- */}

                <Grid item xs={12}>
                    <Box className={classes.btn_style}>
                        <Button variant="contained" color="secondary" className={classes.btn_width} >send a message <TrendingFlatIcon fontSize="medium" /></Button>
                    </Box>
                </Grid>
            </Grid>

            {/* ----Footer section---- */}

            <Sub_Footer />
            <Main_Footer />
        </>
    )
}
export default Blog;
