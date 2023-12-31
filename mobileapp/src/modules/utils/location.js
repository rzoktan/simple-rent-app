import axios from 'axios';

const urlLocation = process.env.REACT_APP_HOST + '/locations';

export const getAllLocation = () => {
  return axios.get(urlLocation + '/all');
};

export const getLocationByRenterId = token => {
  return axios.get(urlLocation, {headers: {'x-access-token': token}});
};

export const postLocationbyRenterId = (body, token) => {
  return axios.post(urlLocation, body, {headers: {'x-access-token': token}});
};
