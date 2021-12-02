import { memo } from 'react';
import { useSession } from '@techcom/client/feature-authn/core';
import SignOutButton from './SignOutButton/SignOutButton';
import SignInButton from './SignInButton/SignInButton';

const SignInOutButtonBase = () => {
  const { status, session } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        {session?.user && <p>Welcome, {session.user.name}</p>}
        <SignOutButton />
      </>
    );
  }

  return <SignInButton />;
};

export default memo(SignInOutButtonBase);
