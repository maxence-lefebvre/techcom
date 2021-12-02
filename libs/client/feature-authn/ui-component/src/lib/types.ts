import { AppProps } from 'next/app';

export type NextAppPropsComponentType = AppProps['Component'];

export type AuthAwareComponent = NextAppPropsComponentType & {
  requireAuth?: boolean;
};

export interface AuthAwareAppProps extends Omit<AppProps, 'Component'> {
  Component: AuthAwareComponent;
}
