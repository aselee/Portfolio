import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { red }from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';


const styles = theme => ({
  mainFeaturedPost: {
    // backgroundColor: theme.palette.grey[800],
    backgroundColor: red[200],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  row: {
    display: 'flex-end',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
})

function Main(props){
  const { classes } = props;

  return(
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
      <div className={classes.row}>
            <Avatar
              alt="Adelle Charles"
              src="/static/images/uxceo-128.jpg"
              className={classNames(classes.bigAvatar)}
            />
          </div>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography variant="display2" color="inherit" gutterBottom>
              Full-Stack JavaScript Developer
            </Typography>
            <Typography variant="headline" color="inherit" paragraph>
              Hi, my name is Andrew! I'm a inspiring JavaScript Web Developer and 
              looking for opportunities to enhance my skills. 
              Please take a look at my portfolio and leave a message!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);