import React, { memo } from 'react';
import { signIn } from '@techcom/client/feature-authn/core';

const SignInButtonBase = () => {
  return <button onClick={signIn}>Sign in</button>;
};

export default memo(SignInButtonBase);
