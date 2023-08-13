import axios from 'axios';

const BASE_URL = 'https://cdn.contentful.com';
const SPACE_ID = 'wm2z4ky2csk5';
const ACCESS_TOKEN = 'u4yyJ1wX_tlZ3znjrNywmL3B6NpEG6Hk7mfOkogUAF8';

const client = axios.create({
  baseURL: `${BASE_URL}/spaces/${SPACE_ID}/environments/master`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/vnd.contentful.delivery.v1+json',
  },
});

export const fetchEntry = (entryId: string) => {
  return client.get(`/entries/${entryId}`);
};
