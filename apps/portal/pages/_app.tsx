import {
  AuthAwareAppProps,
  AuthProvider,
} from '@techcom/client/feature-authn/ui-component';
import './styles.css';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AuthAwareAppProps) {
  return (
    <AuthProvider session={session} requireAuth={!!Component.requireAuth}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default CustomApp;
