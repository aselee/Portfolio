import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  card: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 20,
    marginRight: theme.spacing.unit * 20,
    height: 300,
  },
  margin: {
    margin: theme.spacing.unit,
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
});


class Contact extends React.Component {
  state = {
    name: '',
    value: '',
    message: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  render(){
    const { classes } = this.props;

    return (
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
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
            <TextField
              id="outlined-adornment-name"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="Last Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
        </CardContent>
      </Card>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);