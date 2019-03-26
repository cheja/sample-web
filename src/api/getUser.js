import store from "../redux/store";
import { setUser } from "../redux/actions";

const USER_URL = 'https://reqres.in/api/users/1';

const getUser = async () => {
  let response = await fetch(USER_URL);
  response = await response.json();
  store.dispatch(setUser(response));
  console.log(JSON.stringify(store.getState()));
};

export default getUser;
