import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
//import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//import DeleteIcon from '@material-ui/icons/Delete';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import moment from 'moment';

import useStyles from './styles';

const Capsule = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card} border={1} >
            <div>
                <h1></h1>
            </div>
        </Card>
        // <div>
        //     {capsuleData.map((capsule, key) => (
        //         <h2> {capsule.title} </h2>
        //     ))}
        // </div>

    )
}

export default Capsule;