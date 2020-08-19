import React, {useState, useEffect} from 'react';

import UsersList from '../../containers/UsersList/UsersList';
import config from "../../config";

const GET_USERS_URL = `${config.URL}/users`

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(GET_USERS_URL)
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
