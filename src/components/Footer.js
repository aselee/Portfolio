import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
    <footer className={classes.footer}>
      <Typography variant="title" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subheading" align="center" color="textSecondary" component="p">
        Add social media links and github page
      </Typography>
  </footer>
  )
};

export default withStyles(styles)(Footer);