<<<<<<< HEAD
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
=======
import React from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const users = [];
>>>>>>> d25b8247e8cf800d86126972fdd32c19769e2a36
  
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
