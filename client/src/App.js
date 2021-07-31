import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import logo from './images/TimeCapsule.png';

import Capsules from './components/Capsules/Capsules';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static" colour="inherit">
        <Typography className={classes.heading} varaint="h2" align="center">Capsules</Typography>
        <img className={classes.image} src={logo} alt="timecapsules"/> 
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alighnItems="stretch" spacing={3}>
            {/* full width on extra small devices, 7 on small or larger device */}
            <Grid item xs={12} sm={7}>
              <Capsules /> 
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default App;