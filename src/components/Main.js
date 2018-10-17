import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { blue }from '@material-ui/core/colors';
import { red }from '@material-ui/core/colors';


const styles = theme => ({
  mainPaper: {
    backgroundColor: theme.palette.grey[800],
    // backgroundColor: blue[200],
    color: theme.palette.common.white,
    padding: theme.spacing.unit * 4,
    // marginBottom: theme.spacing.unit * 4,
    // paddingTop: theme.spacing.unit * 4,
    // paddingBottom: theme.spacing.unit * 4,
    // paddingLeft: theme.spacing.unit * 4,
    // paddingRight: theme.spacing.unit * 4
  
  },
  mainText: {
    textAlign: "center",
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
    // padding: `${theme.spacing.unit * 4}px`,
    // paddingRight: theme.spacing.unit * 4,
    // backgroundColor: red[200],
  },
})

function Main(props){
  const { classes } = props;

  return(
    <Paper className={classes.mainPaper}>
      <div className={classes.mainText}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="display2" color="inherit" gutterBottom>
            Full-Stack JavaScript Developer
            </Typography>
            <Typography variant="headline" color="inherit" paragraph>
              Hi, my name is Andrew! I'm a inspiring JavaScript Web Developer and 
              looking for opportunities to enhance my skills. 
              Please take a look at my portfolio and leave a message!
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);