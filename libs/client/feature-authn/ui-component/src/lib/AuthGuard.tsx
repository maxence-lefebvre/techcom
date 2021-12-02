import { FC, memo, ReactElement } from 'react';

import { useSession } from '@techcom/client/feature-authn/core';

export interface AuthGuardProps {
  active?: boolean;
  children: ReactElement;
}

const AuthGuardBase: FC<AuthGuardProps> = ({
  active = false,
  children,
}: AuthGuardProps) => {
  const { status } = useSession();

  if (!active || status === 'authenticated') {
    return children;
  }

  if (active && status === 'loading') {
    return <div>Loading</div>;
  }

  return <div>Unauthorized</div>;
};

export default memo(AuthGuardBase);
