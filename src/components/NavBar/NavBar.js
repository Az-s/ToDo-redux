import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none'
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        component={Link}
                        to='/todo'
                    >
                        ToDo-List
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        component={Link}
                        to='/counter'
                    >
                        Counter
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;
