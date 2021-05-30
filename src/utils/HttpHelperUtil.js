import axios from "axios";

import Constants from './Constants';
const { api } = Constants.URLS;

import { Popup } from 'utils/SnackbarUtil';

function handleResponse(response) {
  const { status, data } = response;
  if (status === 200) Popup.success("Successful got the data");
  return data;
};

async function handleError(error) {
  return Promise.reject(error.message);
}

const apiInstance = axios.create({
  baseURL: api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


const HttpHelperUtil = {
  get: function (url) {
    return apiInstance
      .get(`${url}`)
      .then(handleResponse)
      .catch(handleError);
  },
};

export default HttpHelperUtil;
