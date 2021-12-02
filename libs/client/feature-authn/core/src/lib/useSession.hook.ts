import { useSession as useNextAuthSession } from 'next-auth/react';

export const useSession = () => {
  const { data: session, status } = useNextAuthSession();
  return { session, status };
};
