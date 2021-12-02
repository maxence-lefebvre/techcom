import { memo, ReactElement } from 'react';

import { SessionProvider, Session } from '@techcom/client/feature-authn/core';

import AuthGuard from './AuthGuard';

export interface AuthProviderProps {
  session: Session;
  requireAuth?: boolean;
  children: ReactElement;
}
export const AuthProviderBase = ({
  session,
  requireAuth,
  children,
}: AuthProviderProps) => (
  <SessionProvider session={session}>
    <AuthGuard active={!!requireAuth}>{children}</AuthGuard>
  </SessionProvider>
);

export default memo(AuthProviderBase);
