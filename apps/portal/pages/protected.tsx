import { WithAuth } from '@techcom/client/feature-authn/ui-component';

export function Protected() {
  return (
    <div>
      <p>This is a protected page.</p>
    </div>
  );
}

export default WithAuth(Protected);
