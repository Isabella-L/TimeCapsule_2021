//feature yet to be implement:
//1. disable submit button when title is not filled.
import { useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//import Checkout from './Checkout';
//import AddressForm from './AddressForm';
//import { Toolbar } from '@material-ui/core';

//text fill
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

//toggle button
//import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
//import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
//import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
//import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { CssBaseline, Typography } from '@material-ui/core';
//import { breakpoints } from '@material-ui/system';

//public or private
import CreatePublic from './CreatePublic';

//switch
import Switch from '@material-ui/core/Switch';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 660,
        width: 500,
    },
    control: {
        padding: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    forms: {
        display: 'centre',
        alignItems: 'centre',
        justifyContent: 'centre',

    }
}));


function CreateCapsule() {
    
    useEffect(() => {
        axios.post("http://localhost:8080/api/name").then((response) => {
            console.log(response.data);
        });
    }, []);
    
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    //toggle button
    const [publicstatus, setPublic] = React.useState(true);

    const handleToggle = () => {
        setPublic(!publicstatus);
    };
    //-----------------------------------------------------------------
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    const submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            body: this.state.body
        };
        
            axios({
              url: 'http://localhost:8080/api/name',
              method: 'POST',
              data: payload
            })
              .then(() => {
                console.log('Data has been sent to the server');
                this.resetUserInputs();
                this.getBlogPost();
              })
              .catch(() => {
                console.log('Internal server error');
              });;
              
    };

    const handleNameChange = e => {
        console.log(`Typed => ${e.target.value}`);
        setName(e.target.value);
    };

    const handleTitleChange = e => {
        console.log(`Typed => ${e.target.value}`);
        setTitle(e.target.value);
    };


    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid key={0} item>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" gutterBottom>
                                Create Your Time Capsule
                            </Typography>
                            <form className={classes.forms} noValidate autoComplete="off">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <p>Your name?</p>
                                        <input
                                            required
                                            id="title"
                                            name="title"
                                            label="requiried"
                                            value={name}
                                            onChange={handleNameChange}
                                            variant="outlined"
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <p>Title: </p>
                                        <input
                                            required
                                            id="title"
                                            name="title"
                                            label="requiried"
                                            value={title}
                                            onChange={handleTitleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="outlined" color="primary" component="span">
                                                Click here to upload files
                                            </Button>
                                        </label>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            multiline
                                            rows={5}
                                            id="txtmsg"
                                            name="Input txt"
                                            label="Write your text here!"
                                            fullWidth
                                            defaultValue="I'm writing to you, from the past."
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            endIcon={<KeyboardArrowRightIcon />}
                                            onClick={submit}
                                            color="secondary">
                                            Submit
                                        </Button>

                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid key={1} item>
                        <Paper className={classes.paper}>
                            <Grid container spacing={3} alignItems="flex-end">
                                <Grid item>
                                    <Typography variant='h6' gutterBottom>Email for notification: </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField id="email" />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' gutterBottom>Opening Time:  </Typography>
                                </Grid>
                                <Grid item>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            name="opentime"
                                            type="datetime-local"
                                            defaultValue="2021-05-24T10:30"//can set it to current time?
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </Grid>
                                <Grid item>
                                    <ToggleButtonGroup
                                        value={publicstatus}
                                        exclusive
                                        onChange={handleToggle}
                                        aria-label="text alignment"
                                    >
                                        <ToggleButton value={true}>Public</ToggleButton>
                                        <ToggleButton value={false}>Private</ToggleButton>
                                    </ToggleButtonGroup>
                                    <Grid item>
                                        {
                                            publicstatus ?
                                                <Grid item>
                                                    <CreatePublic></CreatePublic>
                                                </Grid>
                                                :
                                                <Grid item>
                                                    <Grid item>
                                                        <FormControlLabel
                                                            value="discard"
                                                            control={<Switch color="primary" />}
                                                            label="Discard After Read: "
                                                            labelPlacement="start"
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <FormControlLabel
                                                            value="selfset"
                                                            control={<Switch color="primary" />}
                                                            label="Self-Set Key: "
                                                            labelPlacement="start"
                                                        />
                                                        <input type="text" name="selfsetkey" variant="outlined" />
                                                    </Grid>
                                                    <Grid item>
                                                        <FormControlLabel
                                                            value="isnotyetmsg"
                                                            control={<Switch color="primary" />}
                                                            label="Not yet message: "
                                                            labelPlacement="start"
                                                        />
                                                        <TextField
                                                            multiline
                                                            fullWidth
                                                            rows={5}
                                                            name="notyetmsg"
                                                            defaultValue="Not yet. Come back later!"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>

    );

}

export default CreateCapsule;

