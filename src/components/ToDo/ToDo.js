import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Container, CssBaseline, Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { nanoid } from 'nanoid';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));


const ToDo = () => {
    const classes = useStyles();

    const [items, setItems] = useState({
        name: ''
    });

    const addItem = (e) => {
        e.preventDefault();
        setItems([
            // ...item,
            {
                items,
                id: nanoid(),
            }
        ]);
        setItems('');
    };

    const removeITem = (id) => {
        const index = items.findIndex(i => i.id === id);
        const itemsCopy = [...items];
        itemsCopy.splice(index, 1);
        setItems(itemsCopy);
    };

    return (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <form onSubmit={addItem}>
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
                            value={items}
                            onChange={e => setItems(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" type='submit'>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <Grid container direction='column' spacing={2}>
                {items.map(item => (
                    <Grid
                        item
                        key={item.id}>
                        <Paper component={Box} p={2}>
                            <Grid container justifyContent='space-between' alignItems="center">
                                <Grid item>
                                    {item.name}
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => removeITem(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ToDo;
