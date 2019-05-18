import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: '25%',
    margin: 'auto',
    marginTop: '50px',
    textAlign: 'center'
  }
}, { name: 'App' });

/**
 * @typedef {Object} App#Props
 * @property {never} [children]
 */

const propTypes = {};
const defaultProps = {};

/**
 *
 * @param {App#Props} props
 *
 * @return {JSX}
 *
 * @type {React.FC<App#Props>}
 */
export const App = props => {
  const classes = useStyles(props);

  return (
    <Paper className={classes.root}>
      <Typography>
        Hello World!
      </Typography>
    </Paper>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;
