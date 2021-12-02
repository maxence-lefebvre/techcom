import styles from './index.module.scss';
import { SignInOutButton } from '@techcom/client/feature-authn/ui-component';

export function Index() {
  return (
    <div className={styles.page}>
      <h2>Resources &amp; Tools</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <SignInOutButton />
    </div>
  );
}

export default Index;
