import USERS from '../../data/Users';

export const GET_USERS = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(USERS);
    }, 1000),
  );
};

export default GET_USERS;
