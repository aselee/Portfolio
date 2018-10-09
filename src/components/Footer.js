import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});


function Footer(props){
  const { classes } = props;

  return(
    <Paper>
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Social Media
        </Typography>
        <div>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" fixedWidth color="lightblue"/>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="4x" fixedWidth color="purple" />
          <FontAwesomeIcon icon={['fab', 'github']} size="4x" fixedWidth />
        </div>
    </footer>
  </Paper>
  )
};

export default withStyles(styles)(Footer);