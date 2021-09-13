import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Container, CssBaseline, Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import { fetchList, postNewTask , deleteToDoList , deleteTask , fetchPost , addNewTask, keepNewText} from "../../store/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));


const ToDo = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const toDoList = useSelector(state => state.toDoList);

    // useEffect(() => {
    //     dispatch(fetchList());
    // }, [dispatch]);

    const postNewTask = () => {
        dispatch(postNewTask());
        dispatch(fetchPost());
    };

    const keepNewText = (e) => {
        dispatch(keepNewText(e.currentTarget.value));
    };
    
    const addNewTask = () => {
        dispatch(addNewTask());
        dispatch(postNewTask());
    };
    
    const deleteToDoList = (e) => {
        dispatch(deleteTask(e.currentTarget.id));
        dispatch(deleteToDoList());
    };


    return (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <form onSubmit={addNewTask}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            label="Task"
                            variant="outlined"
                            type='text'
                            onChange={e =>keepNewText(e)}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" type='submit' onClick={addNewTask}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {toDoList.map((text, index) => {

                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Paper component={Box} p={2}>
                            <Grid container justifyContent='space-between' alignItems="center">
                                <Grid item>
                                    {text}
                                </Grid>
                                <Grid item>
                                    <IconButton id={index} onClick={e => deleteToDoList(e)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            })
            }
        </Container>
    )
}

export default ToDo;
