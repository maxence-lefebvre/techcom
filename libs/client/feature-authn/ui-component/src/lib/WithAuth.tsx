import { AuthAwareComponent, NextAppPropsComponentType } from './types';

export default (Component: NextAppPropsComponentType): AuthAwareComponent => {
  (Component as AuthAwareComponent).requireAuth = true;
  return Component;
};
