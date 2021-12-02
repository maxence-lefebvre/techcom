import React, { memo } from 'react';
import { signOut } from '@techcom/client/feature-authn/core';

const SignOutButtonBase = () => {
  return <button onClick={signOut}>Sign out</button>;
};

export default memo(SignOutButtonBase);
