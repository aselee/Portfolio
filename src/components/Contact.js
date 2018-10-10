import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({
  card: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 20,
    marginRight: theme.spacing.unit * 20,
    height: 300,
  },
  margin: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  messageField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 450,
  },
});


class Contact extends React.Component {
  state = {
    first: '',
    last: '',
    email: '',
    multiline: 'Controlled',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  render(){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                Contact
              </Typography>
                <TextField
                  id="outlined-adornment-name"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="First Name"
                  value={this.state.first}
                  onChange={this.handleChange('first')}
                />
                <TextField
                  id="outlined-adornment-name"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Last Name"
                  value={this.state.last}
                  onChange={this.handleChange('last')}
                />        
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classNames(classes.margin, classes.textField)}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleChange('email')}
                />
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows="4"
                  name="message"
                  className={classes.messageField}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </CardContent>
          </Card>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);