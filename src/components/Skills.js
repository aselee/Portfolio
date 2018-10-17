import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { blue }from '@material-ui/core/colors';
import { red }from '@material-ui/core/colors';


const styles = theme => ({
  unit: {
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 5, // 3
    marginRight: theme.spacing.unit * 5, // 3
    backgroundColor: blue[200],
    // possibly dont need this code...
    // [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    //   width: 500,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: red[200],
  },
  cardContent: {
    // this did nothing @ 10/17
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flexGrow: 1,
  },
});


function Skills(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.unit}>
          <div className={classes.content}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Skills
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Technical Skills
            </Typography>
          </div>
        </div>

        {/* Skills */}

          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={100}> 
                                {/* spacing={40} */}
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon JS */}
                      <FontAwesomeIcon 
                        icon={['fab', 'js-square']} 
                        size="4x" 
                        fixedWidth
                        color="#FBE50F"
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        JavaScript
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon React */}
                      <FontAwesomeIcon 
                        icon={['fab', 'react']} s
                        size="4x" 
                        fixedWidth
                        color="#19F0FA"
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        React
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon Node */}
                      <FontAwesomeIcon 
                        icon={['fab', 'node']} 
                        size="4x" 
                        fixedWidth
                        color="#38932B"
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        Node
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon HTML */}
                      <FontAwesomeIcon 
                        icon={['fab', 'html5']} 
                        size="4x" 
                        fixedWidth
                        color="#E17113"
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        HTML
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon CSS */}
                      <FontAwesomeIcon 
                        icon={['fab', 'css3-alt']} 
                        size="4x" 
                        fixedWidth
                        color="#134FE1"
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        CSS
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>

                      {/* adding font awesome icon CSS */}
                      <FontAwesomeIcon 
                        icon={['fas', 'terminal']} 
                        size="4x" 
                        fixedWidth
                      />

                      <Typography gutterBottom variant="headline" component="h2">
                        Command Line
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>  
            </Grid>
          </div>
    </React.Fragment>
  )
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);