import axios, { HeadersDefaults } from 'axios';

interface HttpHeader extends HeadersDefaults {
	Authorization?: string;
	'X-user-id'?: string;
}

const httpHeader = axios.defaults.headers as HttpHeader;

const setAuthorizationToken = (token: string) => {
  if (token) {
    httpHeader.Authorization = `Bearer ${token}`;
  }
};

const setUserId = (userId: string) => {
  if (userId) {
    httpHeader['X-user-id'] = userId;
  }
};

export { setAuthorizationToken, setUserId, httpHeader };
