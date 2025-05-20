import { useState, useEffect } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';

import '@aws-amplify/ui-react/styles.css';

export function Auth() {
  return (
    <Authenticator signUpAttributes={['nickname']}>
      {/* Once an end-user has created an account & signed in,
        the underlying component is rendered with access to the user */}
      {({ signOut, user }) => (
        <main>
          <h1>This is visible once authenticated</h1>
          <h2>Hello User ID: {user!.username}</h2>
          <UserDetails />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

function UserDetails() {
  const [nickName, setNickName] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUserAttributes();
      setNickName(userData.nickname!);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>nickname attribute: {nickName}</h2>
    </div>
  );
}
