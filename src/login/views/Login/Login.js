import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Header, Form } from '../../components';

import useStyles from './LoginStyle';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Card className={classes.card}>
        <CardContent>
          <Header />
          <Form />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
