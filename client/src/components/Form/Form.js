import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';//React Component for Converting Files to base64
import useStyles from './styles';
import axios from "axios";

const Form = () => {
    const classes = useStyles();

    const [capsuleData, setcapsuleData] = useState({
        creator: '',
        title: '',
        message: '',
        selectedFile: '',
        creatdate: new Date(),
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/capsules/add", { capsuleData })
            .then(() => {
                console.log(capsuleData);
            })
            .catch(() => {
                alert('Error retrieving data!!');
            });
    };

    const clear = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant='h6'>Deposit your Capsule Here</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth
                    value={capsuleData.creator}
                    onChange={(e) => setcapsuleData({ ...capsuleData, creator: e.target.value })}
                //all property remains the same expect 'creator'
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth
                    value={capsuleData.title}
                    onChange={(e) => setcapsuleData({ ...capsuleData, title: e.target.value })}
                //all property remains the same expect 'creator'
                />
                <TextField name="message" variant="outlined" label="Message" fullWidth
                    value={capsuleData.message}
                    onChange={(e) => setcapsuleData({ ...capsuleData, message: e.target.value })}
                //all property remains the same expect 'creator'
                />
                <div className={classes.fileInput}>
                    <FileBase type="file" mutiple={false}
                        onDone={({ base64 }) => setcapsuleData({ ...capsuleData, selectedfile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>

    )
}

export default Form;