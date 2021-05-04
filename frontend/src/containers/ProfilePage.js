import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HeadingQuaternary } from '../common/Typography';

import { Snackbar } from '../components';

import { useAuthContext } from '../context';

const changeProfileFormFields = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

const changePasswordFormFields = [
  {
    type: 'password',
    name: 'old_password',
    id: 'oldPassword',
    placeholder: 'Current Password',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'New Password',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'password',
    name: 'password2',
    id: 'password2',
    placeholder: 'Confirm',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

const ProfilePage = ({ FormContainerComponent }) => {
  const {
    checkAuth,
    getCurrentUser,
    currentUser,
    updatePassword,
    updateProfile,
    // updateImage,
    apiAuthErr,
    apiAuthSuccess,
    apiChangedProfile,
    apiChangedUserImage,
  } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (checkAuth()) history.push('/login');

  const onSubmission = (apiFunction) => (data) => apiFunction(data);

  useEffect(() => {
    document.title = 'Foodtrucks | My Profile';
  }, []);

  console.log('Changed Profile: ', apiChangedProfile);
  console.log('Changed Image: ', apiChangedUserImage);

  return (
    <div>
      {!currentUser ? (
        <HeadingQuaternary>Loading...</HeadingQuaternary>
      ) : (
        <>
          <FormContainerComponent
            onSubmit={onSubmission(updateProfile)}
            formFields={changeProfileFormFields}
          />

          <FormContainerComponent
            onSubmit={onSubmission(updatePassword)}
            formFields={changePasswordFormFields}
          />
        </>
      )}

      {!apiAuthErr ? null : <Snackbar color="red">{apiAuthErr}</Snackbar>}

      {!apiAuthSuccess ? null : (
        <Snackbar color="red">{apiAuthSuccess}</Snackbar>
      )}
    </div>
  );
};

ProfilePage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default ProfilePage;
