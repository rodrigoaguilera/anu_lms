import React from 'react';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const AccentBox = withStyles(theme => ({
  root: {
    height: 35,
    borderLeft: `4px solid ${theme.palette.accent}`,
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      height: 50,
    },
    '& .MuiTypography-root': {
      marginBottom: 0,
    },
  },
}))(Box);

const Accented = ({ children }) => (
  <AccentBox display="flex" alignItems="center">
    {children}
  </AccentBox>
);

export default Accented;
