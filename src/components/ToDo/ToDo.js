import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Grid , Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(42),
        },
    },
}));

const ToDo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                component={Box}
            >
                <Paper>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default ToDo;
