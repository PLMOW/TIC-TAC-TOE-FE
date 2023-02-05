/* Interfaces */
interface defaultInterface {
  readonly [key: string]: string;
}

interface endPoint extends defaultInterface {}

interface error extends defaultInterface {}

interface api {
  END_POINT: endPoint;
  ERROR: error;
  ROUTE: string;
}

const END_POINT: endPoint = Object.freeze({
  HELLO: '/api/hello',
  SEARCH_MUSIC: 'api/music',
});

const ERROR: error = Object.freeze({
  ENONT: 'ENOENT',
  ENONT_MESSAGE: 'Unusable API EndPoint',
  PROTOCOL_MESSAGE: 'Protocol Error',
});

const API: api = Object.freeze({
  END_POINT: END_POINT,
  ERROR: ERROR,
  ROUTE: 'http://localhost:8080',
});

export default API;
