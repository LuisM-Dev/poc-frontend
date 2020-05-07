import React from 'react';
import { Avatar, Typography } from '@material-ui/core';

import useStyles from './ProfileStyle';

const Profile = () => {
  const classes = useStyles();

  const user = {
    name: 'Luis Mendes',
    avatar: '/images/avatars/avatar_3.png',
    bio: 'IBM Standard User'
  };

  return (
    <div className={classes.root}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        data-test="profile-avatar"
        src={user.avatar}
        to=""
      />
      <Typography
        className={classes.name}
        data-test="profile-username"
        variant="h4">
        {user.name}
      </Typography>
      <Typography data-test="profile-bio" variant="body2">
        {user.bio}
      </Typography>
    </div>
  );
};

export default Profile;
