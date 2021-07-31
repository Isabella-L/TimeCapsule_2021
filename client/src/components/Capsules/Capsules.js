import React, { useState } from 'react';
import Capsule from './Capsule/Capsule';
import axios from 'axios';
import { useEffect } from 'react';
import {Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';


const Capsules = () => {
    const [capsuleData, setcapsuleData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios
        .get("http://localhost:5000/capsules")
        .then((res) => {setcapsuleData(res.data)})
        .catch(error => console.log("error getting datat"))
    });

    return (
        !capsuleData.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {capsuleData.map((capsule) => (
                    <Grid key={capsule._id} item xs={12} sm={6}>
                    <Capsule capsule={capsule} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

 
    // useEffect(() => {
    //     axios.get("http://localhost:5000/capsules").then((response) =>{
    //         //console.log(response.data);
    //     });
    // }, []);

    
export default Capsules;