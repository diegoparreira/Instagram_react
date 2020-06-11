import React from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const users = [];
  
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
