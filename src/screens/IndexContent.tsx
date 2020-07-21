import React from 'react';
import getConfig from 'next/config';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: 'green',
    color: theme.palette.common.white
  }
}));

interface IndexProps {
  serverGreeting: string;
}

const IndexContent: React.FC<IndexProps> = (props) => {
  const { serverGreeting } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>{serverGreeting}</h1>
      <h1>{publicRuntimeConfig.greeting}</h1>
      <Button variant="contained" className={classes.button}>
        Material-UI Button
      </Button>
    </div>
  );
};

export default IndexContent;
