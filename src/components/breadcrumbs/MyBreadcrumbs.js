import React from 'react';
import { window } from 'browser-monads';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { use_breadcrumb_style } from '../../assets/css/breadcrumbs/Breadcrumb_style';
import { Link } from 'gatsby';
import { Grid } from '@material-ui/core';

const MyBreadcrumbs = (props) => {

    const classes = use_breadcrumb_style();

    //---Breadcrumbs logic
    let str = '';
    str = window.location.pathname;
    str = str.substr(1, props.value);

    return (
        <>
            {/* ----BreadCrumbs--- */}

            <Grid container>
                <Grid item xs={12} className={classes.grid_12}>
                    <Breadcrumbs className={classes.breadcrumb}>
                        <Link to="/" className={classes.breadcrumb_links_one}>home</Link>
                        <Link className={classes.breadcrumb_links_two}>{str}</Link>
                    </Breadcrumbs>
                </Grid>
            </Grid>
        </>
    )
}
export default MyBreadcrumbs;